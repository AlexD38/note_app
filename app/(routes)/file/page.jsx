import client from "../../../database";
import "./style.css";
import { NextRequest } from "next/server";

export default async function getOneFile(request) {
    const id = request.searchParams.id;
    try {
        const sqlQuery = {
            text: `SELECT * FROM files WHERE id = $1;`,
            values: [id],
        };
        const response = await client.query(sqlQuery);
        const file = response.rows[0];
        console.log(file);
        if (!file) {
            throw new Error("Failed to fetch data");
        }
        return (
            <section className="file-container-main-wrapper">
                <section className="file-container">
                    <p className="file-title">{file.title}</p>
                    <p className="file-slug">{file.slug}</p>
                    <p className="file-body">{file.body}</p>
                </section>
            </section>
        );
    } catch (error) {
        console.log(error);
    }
}
