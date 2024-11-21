import type { NextFetchEvent, NextRequest } from "next/server";
import getHypertune from "src/lib/getHypertune";

export const config = {
  matcher: "/blabla",
};

export async function middleware(
  req: NextRequest,
  event: NextFetchEvent,
) {
  const hypertune = await getHypertune();

  const myFirstAPIFilter = hypertune.myFirstAPIFilter({ fallback: false });
  console.log("Middleware Flag:", myFirstAPIFilter);

  event.waitUntil(hypertune.flushLogs());
}
