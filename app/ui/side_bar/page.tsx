"use client";
import { useState } from "react";
import "./style.css";
import Link from "next/link";

export default function SideBar(props: any) {
    const [folders, setFolders] = useState(props.folders);
    console.log(folders);

    return (
        <aside>
            {folders &&
                folders.map((folder: { id: any; name: any }) => (
                    <Link className="folder-list" key={folder.id} href={`/dashboard/folders/${folder.id}`}>
                        {folder.name}
                    </Link>
                ))}
        </aside>
    );
}
