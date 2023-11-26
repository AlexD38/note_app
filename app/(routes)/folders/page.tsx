"use server";
import client from "../../../database";

export default async function GetAllFolders() {
    try {
        const sqlQuery = {
            text: `SELECT * FROM folders ;`,
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
