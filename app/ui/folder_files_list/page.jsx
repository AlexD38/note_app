"use client";
import { Link } from "react-router-dom";
import "./style.css";
import Image from "next/image";
export default function Folder_Files_list(props) {
    const files = props.files;
    return (
        <section className="files-main-wrapper">
            {files &&
                files.map((file) => (
                    <Link target="_blank" hef={`/file?id=${file.id}`} key={file.id}>
                        <article className="file">
                            <div className="img-container">
                                <Image className="file-img" src="https://source.unsplash.com/300x300?dark-plant " alt="" />
                            </div>
                            <div className="file-body">
                                <p className="file-title">{file.title}</p>
                                <p className="file-slug">{file.slug}</p>
                            </div>
                        </article>
                    </Link>
                ))}
        </section>
    );
}
