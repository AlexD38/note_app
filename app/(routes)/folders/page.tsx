"use server";
import client from "../../../database";

export default async function GetAllFolders(userId) {
    try {
        const sqlQuery = {
            text: `SELECT * FROM folders WHERE user_id = $1 ;`,
            values: [userId],
        };
        const response = await client.query(sqlQuery);
        return response.rows;

        if (!response) {
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.log(error);
    }
}
