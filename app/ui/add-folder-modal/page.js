"use client";
import { useRef, useState } from "react";
import "../folder_navbar/style.css";
import AddFolder from "@/app/(routes)/folders/add/page";
import "../add-note-modal/style.css";
import "./style.css";

export default function AddFolderBtn(props) {
    const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
    const [form, setForm] = useState(false);
    const folderNameRef = useRef(null);

    const handleClick = async () => {
        form ? setForm(false) : setForm(true);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await AddFolder(folderNameRef.current.value, userId);

            props.folders(folderNameRef.current.value);
            handleClick();
        } catch (error) {
            console.error("Error adding folder:", error);
            alert("Failed to add the folder. Please try again.");
        }
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
                    <div className="btn-container">
                        <button type="submit">Envoyer</button>
                        <button onClick={handleClick}>Annuler</button>
                    </div>
                </form>
            )}
        </>
    );
}
