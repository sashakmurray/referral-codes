'use server'
import { sql } from "@vercel/postgres";


export async function addLink(value) {
    console.log(value)
    try {
        await sql`INSERT INTO links(name, link, uploaded) VALUES (${value}, ${value}, CURRENT_DATE);`;
      } catch (error) {
        console.log(error)
      }
}

