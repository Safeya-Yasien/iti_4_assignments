import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes`); // Calling your Proxy API
    if (!res.ok) {
      throw new Error("Failed to fetch from external API");
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching recipes", error },
      { status: 500 },
    );
  }
}
