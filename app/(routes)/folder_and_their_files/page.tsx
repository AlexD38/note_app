import client from "../../../database";
export default async function GetAllFoldersWithTheirFiles() {
    try {
        const sqlQuery = {
            text: `SELECT folders.name AS folder_name, ARRAY_AGG(files.title) AS files_titles
FROM files
JOIN folders ON files.folder_id = folders.id
GROUP BY folders.name;`,
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
