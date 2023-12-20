import { NextResponse } from 'next/server';
import { commitHash } from "@/app/version";

export function GET() {
  return NextResponse.json({
    version: commitHash.substring(0, 4),
    date: new Date()
  }, {status: 200});
}
