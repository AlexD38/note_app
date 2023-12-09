import "./style.css";
import * as React from "react";

import GetAllFolders from "./(routes)/folders/page";
import GetAllFoldersWithTheirFiles from "./(routes)/folder_and_their_files/page";
import LoginModal from "@/components/login_modal/page";

export default async function Home() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;
    const folders = await GetAllFoldersWithTheirFiles();
    const foldersList = await GetAllFolders(1);

    return (
        // <body>
        <LoginModal />
        // </body>
    );
}
