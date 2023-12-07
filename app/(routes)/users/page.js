"use server";
import { sql } from "@vercel/postgres";
import client from "../../../database";

export default async function getUserInfo() {
    try {
        if (typeof window === "undefined") {
            return null;
        }
        // const sqlQuery = {
        //     text: `SELECT * FROM users WHERE mail = $1 AND password = $2;`,
        //     values: [mail, pwd],
        // };
        // const response = await client.query(sqlQuery);
        const response = await sql`SELECT * FROM users;`;
        let user = response.rows;
        if (!user) {
            console.log("No user found in the database.");
            return "user not connected";
            // No need to throw an error here; it's already logged.
        }

        // Now you can safely access properties of the user.
        user.isConnected = "true";
        console.log(user);
        // redirect("/dashboard");
        return user;
    } catch (error) {
        console.error("Error fetching user information:", error);
        // Handle the error appropriately.
    }
}
