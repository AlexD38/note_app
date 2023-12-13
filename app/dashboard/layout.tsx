import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
