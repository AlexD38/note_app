"use client";

export default function Modal({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <h1>This is a Modal !</h1>
        </>
    );
}
