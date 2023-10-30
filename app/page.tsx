"use client";
import "./style.css";
export default function Home() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;
    console.log(currentDate);
    const handleclick = () => {
        alert("New note !");
    };
    return (
        <body>
            <header>{currentDate}</header>
            <main>
                <button onClick={handleclick}>New note</button>
            </main>
        </body>
    );
}
