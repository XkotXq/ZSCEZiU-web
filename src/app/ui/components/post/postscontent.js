import Rawcontenttoeditor from "@/app/ui/components/post/rawcontenttoeditor";

export default function PostsContent({ type, data }) {
    switch (type) {
        case "desc":
            return (
                <div>
                    <Rawcontenttoeditor rawContent={data} />
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
            return (
                <div className="rounded-md overflow-hidden mx-auto">
                    <iframe
                        width="560"
                        height="315"
                        src={data}
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