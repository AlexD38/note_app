import { fetchFilesFromTheirFolders } from "@/app/lib/data";
import DeleteFolder from "../delete/page";
import Folders from "../page";
import "./style.css";
// import { BeakerIcon } from "@heroicons/react/24/solid";

export default async function Page({ params }: { params: { id: any } }) {
    const folderId = params.id;
    const files = await fetchFilesFromTheirFolders(folderId);
    console.log(files);

    return (
        <div className="file-container">
            <DeleteFolder id={folderId} />
            {files &&
                files.map((file) => (
                    <article key={file.id} className="file">
                        <p className="title" key={file.id}>
                            {file.title}
                        </p>
                        <p key={file.id}>{file.slug}</p>
                        <p key={file.id}>{file.body}</p>
                    </article>
                ))}
            {/* <BeakerIcon /> */}
        </div>
    );
}
