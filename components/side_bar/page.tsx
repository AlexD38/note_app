"use client";
import { useState } from "react";
import "./style.css";

export default function SideBar(props: any) {
    const [folderStates, setFolderStates] = useState<{ [key: string]: boolean }>({});

    const toggleFolder = (folderName: string) => {
        setFolderStates((prevStates) => {
            return { ...prevStates, [folderName]: !prevStates[folderName] };
        });
    };

    console.log(props);
    const folders = props.folders;

    return (
        <aside>
            <ul>
                {folders &&
                    folders.map((folder: { folder_name: string; files_titles: any }) => (
                        <li key={folder.folder_name} className="folder-list" onClick={() => toggleFolder(folder.folder_name)}>
                            {folder.folder_name}
                            {folderStates[folder.folder_name] &&
                                folder.files_titles.map((file: string, index: number) => (
                                    <ul key={index}>
                                        <li className="file-list">{file}</li>
                                    </ul>
                                ))}{" "}
                        </li>
                    ))}
            </ul>
        </aside>
    );
}
