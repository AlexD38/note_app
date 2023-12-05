"use client";

import { useState } from "react";
import "../../app/style.css";
import "./style.css";

import DeleteFile from "@/app/(routes)/file/delete/page";

export default function DeleteBtn(props: any, children: any) {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        console.log(`Delete btn has got props : ${props.file}`);
        setShowModal(true);
    };
    const handleConfirmClick = async () => {
        await DeleteFile(props.file);
        close();
    };
    return (
        <>
            <button onClick={handleClick}>Delete file</button>
            {showModal && (
                <div className="confirm-delete-modal">
                    Are you sure you want to delete this file ?
                    <div className="btns-container">
                        <button onClick={handleConfirmClick}>Yes</button>
                        <button className="cancel-btn" onClick={() => setShowModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
