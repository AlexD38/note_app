import SideBar from "@/app/ui/side_bar/page";
import "../../style.css";

import { fetchFolders } from "@/app/lib/data.js";

export default async function Home() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;
    const folders = await fetchFolders();
    // console.log(folders);

    return (
        <>
            <header>{currentDate}</header>
            <main>
                {folders.map((folder: { name: string }) => (
                    <h1>{folder.name}</h1>
                ))}
                <SideBar folders={folders} />
            </main>
        </>
    );
}
