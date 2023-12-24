import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import logger from "../logger";

export function middleware(req: NextRequest) {
  logger.info(`${req.method} ${req.url}`);
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
