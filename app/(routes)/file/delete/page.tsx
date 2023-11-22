"use server";
import { revalidateTag } from "next/cache";
import client from "../../../../database";

export async function DeleteFile(fileId: number) {
    try {
        const sqlQuery = {
            text: `DELETE FROM files WHERE id = $1 RETURNING *;
`,
            values: [fileId],
        };
        const response = await client.query(sqlQuery);
        const fileDeleted = response.rows[0];
        console.log(`file deleted is :  ${fileDeleted}`);
        revalidateTag("files");
        revalidateTag("folders");
    } catch (error) {
        console.log(error);
    }
}
