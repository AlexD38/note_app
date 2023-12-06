"use server";
import { revalidateTag } from "next/cache";
import client from "../../../../database";

export default async function EditFile(fileId: number, fileTitle: string, fileSlug: string, fileBody: string) {
    try {
        if (typeof window === "undefined") {
            return null;
        }
        const sqlQuery = {
            text: `UPDATE files SET title = $2, slug = $3, body = $4 WHERE id = $1 RETURNING *;
    `,
            values: [fileId, fileTitle, fileSlug, fileBody],
        };
        const response = await client.query(sqlQuery);
        const fileDeleted = response.rows[0];
        // console.log(`file updated is : `, fileDeleted);
        revalidateTag("files");
        // revalidateTag("folders");
    } catch (error) {
        console.log(error);
    }
}
