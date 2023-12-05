"use server";
import Link from "next/link";
import client from "../../../database";
import "./style.css";
import ToSortFiles from "@/components/To_sort_files/toSortFiles";
import GetAllFolders from "../folders/page";

export default async function GetAllFiles() {
    try {
        const sqlQuery = {
            text: `SELECT * FROM files WHERE folder_id IS null ORDER BY updated_at DESC;`,
        };
        const response = await client.query(sqlQuery);

        if (!response) {
            throw new Error("Failed to fetch data");
        }

        return response.rows;
    } catch (error) {
        console.log(error);
    }
}
