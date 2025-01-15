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

