// import { Key } from "react";
import { redirect } from "next/navigation";
import client from "../../../../database";
import "../../../style.css";
// import "./style.css";
// import { GetAllFolders } from "../../folders/page";

export default async function AddFolder() {
    async function create(formData: FormData) {
        // console.log(formData);
        "use server";

        const folderName = formData.get("name");

        // console.log(fileName);

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

    return (
        <main className="file-main-wrapper">
            <form action={create} className="add-file-form">
                <label className="label" htmlFor="inputName">
                    Name :
                    <input required className="input" type="text" name="name" />
                </label>

                <button type="submit" className="button">
                    Ajouter
                </button>
            </form>
        </main>
    );
}
