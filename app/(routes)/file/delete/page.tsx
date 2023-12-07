"use server";
import client from "../../../../database";

export default async function DeleteFile(fileId: any) {
    try {
        // Éviter l'appel à client.query pendant la génération statique
        // if (typeof window === "undefined") {
        //     return null;
        // }

        const sqlQuery = {
            text: `DELETE FROM files WHERE id = $1 RETURNING *;`,
            values: [fileId],
        };
        const response = await client.query(sqlQuery);

        return response.rows[0];
    } catch (error) {
        console.log(error);
    }
}
