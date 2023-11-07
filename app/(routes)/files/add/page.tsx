"use server";
import { redirect } from "next/navigation";
import client from "../../../../database";
import "../../../style.css";

export default async function AddFile(fileName: string, fileSlug: string, fileBody: string, folder: number) {
    try {
        const sqlQuery = {
            text: `INSERT INTO files (title, slug, body, folder_id) VALUES ($1, $2, $3, $4) RETURNING *;`,
            values: [fileName, fileSlug, fileBody, folder],
        };
        const response = await client.query(sqlQuery);
        if (!response) {
            throw new Error("Failed to fetch data");
        }
        console.log(response.rows);
    } catch (error) {
        console.log(error);
    }
    redirect(`/`);
}
