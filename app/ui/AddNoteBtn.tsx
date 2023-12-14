import Link from "next/link";

export default async function AddNote() {
    return (
        <button>
            <Link href={`http://localhost:3000/dashboard/folders/files/add`}>Ajouter une note</Link>
        </button>
    );
}
