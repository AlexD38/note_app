"use server";
import { redirect } from "next/navigation";
import client from "../../../../database";
import "../../../style.css";

export default async function AddFolder(folderName: string) {
    console.log(folderName);

    try {
        const sqlQuery = {
            text: `INSERT INTO folders (name) VALUES ($1) RETURNING *;`,
            values: [folderName],
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
