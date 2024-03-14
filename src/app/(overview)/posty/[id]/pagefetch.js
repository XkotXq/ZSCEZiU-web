export const getPost = async (id) => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        const res = await fetch(`${apiUrl}/api/posts/${id}`, {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Żądany zasób nie został znaleziony");
        }
        return res.json()
    } catch (error) {
        return {error: "brak postu o takim id"}
    }
}

// export const getPost = async (id) => {
//     try {
//         const res = await fetch(`/api/posts/${id}`, {
//             cache: "no-store"
//         });
//         if (!res) {
//             throw new Error("Nie udało się pobrać postu");
//         }
//
//         // Symulowanie opóźnienia ładowania danych
//         await new Promise(resolve => setTimeout(resolve, 10000));
//
//         return res.json();
//     } catch (error) {
//         console.log("Błąd ładowania postu", error);
//     }
// };
