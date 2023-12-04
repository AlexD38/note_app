"use client";
import { useRef, useState } from "react";
import "./style.css";
import AddFile from "@/app/(routes)/files/add/page";
export default function AddNoteBtn() {
    const [form, setForm] = useState(false);
    const titleRef = useRef(null);
    const slugRef = useRef(null);
    const bodyRef = useRef(null);
    // const folderRef = useRef(null);
    const handleClick = async () => {
        form ? setForm(false) : setForm(true);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await AddFile(titleRef.current.value, slugRef.current.value, bodyRef.current.value);
        handleClick();
        alert("Your note has been added");
    };
    return (
        <main>
            <button className="add-note-btn" onClick={handleClick}>
                Add New Note <i className="fa-solid fa-plus"></i>
            </button>

            {form && (
                <form className="add-file-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <input type="text" className="title" ref={titleRef} placeholder="title" required></input>
                        <input type="text" className="slug" ref={slugRef} placeholder="slug" required></input>
                        <textarea ref={bodyRef} placeholder="body" className="body" rows={20} required></textarea>
                        {/* <input type="number" ref={folderRef} placeholder="folder" required></input> */}
                    </fieldset>
                    <div className="btn-container">
                        <button type="submit">Envoyer</button>
                        <button onClick={handleClick} type="submit">
                            Annuler
                        </button>
                    </div>
                </form>
            )}
        </main>
    );
}
