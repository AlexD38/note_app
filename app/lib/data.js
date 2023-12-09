import { sql } from "@vercel/postgres";

export async function fetchFolders() {
    try {
        const folders = await sql`SELECT * FROM folders`;

        // const data = await Promise.all([invoiceCountPromise, customerCountPromise, invoiceStatusPromise]);
        if (!folders) {
            console.log("No folders found");
        }
        return folders.rows;
    } catch (err) {
        console.error("Database Error:", err);
        console.log("Failed to fetch folders from server");
    }
}
