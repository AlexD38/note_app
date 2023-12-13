import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function fetchFolders() {
    try {
        const folders = await sql`SELECT * FROM folders`;
        // console.log(folders.rows);

        if (!folders) {
            console.log("No folders found");
        }
        revalidatePath("/dashboard/folders");
        return folders.rows;
    } catch (err) {
        console.error("Database Error:", err);
        console.log("Failed to fetch folders from server");
    }
}
export async function fetchFilesFromTheirFolders(folderId: any) {
    try {
        console.log("Fetching files with folder : ", folderId);
        const files = await sql`SELECT * FROM files WHERE folder_id = ${folderId}`;
        // const data = await Promise.all([invoiceCountPromise, customerCountPromise, invoiceStatusPromise]);
        if (!files) {
            console.log("No folders found");
        }
        revalidatePath(`/dashboard/folders/${folderId}`);
        return files.rows;
    } catch (err) {
        console.error("Database Error:", err);
        console.log("Failed to fetch folders from server");
    }
}
