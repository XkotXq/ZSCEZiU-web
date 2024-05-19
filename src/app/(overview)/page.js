import CarouselWithPosts from "../ui/components/post/carouselWithPosts";
import PageContent from "./pageContent";
async function getPosts() {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const res = await fetch(`${apiUrl}/api/lastestposts`, {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Nie udało się pobrać postów");
        }
        const data = await res.json()
        return data.posts;
    } catch (error) {
        console.log("Błąd ładowania postów: ", error);
        return { posts: [] };
    }
}
export default async function Home() {
    const data = await getPosts() || []
  return (
    <>
        <PageContent data={data}/>
    </>
  )
}
