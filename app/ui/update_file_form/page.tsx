"use client";

import EditFile from "@/app/(routes)/file/edit/page";
import { useRef } from "react";
import "../add-note-modal/style.css";

export default function UpdateFileForm(props: any) {
    const fileRef = useRef<HTMLInputElement | null>(null);
    const titleRef = useRef<HTMLInputElement | null>(null);
    const slugRef = useRef<HTMLInputElement | null>(null);
    const bodyRef = useRef<HTMLTextAreaElement | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const fileId = props.wholeFile.id;
        const fileTitle = titleRef.current?.value;
        const fileSlug = slugRef.current?.value;
        const fileBody = bodyRef.current?.value;

        // Check for undefined values before passing them to EditFile
        if (fileTitle !== undefined && fileSlug !== undefined && fileBody !== undefined) {
            await EditFile(fileId, fileTitle, fileSlug, fileBody);
            props.onClose();
        }
    };

    const handleClick = () => {
        props.onClose();
    };

    return (
        <form className="add-file-form" onSubmit={handleSubmit}>
            <fieldset>
                <input type="text" className="title" ref={titleRef} placeholder={props.wholeFile.title} defaultValue={props.wholeFile.title} required />
                <input type="text" className="slug" ref={slugRef} placeholder={props.wholeFile.slug} defaultValue={props.wholeFile.slug} required />
                <textarea ref={bodyRef} placeholder={props.wholeFile.body} className="body" rows={20} defaultValue={props.wholeFile.body} required></textarea>
            </fieldset>
            <div className="btn-container">
                <button type="submit">Enregistrer</button>
                <button onClick={handleClick}>Annuler</button>
            </div>
        </form>
    );
}
