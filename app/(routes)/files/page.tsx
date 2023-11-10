import Link from "next/link";
import client from "../../../database";
import "./style.css";
import ToSortFiles from "@/components/To_sort_files/toSortFiles";
import { GetAllFolders } from "../folders/page";

export async function GetAllFiles() {
    try {
        const sqlQuery = {
            text: `SELECT * FROM files  WHERE folder_id IS null ORDER BY updated_at DESC;`,
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

export default async function Files() {
    const files = await GetAllFiles();
    const folders = await GetAllFolders();
    return (
        <section className="files-main-wrapper">
            <h1>A trier : </h1>
            {files &&
                files.map((file: { title: string; id: number }) => (
                    // <Link target="_blank" href={`/folders/${file.id}`}>
                    <ToSortFiles file={file} folders={folders} />

                    // </Link>
                ))}
        </section>
    );
}
