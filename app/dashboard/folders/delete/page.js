import { deleteFolder } from "@/app/lib/actions";

export default async function DeleteFolder(id) {
    const folderId = id;
    // console.log(folderId);
    const delteFolderWithId = deleteFolder.bind(null, folderId);

    // console.log(folderId);
    return (
        <form action={delteFolderWithId}>
            <button type="submit">delete folder</button>
        </form>
    );
}
