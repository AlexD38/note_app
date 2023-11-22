import SideBar from "@/components/side_bar/page";
import client from "../../../database";
import { NextRequest } from "next/server";
import "./style.css";
import DeleteBtn from "@/components/Delete-file-btn/page";
import EditFileBar from "@/components/Edit-file-bar/page";

export default async function getOneFile(request) {
    const fileId = request.searchParams.id;
    try {
        const sqlQuery = {
            text: `SELECT * FROM files WHERE id = $1;`,
            values: [fileId],
        };
        const response = await client.query(sqlQuery);
        const file = response.rows[0];
        console.log(file);
        if (!file) {
            throw new Error("Failed to fetch data");
        }
        return (
            <main className="single-file-main-wrapper">
                <EditFileBar file={fileId} />
                <h1 className="single-file-title">file is : {file.title}</h1>
                <h2 className="single-file-slug">{file.slug}</h2>
                <p className="single-file-body">{file.body}</p>
            </main>
        );
    } catch (error) {
        console.log(error);
    }
}
