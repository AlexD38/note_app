"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function deleteFolder(id: string) {
    try {
        console.log(id);
        await sql`DELETE FROM folders WHERE id = ${id}`;
        console.log("folder deleted : ", id);
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/folders");
    redirect("/dashboard/folders");
}
export async function createFolder(formData: FormData) {
    const rawFormData = {
        folderName: formData.get("folderName"),
    };
    const folderName = rawFormData.folderName;
    console.log(rawFormData);
    try {
        await sql`INSERT INTO folders (name) VALUES (${folderName}) RETURNING *`;
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/folders");
    redirect("/dashboard/folders");
}
