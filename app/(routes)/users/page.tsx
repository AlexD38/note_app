"use server";
import client from "../../../database";

export default async function getUserInfo(mail, pwd) {
    try {
        const sqlQuery = {
            text: `SELECT * FROM users WHERE mail = $1 AND password = $2;`,
            values: [mail, pwd],
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
        return user;
    } catch (error) {
        console.log(error);
    }
}
