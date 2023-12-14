import { fetchFolders } from "@/app/lib/data";
import "./style.css";
import Link from "next/link";
import { createFile } from "@/app/lib/actions";

export default async function Page() {
    const folders = await fetchFolders();
    return (
        <>
            <form action={createFile}>
                <fieldset>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" />
                    <label htmlFor="title">Slug</label>
                    <input type="text" name="slug" />
                    <label htmlFor="title">Body</label>
                    <textarea name="body" />
                    <label htmlFor="title">folder</label>
                    <select name="folder">
                        {folders?.map((folder) => (
                            <option value={folder.id}>{folder.name}</option>
                        ))}
                    </select>
                </fieldset>
                <button type="submit">Envoyer</button>
            </form>
            <button>
                <Link href={`http://localhost:3000/dashboard/folders`}>Annuler</Link>
            </button>
        </>
    );
}
