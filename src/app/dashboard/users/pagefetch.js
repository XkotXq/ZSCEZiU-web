const getUsers = async () => {
    try {
        const res = await fetch("/api/users", {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("Nie udało się pobrać użytkowników")
        }
        return res.json()
    } catch (error) {
        console.log("Błąd ładowania postów: ", error)
    }
}