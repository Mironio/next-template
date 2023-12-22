import { NextResponse } from 'next/server';
import { jokeMock } from "@/app/api/mock/random_joke/joke.mock";

export function GET() {
  return NextResponse.json(jokeMock, {status: 200});
}
