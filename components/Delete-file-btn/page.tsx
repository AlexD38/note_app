"use client";

import "../../app/style.css";

import { DeleteFile } from "@/app/(routes)/file/delete/page";

export default function DeleteBtn(props: any, children: any) {
    const handleClick = async () => {
        console.log(`Delete btn has got props : ${props.file}`);
        await DeleteFile(props.file);
        close();
    };
    return <button onClick={handleClick}>Delete file</button>;
}
