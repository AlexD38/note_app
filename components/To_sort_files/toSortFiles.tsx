"use client";

import { useState } from "react";

export default function ToSortFiles(props: any) {
    console.log("props", props);
    const [showFolderChoice, setshowFolderChoice] = useState(false);
    const handleClick = () => {
        showFolderChoice ? setshowFolderChoice(false) : setshowFolderChoice(true);
    };
    return (
        <div className="file">
            <h3>{props.file.title}</h3>
            {!showFolderChoice && <button onClick={handleClick}>Trier cette note</button>}

            {showFolderChoice && (
                <>
                    <select>
                        {props.folders.map((folder: { name: string }) => (
                            <option value={folder.name}>{folder.name}</option>
                        ))}
                    </select>
                    <button type="submit">Ajouter au dossier</button>
                    <button type="submit" onClick={handleClick}>
                        Plus tard
                    </button>
                </>
            )}
        </div>
    );
}
