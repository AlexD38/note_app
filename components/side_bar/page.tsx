"use client";
import { useState } from "react";
import "./style.css";
import Link from "next/link";

export default function SideBar(props: any) {
    const [folderStates, setFolderStates] = useState<{ [key: string]: boolean }>({});

    const toggleFolder = (folderName: string) => {
        setFolderStates((prevStates) => {
            return { ...prevStates, [folderName]: !prevStates[folderName] };
        });
    };
    const hideFolderFiles = () => {
        setFolderStates(false);
    };

    const folders = props.folders;
    // console.log(folders);

    return (
        <aside onMouseLeave={hideFolderFiles}>
            <ul>
                {folders &&
                    folders.map((folder: { folder_name: string; files_data: any }) => (
                        <li key={folder.folder_name} className="folder-list" onClick={() => toggleFolder(folder.folder_name)}>
                            {folder.folder_name}
                            {folder.files_data[0].file_id !== null && <span className="files-count-badge">{folder.files_data.length}</span>}
                            {folder.files_data &&
                                folderStates[folder.folder_name] &&
                                folder.files_data.map((file: any, index: number) => (
                                    <ul key={index}>
                                        {file.file_id ? (
                                            <Link target="_blank" href={`/file?id=${file.file_id}`}>
                                                <li className="file-list">{file.file_title}</li>
                                            </Link>
                                        ) : (
                                            <li className="file-list-empty">No file yet !</li>
                                        )}
                                    </ul>
                                ))}{" "}
                        </li>
                    ))}
            </ul>
        </aside>
    );
}
