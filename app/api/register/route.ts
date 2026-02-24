import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, organization, name } = await req.json();
    if (!email || !organization || !name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const entry = {
      name,
      email,
      organization,
      timestamp: new Date().toISOString(),
    };

    // Send to Make.com webhook → Google Sheets
    const MAKE_WEBHOOK = process.env.MAKE_WEBHOOK_URL || "";
    if (MAKE_WEBHOOK) {
      await fetch(MAKE_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
