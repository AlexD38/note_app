"use client";
import GetAllFiles from "@/app/(routes)/files/page";
import SortOneFile from "@/app/(routes)/files/sort/page";
import GetAllFolders from "@/app/(routes)/dashboard/folders/page";
import { useEffect, useRef, useState } from "react";
import "./style.css";

export default function ToSortFiles(props) {
    const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
    const [showFolderChoice, setshowFolderChoice] = useState(false);
    const [folders, setFolders] = useState(props.folders);
    const [files, setFiles] = useState([]);
    const [selectedFileId, setSelectedFileId] = useState(null);
    const [selectedFolder, setSelectedFolder] = useState("");
    const folderRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const filesFromDb = await GetAllFiles();
                if (!filesFromDb) {
                    console.error("Could not find folders in the database");
                    return;
                }
                setFiles(filesFromDb);
            } catch (error) {
                console.error("Error fetching files:", error);
            }
        };

        fetchData();
    }, [files]);

    const handleClick = async (fileId) => {
        const foldersFound = await GetAllFolders(userId);
        setFolders(foldersFound);
        setSelectedFileId(fileId);
        // console.log(foldersFound);
        setshowFolderChoice((prevShowFolderChoice) => !prevShowFolderChoice);
    };
    const handleCancelClick = async () => {
        setshowFolderChoice((prevShowFolderChoice) => !prevShowFolderChoice);
    };

    const handleSelectChange = () => {
        const selectedOption = folderRef.current.value;
        setSelectedFolder(selectedOption);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const folderId = folderRef.current.value;
        SortOneFile(folderId, e.target.id);
        setFiles(files.filter((file) => file.id != +e.target.id));
        setshowFolderChoice(false);
    };

    return (
        <section className="file-to-sort-main-wrapper">
            {files &&
                files.map((file) => (
                    <div className="file" key={file.id}>
                        <h3 className="file-to-sort-title">{file.title}</h3>
                        {!showFolderChoice && <button onClick={() => handleClick(file.id)}>Ajouter au dossier</button>}

                        {showFolderChoice && selectedFileId === file.id && (
                            <form onSubmit={handleSubmit} id={file.id}>
                                <select ref={folderRef} onChange={handleSelectChange}>
                                    {folders.map((folder) => (
                                        <option key={folder.id} value={folder.id}>
                                            {folder.name}
                                        </option>
                                    ))}
                                </select>

                                <button type="submit">Ajouter au dossier</button>
                                <button onClick={handleCancelClick}>Plus tard</button>
                            </form>
                        )}
                    </div>
                ))}
        </section>
    );
}
