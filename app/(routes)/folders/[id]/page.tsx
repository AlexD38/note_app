import Link from "next/link";
import client from "../../../../database";
import "../../../style.css";
import "./style.css";

export default async function getAllFilesFromFolder({ params }: { params: { id: number } }) {
    try {
        const sqlQuery = {
            text: `SELECT * FROM files WHERE folder_id = $1;`,
            values: [params.id],
        };
        const response = await client.query(sqlQuery);
        const files = response.rows;
        console.log(files);

        if (!files) {
            throw new Error("Failed to fetch data");
        }
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
    } catch (error) {
        console.log(error);
    }
}
