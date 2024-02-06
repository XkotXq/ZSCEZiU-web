import Searchnav from "@/app/ui/navigation/searchnav";
import Logonav from "@/app/ui/navigation/logonav";
import Linksnav from "@/app/ui/navigation/linksnav";

export default function navigation() {
    return (
        <div className="sticky top-2 w-full h-14 z-50 gap-2 flex">
            <Logonav/>
            <Searchnav/>
            <Linksnav/>
        </div>
    )
}