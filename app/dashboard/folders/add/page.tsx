import { createFolder } from "@/app/lib/actions";
import Link from "next/link";

export default async function Page() {
    return (
        <>
            <h1>Ajouter un dossier</h1>
            <form action={createFolder}>
                <input type="text" name="folderName" />
                <button type="submit">Envoyer</button>
                <button>
                    <Link href={"/dashboard/folders"}>Annuler</Link>
                </button>
            </form>
        </>
    );
}
