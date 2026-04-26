import { NextResponse } from "next/server";
import { Client } from "pg";

export async function GET() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  await client.connect();
  const result = await client.query("SELECT NOW()");
  await client.end();

  return NextResponse.json(result.rows);
}
