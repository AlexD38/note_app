"use client";
import "./style.css";

import { useState } from "react";
import DeleteBtn from "../Delete-file-btn/page";
import UpdateFileForm from "../update_file_form/page";

export default function EditFileBar(props: any) {
    const [showNav, setShowNav] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCLick = () => {
        showNav ? setShowNav(false) : setShowNav(true);
        // console.log(props);
    };
    const handleEditClick = () => {
        showEditModal ? setShowEditModal(false) : setShowEditModal(true);
    };
    const handleClose = () => {
        setShowEditModal(false);
    };
    return (
        <>
            <nav onClick={handleCLick}>
                <p>Edit this file</p>
            </nav>
            {showNav && (
                <div className="edit-btns-container">
                    <DeleteBtn file={props.file} />
                    <button onClick={handleEditClick}>Edit this file</button>
                </div>
            )}
            {showEditModal && <UpdateFileForm onClose={handleClose} file={props.file} wholeFile={props.wholeFile} />}
        </>
    );
}
