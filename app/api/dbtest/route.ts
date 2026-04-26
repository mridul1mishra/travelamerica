import { NextResponse } from "next/server";
import { Client } from "pg";

export async function GET() {
  try {
    console.log("Connecting to DB...");
    const client = new Client({
      connectionString: process.env.POSTGRES_URL,
    });

    await client.connect();
    console.log("Connected!");

    const result = await client.query("SELECT NOW()");
    await client.end();

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("DB ERROR:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
