import { NextRequest, NextResponse } from "next/server";
import { useParams } from "next/navigation";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  console.log(" params", params);
  const { id } = await params;
  if (id > 10) {
    return new Response(JSON.stringify({ error: "user not found" }), {
      status: 400,
    });
  }
  //return NextResponse.json({ id: 1, name: "mosh" });
  return new Response(JSON.stringify({ id: 1, name: "mosh" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Fetch user from db
  // If user is not found
  //we return 404
  // if found we delete the user
  // return 200
  if (params.id > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json({});
}

