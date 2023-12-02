"use client";

import { SortOneFile } from "@/app/(routes)/files/sort/page";
import GetAllFolders from "@/app/(routes)/folders/page";
import { useRef, useState } from "react";

export default function ToSortFiles(props: any) {
    // console.log("props", props);
    const [showFolderChoice, setshowFolderChoice] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState("");
    const folderRef = useRef(null);
    const handleClick = () => {
        showFolderChoice ? setshowFolderChoice(false) : setshowFolderChoice(true);
    };
    const handleSelectChange = () => {
        const selectedOption = folderRef.current.value;
        setSelectedFolder(selectedOption);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const folderId = folderRef.current.value;
        // console.log("submitted");
        SortOneFile(folderId, props.file.id);
        setshowFolderChoice(false);
    };

    return (
        <div className="file">
            <h3>{props.file.title}</h3>
            {!showFolderChoice && <button onClick={handleClick}>Trier cette note</button>}

            {showFolderChoice && (
                <form onSubmit={handleSubmit}>
                    <select ref={folderRef} onChange={handleSelectChange}>
                        {props.folders.map((folder: { name: string; id: number }) => (
                            <option value={folder.id}>{folder.name}</option>
                        ))}
                    </select>
                    <button type="submit">Ajouter au dossier</button>
                    <button onClick={handleClick}>Plus tard</button>
                </form>
            )}
        </div>
    );
}
