"use server";
import Link from "next/link";
import client from "../../../../database";
import { revalidateTag } from "next/cache";

export async function SortOneFile(folderId: number, fileId: number) {
    try {
        const sqlQuery = {
            text: `UPDATE files SET folder_id = $1 WHERE id = $2;;`,
            values: [folderId, fileId],
        };
        const response = await client.query(sqlQuery);

        if (!response) {
            throw new Error("Failed to fetch data");
        }
        console.log(folderId, fileId, "well sorted");
        return response.rows;
    } catch (error) {
        console.log(error);
    }
}
