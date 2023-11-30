"use client";
import { useRef } from "react";
import "./style.css";

import { useRouter } from "next/navigation";
import getUserInfo from "@/app/(routes)/users/page";

export default function LoginModal() {
    const router = useRouter();

    const mailRef = useRef(null);
    const pwdRef = useRef(null);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const userInfo = await getUserInfo(mailRef.current.value, pwdRef.current.value);
        console.log(userInfo);
        localStorage.setItem("userIsConnected", userInfo.isConnected);
        localStorage.setItem("userId", userInfo.id);

        localStorage.setItem("userName", userInfo.mail);
        const userIsConnected = localStorage.getItem("userIsConnected");
        if (!userIsConnected) {
            return;
        }
        router.push("/dashboard");
    };

    return (
        <div className="modal-wrapper">
            <div className="modal">
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={mailRef} />
                    <input type="password" ref={pwdRef} />
                    <button type="submit">Me connecter</button>
                </form>
            </div>
        </div>
    );
}
