"use server";
import { sql } from "@vercel/postgres";

export async function FilteredDB(props) {

    const query = props.query;
    const data = query ? await sql`SELECT * FROM links WHERE name LIKE '%'||${query}||'%'` : await sql`SELECT * FROM links`;

    // console.log(data);
    // console.log(query);

    const DisplayData=data.rows.map(
        (info)=>{
            return(
                <tr key={info.id}>
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