"use server";
import { redirect } from "next/navigation";
import client from "../../../../database";
import "../../../style.css";
import "./style.css";
import { revalidatePath, revalidateTag } from "next/cache";

export default async function AddFolder(folderName: string, userId: number) {
    // console.log(folderName);

    try {
        const sqlQuery = {
            text: `INSERT INTO folders (name, user_id) VALUES ($1, $2) RETURNING *;`,
            values: [folderName, userId],
        };
        const response = await client.query(sqlQuery);
        if (!response) {
            throw new Error("Failed to fetch data");
        }
        // console.log(response.rows);
    } catch (error) {
        console.log(error);
    }
    revalidateTag("folders");
    revalidatePath("/folders");
}
