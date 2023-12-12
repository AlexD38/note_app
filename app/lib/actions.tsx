"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function deleteFolder(id: string) {
    try {
        const folderDeleted = await sql`DELETE FROM folders WHERE id = ${id}`;
        console.log("folder deleted : ", id);
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/folders");
}
