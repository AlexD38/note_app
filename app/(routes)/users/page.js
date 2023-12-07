"use server";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export default async function getUserInfo(request) {
    const { searchParams } = new URL(request.url);
    const mail = searchParams.get("mail");
    const pwd = searchParams.get("pwd");
    try {
        const user = await sql`SELECT * FROM users WHERE mail = ${mail} AND password = ${pwd};`;
        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Error fetching user information:", error);
    }
}
