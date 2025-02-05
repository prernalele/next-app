// GET -getting
// POST - creating data
// PUT - updating

import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  //fetch users from a database usually. for now let's hardcode
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
