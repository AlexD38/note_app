import { revalidatePath, revalidateTag } from "next/cache";
import client from "../../../database";
export default async function GetAllFoldersWithTheirFiles() {
    try {
        const sqlQuery = {
            text: `SELECT
    folders.id AS folder_id,
    folders.name AS folder_name,
    COALESCE(
        jsonb_agg(
            jsonb_build_object(
                'file_title', COALESCE(files.title, ''),
                'file_id', files.id
            )
        ),
        '{}'::jsonb
    ) AS files_data
FROM
    folders
LEFT JOIN
    files ON files.folder_id = folders.id
GROUP BY
    folders.id, folders.name;

`,
        };
        const response = await client.query(sqlQuery);

        if (!response) {
            throw new Error("Failed to fetch data");
        }
        revalidatePath("folder_and_their_files");
        revalidateTag("folders");

        return response.rows;
    } catch (error) {
        console.log(error);
    }
}
