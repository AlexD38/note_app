"use client";
import "./style.css";
import AddFolderBtn from "../add-folder-modal/page";
import getAllFilesFromFolder from "@/app/(routes)/folders/[id]/page";
import { useEffect, useState } from "react";
import { DeleteFile } from "@/app/(routes)/file/delete/page";
import Link from "next/link";
import GetAllFolders from "@/app/(routes)/folders/page";

export default function FoldersNavbar(props) {
    const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
    const [folders, setFolders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const foldersFromDb = await GetAllFolders(userId);
                if (!foldersFromDb) {
                    console.error("Could not find folders in the database");
                    return;
                }
                setFolders(foldersFromDb);
            } catch (error) {
                console.error("Error fetching folders:", error);
            }
        };

        fetchData();
    }, [folders]);

    const [files, setFiles] = useState([]);
    // console.log(props);
    const handleClick = async (folderId) => {
        const files = await getAllFilesFromFolder(folderId);
        setFiles(files);
        console.log(files);
    };
    const handleDeleteClick = async (fileId) => {
        await DeleteFile(fileId);
        const updatedFiles = files.filter((file) => file.id !== fileId);
        setFiles(updatedFiles);
    };

    return (
        <div className="main-wrapper">
            <section className="folders-main-wrapper">
                {folders &&
                    folders.map((folder) => (
                        <article onClick={() => handleClick(folder.id)} className="folder" draggable={true}>
                            {folder.name}
                        </article>
                    ))}
                <AddFolderBtn />
            </section>
            <section className="file-card-container">
                {files &&
                    files.map((file) => (
                        <article className="file-card">
                            <div className="file-card-header">
                                <nav className="file-card-navbar">
                                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                                    {/* <i class="fa-solid fa-pen"></i> */}
                                    <i onClick={() => handleDeleteClick(file.id)} class="fa-solid fa-trash"></i>
                                </nav>
                            </div>
                            <Link href={`/file?id=${file.id}`} target="_blank">
                                <div className="file-card-main">
                                    <p className="file-card-title">{file.title}</p>
                                    <p className="file-card-slug">{file.slug}</p>
                                </div>
                            </Link>
                            <footer className="file-card-date">{file.updated_at.toString().split("GM")[0]}</footer>
                        </article>
                    ))}
            </section>
        </div>
    );
}
