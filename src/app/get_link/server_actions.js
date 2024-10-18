"use server";
import { sql } from "@vercel/postgres";

export async function FilteredDB(query) {

    const data = await sql`SELECT * FROM links WHERE name LIKE '%'||${query}||'%'`;
    // console.log(Object.keys(data.rows));

    const DisplayData=data.rows.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.link}</td>
                    <td>{info.uploaded.toString()}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>User</th>
                    <th>Link</th>
                    <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}