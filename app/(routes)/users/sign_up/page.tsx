"use server";
import { redirect } from "next/navigation";
import client from "../../../../database";

export default async function InsertUserInfo(userName, mail, pwd) {
    try {
        const sqlQuery = {
            text: `INSERT INTO users (userName, mail, password) VALUES ($1, $2, $3) RETURNING *`,
            values: [userName, mail, pwd],
        };
        const response = await client.query(sqlQuery);
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
