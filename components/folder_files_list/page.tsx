"use client";
import "./style.css";
export default function Folder_Files_list(props) {
    const files = props.files;
    return (
        <section className="files-main-wrapper">
            {files &&
                files.map((file: { title: string; id: number; slug: string }) => (
                    <Link target="_blank" href={`/file?id=${file.id}`}>
                        <article className="file">
                            <div className="img-container">
                                <img className="file-img" src="https://source.unsplash.com/300x300?dark-plant " alt="" />
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
