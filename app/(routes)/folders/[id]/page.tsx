"use server";
import Link from "next/link";
import client from "../../../../database";
import { revalidateTag } from "next/cache";

export default async function getAllFilesFromFolder(folderId: any) {
    try {
        const sqlQuery = {
            text: `SELECT * FROM files WHERE folder_id = $1;`,
            values: [folderId],
        };
        const response = await client.query(sqlQuery);
        const files = response.rows;
        if (!files) {
            throw new Error("Failed to fetch data");
        }

        return files;
    } catch (error) {
        console.log(error);
    }
}
