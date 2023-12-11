import Link from "next/link";

export default function Page() {
    return (
        <p>
            welcome to dashboard Page !<Link href={`/dashboard/folders`}>go to folders page</Link>
        </p>
    );
}
