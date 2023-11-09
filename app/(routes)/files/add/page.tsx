"use server";
import { redirect } from "next/navigation";
import client from "../../../../database";
import "../../../style.css";
import { revalidatePath } from "next/cache";

export default async function AddFile(fileName: string, fileSlug: string, fileBody: string) {
    try {
        const sqlQuery = {
            text: `INSERT INTO files (title, slug, body) VALUES ($1, $2, $3) RETURNING *;`,
            values: [fileName, fileSlug, fileBody],
        };
        const response = await client.query(sqlQuery);
        if (!response) {
            throw new Error("Failed to fetch data");
        }
        console.log(response.rows);
    } catch (error) {
        console.log(error);
    }
    revalidatePath("files");
}
