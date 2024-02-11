import PhotoBar from "@/app/ui/Sections/photobar";

export default function page() {
    const path = [
        {
            name: "główna",
            url: "/",
        },
        {
            name: "rada rodziców",
        }
    ]
    return (
        <div>
            <PhotoBar path={path}/>
            <div>

            </div>
        </div>
    )
}