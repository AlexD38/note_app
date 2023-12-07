"use client";
import { useRef, useState } from "react";
import "./style.css";

import { useRouter } from "next/navigation";
import getUserInfo from "@/app/(routes)/users/page";
import SignUpModal from "../signup_modal/page";

export default function LoginModal() {
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPwd, setShowPwd] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const mailRef = useRef(null);
    const pwdRef = useRef(null);

    const handleSignUpClick = () => {
        setSignUp((signUp) => !signUp);
    };
    const handleShowPwd = () => {
        setShowPwd((showPwd) => !showPwd);
    };

    const handleSubmit = async (e) => {
        setError(false);
        setIsLoading(true);
        e.preventDefault();
        const userInfo = await getUserInfo();
        console.log(mailRef.current.value, pwdRef.current.value);
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
            {signUp ? (
                <SignUpModal signUp={handleSignUpClick} />
            ) : (
                <div className="modal-wrapper">
                    <div className="modal">
                        <h1>Connexion</h1>
                        <form onSubmit={handleSubmit}>
                            <input className={error && "invalid"} type="text" ref={mailRef} placeholder="email" required />
                            <input className={error && "invalid"} type={showPwd ? "text" : "password"} ref={pwdRef} placeholder="password" required />
                            <i onMouseEnter={handleShowPwd} onMouseLeave={handleShowPwd} className="fa-solid fa-eye"></i>
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
                            Vous n&apos;avez pas encore de compte ?{" "}
                            <span onClick={handleSignUpClick} className="underlined">
                                Créez un compte
                            </span>
                        </span>
                    </div>
                </div>
            )}
        </main>
    );
}
