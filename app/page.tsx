import Folders from "./(routes)/folders/page";
import "./style.css";
import AddFile from "./(routes)/file/add/page";
import AddNoteBtn from "@/components/add-note-modal/page";
import * as React from "react";
import Link from "next/link";

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
                <AddNoteBtn>
                    <AddFile />
                </AddNoteBtn>
            </main>
        </body>
    );
}
