"use server";
import { revalidateTag } from "next/cache";
import client from "../../../../database";

export default async function EditFile(fileId: number, fileTitle: string, fileSlug: string, fileBody: string) {
    try {
        const sqlQuery = {
            text: `UPDATE FROM files (title, slug, body) VALUES($2,$3,$4) WHERE id = $1 RETURNING *;
    `,
            values: [fileId, fileTitle, fileSlug, fileBody],
        };
        const response = await client.query(sqlQuery);
        const fileDeleted = response.rows[0];
        console.log(`file updated is :  ${fileDeleted}`);
        revalidateTag("files");
        revalidateTag("folders");
    } catch (error) {
        console.log(error);
    }
}
