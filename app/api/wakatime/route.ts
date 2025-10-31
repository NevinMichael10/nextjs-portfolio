import { NextResponse } from "next/server";
import { getIp } from "@/utils/get-ip";
import { RateLimiterMemory } from "rate-limiter-flexible";

// Rate limiter (5 requests per minute per IP)
const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60, // per 60 seconds
});

// --- Simple in-memory cache ---
let cachedData: any = null;
let cacheTimestamp = 0;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export async function GET(req: Request) {
  const ip = getIp(req.headers);

  if (!process.env.WAKATIME_API_KEY || process.env.WAKATIME_API_KEY.trim() === "") {
    return NextResponse.json(
      { WakaTimeResponse: null, errorMsg: "Counting" },
      { status: 500 }
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

  // --- Return cached data if valid ---
  const now = Date.now();
  if (cachedData && now - cacheTimestamp < CACHE_TTL) {
    return NextResponse.json({
      WakaTimeResponse: cachedData,
      errorMsg: null,
      cached: true,
    });
  }

  const auth = Buffer.from(process.env.WAKATIME_API_KEY).toString("base64");

  try {
    const res = await fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      cache: "no-store", // Avoid Next.js built-in caching
    });

    if (!res.ok) {
      return NextResponse.json(
        { WakaTimeResponse: null, errorMsg: "Failed to fetch" },
        { status: 500 }
      );
    }

    const data = await res.json();

    // --- Store in cache ---
    cachedData = data;
    cacheTimestamp = now;

    return NextResponse.json({ WakaTimeResponse: data, errorMsg: null, cached: false });
  } catch {
    return NextResponse.json(
      { WakaTimeResponse: null, errorMsg: "Failed to fetch" },
      { status: 500 }
    );
  }
}