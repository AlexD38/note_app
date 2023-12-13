import { fetchFilesFromTheirFolders } from "@/app/lib/data";
import DeleteFolder from "../delete/page";
import Folders from "../page";
import "./style.css";

export default async function Page({ params }: { params: { id: string } }) {
    const folderId = params.id;
    const files = await fetchFilesFromTheirFolders(folderId);

    return (
        <>
            <h1>
                {files.map((file) => (
                    <article className="file">
                        <p className="title" key={file.id}>
                            {file.title}
                        </p>
                        <p key={file.id}>{file.slug}</p>
                        <p key={file.id}>{file.body}</p>
                    </article>
                ))}
            </h1>
            <DeleteFolder id={folderId} />
        </>
    );
}
