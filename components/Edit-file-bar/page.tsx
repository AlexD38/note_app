"use client";
import "./style.css";

import { useState } from "react";
import DeleteBtn from "../Delete-file-btn/page";

export default function EditFileBar(props: any) {
    const [showNav, setShowNav] = useState(false);
    const handleCLick = () => {
        showNav ? setShowNav(false) : setShowNav(true);
        console.log(props);
    };
    return (
        <nav onClick={handleCLick}>
            <p>Edit this file</p> {showNav && <DeleteBtn file={props.file} />}
        </nav>
    );
}
