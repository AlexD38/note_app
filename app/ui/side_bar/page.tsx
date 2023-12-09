"use client";
import { useState } from "react";
import "./style.css";
import Link from "next/link";

export default function SideBar(props: any) {
    const [folders, setFolders] = useState(props.folders);

    return <aside>{folders && folders.map((folder) => <p>{folder.name}</p>)}</aside>;
}
