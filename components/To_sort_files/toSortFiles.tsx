"use client";
import { SortOneFile } from "@/app/(routes)/files/sort/page";
import GetAllFolders from "@/app/(routes)/folders/page";
import { useRef, useState } from "react";

export default function ToSortFiles(props: any) {
    const userId = localStorage.getItem("userId");
    const [showFolderChoice, setshowFolderChoice] = useState(false);
    const [folders, setFolders] = useState(props.folders);
    const [selectedFolder, setSelectedFolder] = useState("");
    const folderRef = useRef(null);

    const handleClick = async () => {
        const foldersFound = await GetAllFolders(userId);
        setFolders(foldersFound);
        // console.log(foldersFound);
        setshowFolderChoice((prevShowFolderChoice) => !prevShowFolderChoice);
    };

    const handleSelectChange = () => {
        const selectedOption = folderRef.current.value;
        setSelectedFolder(selectedOption);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const folderId = folderRef.current.value;
        SortOneFile(folderId, props.file.id);
        setshowFolderChoice(false);
    };

    return (
        <div className="file" key={props.file.id} id={props.file.id}>
            <h3>{props.file.title}</h3>

            {!showFolderChoice && <button onClick={handleClick}>Trier cette note</button>}

            {showFolderChoice && (
                <form onSubmit={handleSubmit}>
                    <select ref={folderRef} onChange={handleSelectChange}>
                        {folders.map((folder: { name: string; id: number }) => (
                            <option key={folder.id} value={folder.id}>
                                {folder.name}
                            </option>
                        ))}
                    </select>

                    <button type="submit">Ajouter au dossier</button>
                    <button onClick={handleClick}>Plus tard</button>
                </form>
            )}
        </div>
    );
}
