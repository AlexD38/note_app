"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import client from "../../../../database";

export async function DeleteFile(fileId: number) {
    try {
        const sqlQuery = {
            text: `DELETE FROM files WHERE id = $1 RETURNING *;
`,
            values: [fileId],
        };
        const response = await client.query(sqlQuery);
        revalidateTag("files");
        revalidateTag("folders");
        revalidatePath(`/file/delete`);
        revalidatePath("folder_and_their_files");

        return response.rows[0];
    } catch (error) {
        console.log(error);
    }
}
