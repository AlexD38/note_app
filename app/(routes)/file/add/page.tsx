import { Key } from "react";
import { redirect } from "next/navigation";
import client from "../../../../database";
import "../../../style.css";
import "./style.css";
import { GetAllFolders } from "../../folders/page";

export default async function AddFile() {
    async function create(formData: FormData) {
        // console.log(formData);
        "use server";

        const fileTitle = formData.get("title");
        const fileSlug = formData.get("slug");
        const fileBody = formData.get("body");
        const fileFolder = formData.get("folder");
        // console.log(fileName);

        try {
            const sqlQuery = {
                text: `INSERT INTO files (title, slug, body, folder_id) VALUES ($1, $2, $3, $4) RETURNING *;`,
                values: [fileTitle, fileSlug, fileBody, fileFolder],
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
    const folders = await GetAllFolders();

    return (
        <main className="file-main-wrapper">
            <form action={create} className="add-file-form">
                <label className="label" htmlFor="inputName">
                    title :
                    <input required className="input" type="text" name="title" />
                </label>
                <label className="label" htmlFor="inputDesc">
                    slug :
                    <textarea required className="textarea" name="slug" />
                </label>
                <label className="label" htmlFor="inputDesc">
                    body :
                    <input required type="text" className="input" name="body" />
                </label>
                <label className="label label-folder" htmlFor="inputDesc">
                    folder :
                    <select required className="input" name="folder">
                        {folders.map((folder: { name: string; id: number }) => (
                            <option key={folder.id} value={folder.id}>
                                {folder.name}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit" className="button">
                    Ajouter
                </button>
            </form>
        </main>
    );
}
