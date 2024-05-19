import "./../../../dashboard/ui/titles.css"
import PageContent from "./pageContent";

const getPost = async (id) => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        const res = await fetch(`${apiUrl}/api/posts/${id}`, {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Żądany zasób nie został znaleziony");
        }
        if (res) {
            const item = await res.json()
            return item.post
        }
    } catch (error) {
        return []
    }
}

export default async function page({ params }) {
    const data = await getPost(params.id) || []

    return (
        <>
            <PageContent post={data} />
        </>
    )
}