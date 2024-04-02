import Rawcontenttoeditor from "@/app/ui/components/post/rawcontenttoeditor";
import parser from "html-react-parser"
import "../../parseStyle.css"
export default function PostsContent({ type, data }) {
    switch (type) {
        case "desc":
            return (
                <div>
                    {/*<Rawcontenttoeditor rawContent={data} />*/}
                    {parser(data)}
                </div>
            )
        case "photo":
            return (
                <div></div>
            )
        case "slider":
            return (
                <div></div>
            )
        case "video":
            const newEmbedLink = data.replace('watch?v=', 'embed/') || data;
            return (
                <div className="rounded-md overflow-hidden mx-auto">
                    <iframe
                        width="560"
                        height="315"
                        src={newEmbedLink}
                        frameBorder="0"
                        allowFullScreen
                        title="Embedded YouTube Video"
                    ></iframe>
                </div>
            )
        case "file":
            return (
                <div></div>
            )

    }
}