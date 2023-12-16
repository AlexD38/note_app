import { fetchFolders } from "@/app/lib/data";
import "./style.css";
import Link from "next/link";

export default async function Folders() {
    const folders = await fetchFolders();
    console.log(folders);
    return (
        <aside>
            <Link className="folder-list add" href={`/dashboard/folders/add`}>
                Ajouter
            </Link>
            {folders &&
                folders.map((folder) => (
                    <Link className="folder-list" key={folder.id} href={`/dashboard/folders/${folder.id}`}>
                        {folder.name}
                    </Link>
                ))}
        </aside>
    );
}
