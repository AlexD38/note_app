import { deleteFolder } from "@/app/lib/actions";

export default async function DeleteFolder({ id }: { id: string }) {
    const folderId = id;
    // console.log(folderId);
    const delteFolderWithId = deleteFolder.bind(null, folderId);

    // console.log(folderId);
    return (
        <form action={delteFolderWithId}>
            <button type="submit">delete</button>
        </form>
    );
}
