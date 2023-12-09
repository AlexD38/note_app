"use client";
import { useRef, useState } from "react";
import "./style.css";

import { useRouter } from "next/navigation";
import { getUser } from "@/app/(routes)/users/page";
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

        const mail = encodeURIComponent(mailRef.current.value);
        const pwd = encodeURIComponent(pwdRef.current.value);

        try {
            const response = await getUser(mail, pwd);

            if (!response.ok) {
                // La requête a échoué (statut non 2xx)
                throw new Error(`Erreur de requête : ${response.statusText}`);
            }

            const data = await response.json();
            console.log(data);
            // Faites quelque chose avec les données récupérées
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
            // Gérez l'erreur, par exemple, en mettant à jour l'état pour afficher un message d'erreur à l'utilisateur
            setError(true);
        } finally {
            // Mettez à jour l'état pour indiquer que le chargement est terminé, que la requête réussisse ou échoue
            setIsLoading(false);
            router.push("/dashboard");
        }
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
                            <input className={error ? "invalid" : undefined} type="text" ref={mailRef} placeholder="email" required />
                            <input className={error ? "invalid" : undefined} type={showPwd ? "text" : "password"} ref={pwdRef} placeholder="password" required />
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
