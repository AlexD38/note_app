"use server";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import client from "../../../database";

export default async function getUserInfo(mail, pwd) {
    try {
        if (typeof window === "undefined") {
            return null;
        }
        // const sqlQuery = {
        //     text: `SELECT * FROM users WHERE mail = $1 AND password = $2;`,
        //     values: [mail, pwd],
        // };
        // const response = await client.query(sqlQuery);
        const response = await sql`SELECT * FROM users WHERE mail = '${mail}' AND password='${pwd}';`;
        let user = response.rows[0];
        if (!user) {
            user.isConnected = "false";
            return "user not connected";
            throw new Error("Failed to fetch user information");
        }
        user.isConnected = "true";
        console.log(user);
        // redirect("/dashboard");
        return user;
    } catch (error) {
        console.log(error);
    }
}
