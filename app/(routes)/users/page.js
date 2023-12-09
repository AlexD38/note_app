"use server";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function getUserInfo(request) {
    const { searchParams } = new URL(request.url);
    const mail = searchParams.get("mail");
    const pwd = searchParams.get("pwd");

    if (!mail || !pwd) {
        console.error("Missing mail or pwd in the URL parameters");
        return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    console.log(mail, pwd);
    try {
        const user = await sql`SELECT * FROM users WHERE mail = ${mail} AND password = ${pwd};`;
        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Error fetching user information:", error);
    }
}

export async function getUser(mail, pwd) {
    const res = await fetch(`http://localhost:3000/users?mail=${mail}&pwd=${pwd}`);
    console.log(res.json());
    return res.json();
}
