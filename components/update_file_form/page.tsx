"use client";

import EditFile from "@/app/(routes)/file/edit/page";
import { useRef } from "react";
import "../add-note-modal/style.css";

export default function UpdateFileForm(props: any) {
    const fileRef = useRef<HTMLInputElement | null>(null);
    const titleRef = useRef<HTMLInputElement | null>(null);
    const slugRef = useRef<HTMLInputElement | null>(null);
    const bodyRef = useRef<HTMLTextAreaElement | null>(null);

    const handleSubmit = async () => {
        const fileId = fileRef.current?.value;
        const fileTitle = titleRef.current?.value;
        const fileSlug = slugRef.current?.value;
        const fileBody = bodyRef.current?.value;

        await EditFile(fileId, fileTitle, fileSlug, fileBody);
    };
    const handleClick = () => {
        props.onClose();
        console.log(props);
    };
    return (
        <form className="add-file-form" onSubmit={handleSubmit}>
            <fieldset>
                <input type="text" className="title" ref={titleRef} placeholder={props.wholeFile.title} value={props.wholeFile.title} required></input>
                <input type="text" className="slug" ref={slugRef} placeholder={props.wholeFile.slug} value={props.wholeFile.slug} required></input>
                <textarea ref={bodyRef} placeholder={props.wholeFile.body} className="body" rows={20} value={props.wholeFile.body} required></textarea>
            </fieldset>
            <div className="btn-container">
                <button type="submit">Envoyer</button>
                <button onClick={handleClick}>Annuler</button>
            </div>
        </form>
    );
}
