"use server";
import client from "../../../database";

export default async function GetAllFolders(userId: any) {
    try {
        if (typeof window === "undefined") {
            return null;
        }
        const sqlQuery = {
            text: `SELECT * FROM folders WHERE user_id = $1  ;`,
            values: [userId],
        };
        const response = await client.query(sqlQuery);
        if (!response) {
            throw new Error("Failed to fetch data");
        }
        return response.rows;
    } catch (error) {
        console.log(error);
    }
}
