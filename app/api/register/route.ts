import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, organization, name } = await req.json();
    if (!email || !organization || !name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const entry = {
      email,
      organization,
      name,
      timestamp: new Date().toISOString(),
    };
    try {
      const { kv } = await import("@vercel/kv");
      await kv.set(`lead:${email}`, JSON.stringify(entry));
      await kv.lpush("leads", JSON.stringify(entry));
    } catch {
      console.log("KV not configured, lead data:", entry);
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
