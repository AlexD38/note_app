"use client";
import { useRef, useState } from "react";
import "./style.css";
import AddFile from "@/app/(routes)/file/add/page";
export default function AddNoteBtn() {
    const [form, setForm] = useState(false);
    const titleRef = useRef(null);
    const slugRef = useRef(null);
    const bodyRef = useRef(null);
    const folderRef = useRef(null);

    const handleClick = async () => {
        form ? setForm(false) : setForm(true);
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(titleRef.current.value);
        await AddFile(titleRef.current.value, slugRef.current.value, bodyRef.current.value, folderRef.current.value);
        handleClick();
        alert("Your note has been added");
    };
    return (
        <main>
            <button onClick={handleClick}>
                Add New Note <i className="fa-solid fa-plus"></i>
            </button>

            {form && (
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={titleRef} placeholder="title"></input>
                    <input type="text" ref={slugRef} placeholder="slug"></input>
                    <input type="text" ref={bodyRef} placeholder="body"></input>
                    <input type="number" ref={folderRef} placeholder="folder"></input>
                    <button type="submit">Envoyer</button>
                    <button onClick={handleClick} type="submit">
                        Annuler
                    </button>
                </form>
            )}
        </main>
    );
}
