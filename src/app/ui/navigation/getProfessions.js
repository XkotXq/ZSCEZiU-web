"use server"
import Listofprofessions from "../../ui/navigation/listofprofessions";

async function getProfessions() {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        const res = await fetch(`${apiUrl}/api/subpages/nav`, {
            method: "GET",
            cache: "force-cache"
        })
        return res.json()
    } catch (e) {
        return []
    }

}
export default async function GetProfessions() {
    let data = []
    try {
        data = await getProfessions() || [];
    } catch (error) {
        console.error("Błąd podczas pobierania zawartości:", error);
    }
    return (
        <Listofprofessions data={data.posts} />
    )
}