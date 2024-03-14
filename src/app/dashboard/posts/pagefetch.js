const getPosts = async () => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        const res = await fetch(`${apiUrl}/api/allposts`, {
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
const deletePost = async (id) => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        const response = await fetch(`${apiUrl}/api/posts?id=${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Wystąpił problem podczas usuwania postu');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Błąd podczas usuwania postu:', error);
        throw error;
    }
}
export {getPosts, deletePost}