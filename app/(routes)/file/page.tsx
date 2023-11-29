import SideBar from "@/components/side_bar/page";
import client from "../../../database";
import { NextRequest } from "next/server";
import "./style.css";
import DeleteBtn from "@/components/Delete-file-btn/page";
import EditFileBar from "@/components/Edit-file-bar/page";
import { marked } from "marked";
import he from "he";

export default async function getOneFile(request: any) {
    const fileId = request.searchParams.id;
    try {
        const sqlQuery = {
            text: `SELECT * FROM files WHERE id = $1;`,
            values: [fileId],
        };
        const response = await client.query(sqlQuery);
        const file = response.rows[0];

        const parsedHTML = marked.parse(file.body);
        const encodedHTML = he.encode(parsedHTML);
        const decodedHTML = he.decode(encodedHTML);
        // console.log(file);
        if (!file) {
            throw new Error("Failed to fetch data");
        }
        return (
            <>
                {/* <head>
                    <title>{file.title}</title>
                </head> */}
                <main className="single-file-main-wrapper">
                    <EditFileBar file={fileId} wholeFile={file} />
                    <h1 className="single-file-title">{file.title}</h1>
                    <h2 className="single-file-slug">{file.slug}</h2>
                    <p className="single-file-body" dangerouslySetInnerHTML={{ __html: decodedHTML }}></p>
                </main>
            </>
        );
    } catch (error) {
        console.log(error);
    }
}