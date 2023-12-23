import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const json = await req.json()
  // 'json' property just to mimic real behavior
  return NextResponse.json({json}, {status: 200});
}
