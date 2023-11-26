"use client";
import "./style.css";
import AddFolderBtn from "../add-folder-modal/page";
import getAllFilesFromFolder from "@/app/(routes)/folders/[id]/page";
import { useState } from "react";

export default function FoldersNavbar(props) {
    const [files, setFiles] = useState([]);
    console.log(props);
    const handleClick = async (folderId) => {
        const files = await getAllFilesFromFolder(folderId);
        setFiles(files);
        console.log(files);
    };
    const folders = props.foldersList;
    return (
        <section className="folders-main-wrapper">
            {folders &&
                folders.map((folder) => (
                    <article onClick={() => handleClick(folder.id)} className="folder" draggable={true}>
                        {folder.name}
                    </article>
                ))}
            {files && files.map((file) => <article>{file.title}</article>)}

            <AddFolderBtn />
        </section>
    );
}
