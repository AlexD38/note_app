import { fetchFilesFromTheirFolders } from "@/app/lib/data";
import DeleteFolder from "../delete/page";
import Folders from "../page";

export default async function Page({ params }: { params: { id: string } }) {
    const folderId = params.id;
    const files = await fetchFilesFromTheirFolders(folderId);
    return (
        <>
            <h1>
                {files.map((file) => (
                    <p key={file.id}>{file.title}</p>
                ))}
            </h1>
            <DeleteFolder id={folderId} />
        </>
    );
}
