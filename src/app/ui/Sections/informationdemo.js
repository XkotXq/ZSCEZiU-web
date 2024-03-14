import {Card, CardBody, Link} from "@nextui-org/react";

const getPosts = async () => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        const res = await fetch(`${apiUrl}/api/lastestposts`, {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("Nie udało się pobrać postów")
        }
        return res.json()
    } catch (error) {console.log("Błąd ładowania postów: ", error)}
}
export default async function Informationdemo() {
    const {posts} = await getPosts()
    return (
        <div className="flex flex-col gap-y-2 md:w-48 w-full">
            <Card isPressable as={Link} href={"/posty"}>
                <CardBody >
                    Najnowsze posty
                </CardBody>
            </Card>
            {posts.map(post => (
                <Card key={post.id} isPressable as={Link} href={"/posty/" + post.id}>
                    <CardBody>
                        {post.title}
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}