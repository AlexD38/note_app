"use client";
import { useState } from "react";
import "./style.css";
import { useRouter } from "next/navigation";

export default function UnlogBtn() {
    const router = useRouter();
    const [loggedIn, setLoggedin] = useState(true);

    const handleClick = () => {
        localStorage.clear();
        setLoggedin(false);
        location.href = "/";
    };
    return (
        <>
            {loggedIn ? (
                <button onClick={handleClick} className="unlog-btn">
                    Me déconnecter
                </button>
            ) : (
                <></>
            )}
        </>
    );
}
