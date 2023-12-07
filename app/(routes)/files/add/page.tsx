"use server";
import { revalidatePath } from "next/cache";
import client from "../../../../database";

export default async function AddFile(fileName: string, fileSlug: string, fileBody: string) {
    try {
        // Retrieve cookies within the async context
        // if (typeof window === "undefined") {
        //     return null;
        // }

        const sqlQuery = {
            text: `INSERT INTO files (title, slug, body) VALUES ($1, $2, $3) RETURNING *;`,
            values: [fileName, fileSlug, fileBody],
        };

        const response = await client.query(sqlQuery);

        if (!response) {
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error(error);
    }

    // Move revalidatePath inside the try block to ensure proper async context
    revalidatePath("/files/sort");
}
