import PhotoBar from "@/app/ui/Sections/photobar";
import Post from "@/app/ui/components/post";

const getPosts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/posts", {
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

// const getPosts = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(async () => {
//             try {
//                 const res = await fetch("http://localhost:3000/api/posts", {
//                     cache: "no-store"
//                 });
//                 if (!res.ok) {
//                     throw new Error("Nie udało się pobrać postów");
//                 }
//                 const data = await res.json();
//                 resolve(data);
//             } catch (error) {
//                 console.log("Błąd ładowania postów: ", error);
//                 reject(error);
//             }
//         }, 5000); // Opóźnienie w milisekundach (tutaj 3000ms = 3 sekundy)
//     });
// };
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
                <PhotoBar name="Posty" path={path}/>
            <div className="rounded-md text-center p-5 bg-custom-gray-800 flex justify-center items-center text-2xl">Posty</div>
                <div className="grid grid-cols-3 gap-2 grow mx-auto">
                    {posts.map(post => <Post key={post.id} id={post.id} title={post.title} tags={post.tags} date={post.date} img={post.img} desc={post.desc}/>)}
                </div>
        </div>
    )
}