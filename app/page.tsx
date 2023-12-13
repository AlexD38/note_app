import * as React from "react";

import LoginModal from "./ui/login_modal/page";
import Link from "next/link";
import Folders from "./dashboard/folders/page";
import "./style.css";

export default async function page() {
    return (
        <button>
            <Link className="go-to-dashboard" href={"/dashboard/folders"}>
                Go to my dahsboard !
            </Link>
        </button>
    );
}
