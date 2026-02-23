import { NextRequest, NextResponse } from "next/server";

const ADMIN_TOKEN = "ametrine-admin-2026";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization") ?? "";
  if (auth !== `Bearer ${ADMIN_TOKEN}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { kv } = await import("@vercel/kv");
    const leads = await kv.lrange("leads", 0, -1);
    const parsed = leads.map((l: string) => {
      try { return JSON.parse(l); } catch { return l; }
    });
    return NextResponse.json({ leads: parsed });
  } catch {
    return NextResponse.json({ leads: [], message: "KV not configured" });
  }
}
