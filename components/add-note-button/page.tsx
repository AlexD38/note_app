"use client";
import { useState } from "react";
import "./style.css";

export default function AddNoteBtn({ children }: { children: React.ReactNode }) {
    const [form, setForm] = useState(false);
    const handleClick = async () => {
        form ? setForm(false) : setForm(true);
    };
    return (
        <>
            <button onClick={handleClick}>Add New Note</button>
            {form && (
                <>
                    {children}{" "}
                    <button className="close-btn" onClick={handleClick}>
                        Close
                    </button>
                </>
            )}
        </>
    );
}
