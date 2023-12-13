import Link from "next/link";

export default async function AddNote() {
    return (
        <button>
            <Link href={`files/add`}>Ajouter une note</Link>
        </button>
    );
}
