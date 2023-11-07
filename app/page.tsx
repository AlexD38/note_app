import Folders from "./(routes)/folders/page";
import "./style.css";
import AddNoteBtn from "@/components/add-note-modal/page";
import * as React from "react";
import Link from "next/link";
import Files from "./(routes)/files/page";

export default function Home() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;

    return (
        <body>
            <header>{currentDate}</header>
            <main>
                <Folders />
                <AddNoteBtn></AddNoteBtn>
                <Files />
            </main>
        </body>
    );
}
