import { NextResponse } from "next/server";
import { getIp } from "@/utils/get-ip";
import { RateLimiterMemory } from "rate-limiter-flexible";

// Rate limiter (5 requests per minute per IP)
const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60, // per 60 seconds
});

export async function GET(req: Request) {
  const ip = getIp(req.headers) || "global";

  if (!process.env.WAKATIME_API_KEY || process.env.WAKATIME_API_KEY.trim() === "") {
    return NextResponse.json(
      { WakaTimeResponse: null, errorMsg: "Counting" },
      { status: 200 }
    );
  }

  try {
    await rateLimiter.consume(ip);
  } catch {
    return NextResponse.json(
      { WakaTimeResponse: null, errorMsg: "Maximum Limit Reached" },
      { status: 429 }
    );
  }

  const auth = Buffer.from(process.env.WAKATIME_API_KEY).toString("base64");

  try {
    const res = await fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      next: { revalidate: 600 }, // Server-side caching (10 mins)
    });

    if (!res.ok) {
      return NextResponse.json(
        { WakaTimeResponse: null, errorMsg: "Failed to fetch" },
        { status: 502 }
      );
    }

    const data = await res.json();

    return NextResponse.json({ WakaTimeResponse: data, errorMsg: null });
  } catch {
    return NextResponse.json(
      { WakaTimeResponse: null, errorMsg: "Failed to fetch" },
      { status: 500 }
    );
  }
}