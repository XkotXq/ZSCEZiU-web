import PhotoBar from "../../../ui/Sections/photobar";
import PostsContent from "../../../ui/components/post/postscontent";

async function getContent(zawod) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        const res = await fetch(`${apiUrl}/api/subpages/${zawod}`, {
            method: "GET",
            cache: "force-cache"
        })
        return res.json()
    } catch (e) {
        return []
    }

}

export default async function page({ params }) {
    let content = [];
    try {
        content = await getContent(params.zawod) || [];
    } catch (error) {
        console.error("Błąd podczas pobierania zawartości:", error);
    }
    const path = [
        {
            name: "główna",
            url: "/",
        },
        {
            name: content.post ? content.post.title.toLowerCase() : "brak takiego zawodu",
        }
    ]

    return (
        <div className="flex gap-2">
            <div className="text-custom-gray-300 w-full ">
                <PhotoBar path={path}/>
                <div className="max-w-4xl mx-auto">
                    <div className="mx-6 gap-2 flex flex-col">
                        {content.post && content.post.content.map(postItems => (
                            <PostsContent key={postItems.id} type={postItems.type} data={postItems.value}/>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}