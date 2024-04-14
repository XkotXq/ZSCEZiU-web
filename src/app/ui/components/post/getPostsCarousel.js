export async function getPosts() {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const res = await fetch(`${apiUrl}/api/lastestposts`, {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Nie udało się pobrać postów");
        }
        return res.json();
    } catch (error) {
        console.log("Błąd ładowania postów: ", error);
        return { posts: [] }; // Zwróć pustą tablicę w przypadku błędu
    }
}