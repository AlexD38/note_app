"use client";
import { useState } from "react";
import "../../app/(routes)/folders/style.css";

export default function AddFolderBtn({ children }: { children: React.ReactNode }) {
    const [form, setForm] = useState(false);
    const handleClick = async () => {
        form ? setForm(false) : setForm(true);
    };
    const closeModal = async () => {
        setForm(false);
    };
    return (
        <>
            <article onClick={handleClick} className="folder folder-add">
                <i className="fa-solid fa-plus"></i>
            </article>{" "}
            {form && <>{children} </>}
        </>
    );
}
