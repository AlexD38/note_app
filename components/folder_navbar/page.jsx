"use client";
import "./style.css";
import AddFolderBtn from "../add-folder-modal/page";
import GetAllFolders from "@/app/(routes)/folders/page";

export default function FoldersNavbar(props) {
    console.log(props);
    const folders = props.foldersList;
    return (
        <section className="folders-main-wrapper">
            {folders &&
                folders.map((folder) => (
                    <article className="folder" draggable={true}>
                        {folder.name}
                    </article>
                ))}

            <AddFolderBtn />
        </section>
    );
}
