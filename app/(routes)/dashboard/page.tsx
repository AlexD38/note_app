"use client";
import "../../style.css";
import AddNoteBtn from "@/components/add-note-modal/page";
import * as React from "react";
import Files from "../../(routes)/files/page";

import GetAllFolders from "../../(routes)/folders/page";
import SideBar from "@/components/side_bar/page";
import GetAllFoldersWithTheirFiles from "../../(routes)/folder_and_their_files/page";
import FoldersNavbar from "@/components/folder_navbar/page";
import LoginModal from "@/components/login_modal/page";
import UnlogBtn from "@/components/unlog_btn/page";
import ToSortFiles from "@/components/To_sort_files/toSortFiles";
import GetAllFiles from "../../(routes)/files/page";

export default function Home() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;

    return (
        <body>
            <header>{currentDate}</header>
            <main className="main-wrapper">
                <UnlogBtn />
                <FoldersNavbar />
                <AddNoteBtn />
                <ToSortFiles />
                {/* <SideBar folders={folders} /> */}
            </main>
        </body>
    );
}
