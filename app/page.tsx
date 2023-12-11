import * as React from "react";

import LoginModal from "./ui/login_modal/page";
import Link from "next/link";

export default async function page() {
    return <Link href={`/dashboard`}>go to dashboard</Link>;
}
