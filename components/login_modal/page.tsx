"use client";
import { useRef, useState } from "react";
import "./style.css";

import { useRouter } from "next/navigation";
import getUserInfo from "@/app/(routes)/users/page";

export default function LoginModal() {
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPwd, setShowPwd] = useState(false);
    const mailRef = useRef(null);
    const pwdRef = useRef(null);

    const handleShowPwd = () => {
        setShowPwd((showPwd) => !showPwd);
    };

    const handleSubmit = async (e: any) => {
        setError(false);
        setIsLoading(true);
        e.preventDefault();
        const userInfo = await getUserInfo(mailRef.current.value, pwdRef.current.value);
        console.log(userInfo);
        if (!userInfo) {
            const error = { message: "Mauvais identifiants !" };
            setErrorMessage(error.message);
            setError(true);
            setIsLoading(false);
            return;
        }
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
        <main>
            <div className="modal-wrapper">
                <div className="modal">
                    <h1>Connexion</h1>
                    <form onSubmit={handleSubmit}>
                        <input className={error && "invalid"} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" type="text" ref={mailRef} placeholder="email" required />
                        <input className={error && "invalid"} pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{6,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" type={showPwd ? "text" : "password"} ref={pwdRef} placeholder="password" required />
                        <i onMouseEnter={handleShowPwd} onMouseLeave={handleShowPwd} class="fa-solid fa-eye"></i>
                        {errorMessage && <span className="error-message">{errorMessage}</span>}
                        {isLoading ? (
                            <button className="disabled" disabled>
                                Loading ...
                            </button>
                        ) : (
                            <button type="submit">Me connecter</button>
                        )}
                    </form>
                    <span>
                        Vous n'avez pas encore de compte ? <span className="underlined">Créez un compte</span>
                    </span>
                </div>
            </div>
        </main>
    );
}
