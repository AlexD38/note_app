// import Folders from "./(routes)/folders/page";
import "./style.css";
import AddNoteBtn from "@/components/add-note-modal/page";
import * as React from "react";
import Link from "next/link";
import Files from "./(routes)/files/page";
import Folders, { GetAllFolders } from "./(routes)/folders/page";
import SideBar from "@/components/side_bar/page";
import GetAllFoldersWithTheirFiles from "./(routes)/folder_and_their_files/page";

export default async function Home() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;
    const folders = await GetAllFoldersWithTheirFiles();

    return (
        <body>
            <header>{currentDate}</header>
            <main>
                <Folders />
                <AddNoteBtn />
                <Files />
                <SideBar folders={folders} />
            </main>
        </body>
    );
}
