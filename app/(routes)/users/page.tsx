"use server";
import client from "../../../database";

const USER_NOT_CONNECTED_ERROR = "User not connected";

export default async function getUserInfo(mail: any, pwd: any) {
    try {
        if (typeof window === "undefined") {
            throw new Error("This function should not be called on the server side.");
        }

        const sqlQuery = {
            text: `SELECT * FROM users WHERE mail = $1 AND password = $2;`,
            values: [mail, pwd],
        };

        const response = await client.query(sqlQuery);
        const userFromDB = response.rows[0];

        if (!userFromDB) {
            throw new Error(USER_NOT_CONNECTED_ERROR);
        }

        const user = { ...userFromDB, isConnected: "true" };
        console.log(user);

        return user;
    } catch (error) {
        console.error(error);
        throw new Error(USER_NOT_CONNECTED_ERROR);
    }
}
