import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style.css";
import { fetchFolders } from "@/app/lib/data";
import Folders from "./page";

export const metadata: Metadata = {
    title: "My Note App",
    description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const folders = await fetchFolders();
    return (
        <html lang="en">
            <body>
                <Folders />
                {children}
            </body>
        </html>
    );
}
