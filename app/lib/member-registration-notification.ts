import "server-only";

type NewMember = { name: string; email: string };

export async function notifyMemberRegistration(member: NewMember, fetcher: typeof fetch = fetch, env: NodeJS.ProcessEnv = process.env): Promise<void> {
  const apiKey = env.SMTP2GO_API_KEY?.trim();
  const fromEmail = env.SMTP2GO_FROM_EMAIL?.trim() || "hello@travelsamericas.com";
  const fromName = env.SMTP2GO_FROM_NAME?.trim() || "Travels Americas";
  try {
    if (!apiKey || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fromEmail)
      || fromName.length > 128 || /[\r\n<>]/.test(fromName)) throw new Error("Mail unavailable");
    const response = await fetcher("https://api.smtp2go.com/v3/email/send", {
      method: "POST", cache: "no-store", signal: AbortSignal.timeout(10000),
      headers: { "Content-Type": "application/json", "X-Smtp2go-Api-Key": apiKey },
      body: JSON.stringify({
        sender: `${fromName} <${fromEmail}>`,
        to: ["mridul1mishra@gmail.com"],
        subject: "New Travels Americas account created",
        text_body: `A new account was created on Travels Americas.\n\nName: ${member.name}\nEmail: ${member.email}\n\nEmail verification may still be pending.`,
      }),
    });
    const result = await response.json() as { data?: { succeeded?: number; failed?: number } };
    if (!response.ok || result.data?.succeeded !== 1 || result.data.failed !== 0) throw new Error("Mail unavailable");
  } catch {
    // Owner notifications must never block account creation or expose member data.
    console.error("[member-auth] REGISTRATION_NOTIFICATION_FAILED");
  }
}
