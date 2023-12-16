"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function deleteFolder() {
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
export async function createFolder() {
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
export async function createFile() {
    const rawFormData = {
        fileTitle: formData.get("title"),
        fileSlug: formData.get("slug"),
        fileBody: formData.get("body"),
        filesFolder: formData.get("folder"),
    };
    console.log("data recieved from form submition : ", rawFormData);
    const { fileTitle, fileSlug, fileBody, filesFolder } = rawFormData;
    try {
        const fileCreated = await sql`INSERT INTO files (title, slug, body, folder_id) VALUES (${fileTitle}, ${fileSlug}, ${fileBody}, ${filesFolder}) RETURNING *`;
        console.log(fileCreated.rows);
    } catch (error) {
        console.log(error);
    }
    revalidatePath(`/dashboard/folders/[id]`);
    redirect("/dashboard/folders");
}
