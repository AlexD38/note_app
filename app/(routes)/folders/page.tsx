import Link from "next/link";
import client from "../../../database";
import "./style.css";
import AddFolderBtn from "@/components/add-folder-button/page";
import AddFolder from "./add/page";

export async function GetAllFolders() {
    try {
        const sqlQuery = {
            text: `SELECT * FROM folders;`,
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

export default async function folders() {
    const folders = await GetAllFolders();
    return (
        <section className="folders-main-wrapper">
            {folders &&
                folders.map((folder: { name: string; id: number }) => (
                    <Link target="_blank" href={`/folders/${folder.id}`}>
                        <article className="folder">
                            <i className="fa-solid fa-folder"></i>
                            {folder.name}
                        </article>
                    </Link>
                ))}

            <AddFolderBtn>
                <AddFolder />
            </AddFolderBtn>
        </section>
    );
}