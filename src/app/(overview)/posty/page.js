import PhotoBar from "@/app/ui/Sections/photobar";
import Post from "@/app/ui/components/post";

const getPosts = async () => {
    try {
        const res = await fetch("/api/posts", {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("Nie udało się pobrać postów")
        }
        return res.json()
    } catch (error) {
        console.log("Błąd ładowania postów: ", error)
    }
}
export default async function Page() {
    const {posts} = await getPosts()

    const path = [
        {
            name: "główna",
            url: "/"
        },
        {
            name: "posty",
        }
    ]
    return (
        <div className="w-full flex flex-col shrink-1 gap-2">
                <PhotoBar path={path}/>
            <div className="rounded-md text-center p-5 bg-custom-gray-800 flex justify-center items-center text-2xl">Posty</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 grow mx-auto">
                    {posts.map(post => <Post key={post.id} id={post.id} title={post.title} tags={post.tags} date={post.date} img={post.img} desc={post.desc}/>)}
                </div>
        </div>
    )
}