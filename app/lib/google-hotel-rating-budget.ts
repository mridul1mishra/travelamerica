export type HotelRatingBudgetLimits = { daily: number; monthly: number; ipHourly: number };
export type BudgetClient = {
  query: (sql: string, values?: unknown[]) => Promise<{ rows: Record<string, unknown>[] }>;
  release: () => void;
};
export type BudgetPool = { connect: () => Promise<BudgetClient> };

export async function reserveHotelRatingBudget(
  pool: BudgetPool,
  ipHash: string,
  limits: HotelRatingBudgetLimits,
  attempts = 1,
): Promise<"allowed" | "ip_limit" | "global_limit"> {
  if (!Number.isSafeInteger(attempts) || attempts < 1 || attempts > 4 || !/^[a-f0-9]{64}$/.test(ipHash)
    || Object.values(limits).some((value) => !Number.isSafeInteger(value) || value < 0)) throw new Error("Invalid budget configuration");
  const client = await pool.connect();
  let transaction = false;
  try {
    await client.query("BEGIN");
    transaction = true;
    await client.query("SET LOCAL statement_timeout = '3000ms'");
    // A database lock serializes reservations across every server instance.
    await client.query("SELECT pg_advisory_xact_lock(724613, 901)");
    const clock = await client.query(`WITH current_clock AS (SELECT clock_timestamp() AS now)
      SELECT date_trunc('day', now AT TIME ZONE 'UTC') AT TIME ZONE 'UTC' AS day_start,
        date_trunc('month', now AT TIME ZONE 'UTC') AT TIME ZONE 'UTC' AS month_start,
        date_trunc('hour', now AT TIME ZONE 'UTC') AT TIME ZONE 'UTC' AS hour_start
      FROM current_clock`);
    const { day_start: day, month_start: month, hour_start: hour } = clock.rows[0] ?? {};
    if (!day || !month || !hour) throw new Error("Budget clock unavailable");
    // Cleanup occurs on requests; no ratings, tokens or raw IPs are retained.
    await client.query(`DELETE FROM hotel_rating_usage WHERE scope = 'ip'
      AND window_started < $1::timestamptz - INTERVAL '24 hours'`, [hour]);
    const counters = await client.query(`INSERT INTO hotel_rating_usage (scope, requester_key, window_started, attempts)
      VALUES ('day', 'global', $1, 0), ('month', 'global', $2, 0), ('ip', $3, $4, 0)
      ON CONFLICT (scope, requester_key) DO UPDATE SET
        attempts = CASE WHEN hotel_rating_usage.window_started = EXCLUDED.window_started
          THEN hotel_rating_usage.attempts ELSE 0 END,
        window_started = EXCLUDED.window_started
      RETURNING scope, attempts`, [day, month, ipHash, hour]);
    const counts = new Map(counters.rows.map((row) => [row.scope, Number(row.attempts)]));
    if (["day", "month", "ip"].some((scope) => !Number.isSafeInteger(counts.get(scope)) || counts.get(scope)! < 0)) throw new Error("Budget counters unavailable");
    const result = counts.get("ip")! + attempts > limits.ipHourly ? "ip_limit"
      : counts.get("day")! + attempts > limits.daily || counts.get("month")! + attempts > limits.monthly ? "global_limit" : "allowed";
    if (result === "allowed") {
      const incremented = await client.query(`UPDATE hotel_rating_usage SET attempts = attempts + $2
        WHERE (scope IN ('day', 'month') AND requester_key = 'global')
          OR (scope = 'ip' AND requester_key = $1)
        RETURNING scope`, [ipHash, attempts]);
      if (incremented.rows.length !== 3) throw new Error("Budget reservation incomplete");
    }
    await client.query("COMMIT");
    transaction = false;
    return result;
  } catch (error) {
    if (transaction) await client.query("ROLLBACK").catch(() => {});
    throw error;
  } finally {
    client.release();
  }
}
