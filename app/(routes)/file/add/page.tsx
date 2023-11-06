"use server";
import { Key } from "react";
import { redirect } from "next/navigation";
import client from "../../../../database";
import "../../../style.css";
import "./style.css";
import { GetAllFolders } from "../../folders/page";

export default async function AddFile(title: string, slug: string, body: string, folder: number) {
    try {
        const sqlQuery = {
            text: `INSERT INTO files (title, slug, body, folder_id) VALUES ($1, $2, $3, $4) RETURNING *;`,
            values: [title, slug, body, folder],
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
