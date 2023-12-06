"use client";
import { useRef, useState } from "react";
import "../login_modal/style.css";

import { useRouter } from "next/navigation";
import getUserInfo from "@/app/(routes)/users/page";
import InsertUserInfo from "@/app/(routes)/users/sign_up/page";

export default function SignUpModal(props) {
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPwd, setShowPwd] = useState(false);
    const userNameRef = useRef(null);
    const mailRef = useRef(null);
    const pwdRef = useRef(null);

    const handleShowPwd = () => {
        setShowPwd((showPwd) => !showPwd);
    };

    const handleSubmit = async (e) => {
        setError(false);
        setIsLoading(true);
        e.preventDefault();
        const userInfo = await InsertUserInfo(userNameRef.current.value, mailRef.current.value, pwdRef.current.value);
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
    const handleloginClick = () => {
        props.signUp();
    };

    return (
        <div className="modal-wrapper">
            <div className="modal">
                <h1>Creez un compte</h1>
                <form onSubmit={handleSubmit}>
                    <input className={error && "invalid"} type="text" ref={userNameRef} placeholder="Username" required />
                    <input className={error && "invalid"} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" type="text" ref={mailRef} placeholder="e-mail" required />
                    <input className={error && "invalid"} pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{6,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" type={showPwd ? "text" : "password"} ref={pwdRef} placeholder="password" required />
                    <i onMouseEnter={handleShowPwd} onMouseLeave={handleShowPwd} className="fa-solid fa-eye sign-up-eye"></i>
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
                    Vous avez déjà un compte ?{" "}
                    <span onClick={handleloginClick} className="underlined">
                        Connectez-vous
                    </span>
                </span>
            </div>
        </div>
    );
}
