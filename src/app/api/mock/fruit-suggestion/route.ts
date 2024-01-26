import { NextRequest, NextResponse } from 'next/server';
import { fruitSuggestionMock } from "@/app/api/mock/fruit-suggestion/fruitSuggestion.mock";
import FruitSuggestionResponse from "@/app/models/FruitSuggestionResponse.interface";

export function GET(
  req: NextRequest,
): NextResponse<FruitSuggestionResponse> {

  let res = {suggestions: []} as FruitSuggestionResponse
  const {searchParams} = new URL(req.url);
  const i = searchParams.get("i") as string

  if (i) {
    const suggestions = fruitSuggestionMock.suggestions.filter(s => s.label.toLowerCase().includes(i.toLowerCase()));
    res = {suggestions}
  }

  return NextResponse.json(res, {status: 200});
}

