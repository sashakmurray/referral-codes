import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  // const res = await request.json();

  try {
    const db = await sql`SELECT * FROM links;`;
    console.log(db);
    return NextResponse.json({ database: db }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  
}

// To handle a POST request to /api
export async function POST(request) {
  const res = await request.json();
  const value = res.link;
  
    try {
        await sql`INSERT INTO links(name, link, uploaded) VALUES (${value}, ${value}, CURRENT_DATE);`;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
  return NextResponse.json({ message: "Added value to database" }, { status: 200 });
}
