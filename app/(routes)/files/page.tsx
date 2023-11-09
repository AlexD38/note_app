import Link from "next/link";
import client from "../../../database";
import "./style.css";

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
    return (
        <section className="files-main-wrapper">
            <h1>A trier : </h1>
            {files &&
                files.map((file: { title: string; id: number }) => (
                    <Link target="_blank" href={`/folders/${file.id}`}>
                        <article className="file" draggable={false}>
                            <i className="fa-solid fa-file"></i> {file.title}
                        </article>
                    </Link>
                ))}
        </section>
    );
}
