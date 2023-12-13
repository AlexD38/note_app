import { fetchFolders } from "@/app/lib/data";
import "./style.css";
import Link from "next/link";

export default async function Page() {
    const folders = await fetchFolders();
    return (
        <>
            <form>
                <fieldset>
                    <label htmlFor="title">Title</label>
                    <input type="text" />
                    <label htmlFor="title">Slug</label>
                    <input type="text" />
                    <label htmlFor="title">Body</label>
                    <textarea />
                    <label htmlFor="title">folder</label>
                    <select>
                        {folders?.map((folder) => (
                            <option value="folder">{folder.name}</option>
                        ))}
                    </select>
                </fieldset>
                <button type="submit">Envoyer</button>
            </form>
            <button type="submit">
                <Link href={`http://localhost:3000/dashboard/folders`}>Annuler</Link>
            </button>
        </>
    );
}
