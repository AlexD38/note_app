"use client";
import { useRef, useState } from "react";
import "../../app/(routes)/folders/style.css";
import AddFolder from "@/app/(routes)/folders/add/page";
import "../add-note-modal/style.css";

export default function AddFolderBtn() {
    const [form, setForm] = useState(false);
    const folderNameRef = useRef(null);

    const handleClick = async () => {
        form ? setForm(false) : setForm(true);
        console.log();
        await AddFolder(folderNameRef.current.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(folderNameRef.current.value);
        await AddFolder(folderNameRef.current.value);
        handleClick();
        alert("Your folder has been added");
    };

    return (
        <>
            <article onClick={handleClick} className="folder folder-add">
                <i className="fa-solid fa-plus"></i>
            </article>{" "}
            {form && (
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <input type="text" placeholder="folder name" required ref={folderNameRef} />
                    </fieldset>
                    <button type="submit">Envoyer</button>
                    <button onClick={handleClick} type="submit">
                        Annuler
                    </button>
                </form>
            )}
        </>
    );
}
