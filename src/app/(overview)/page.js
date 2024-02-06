import Mainsection from "@/app/ui/Sections/mainsection";
import Welcomesection from "@/app/ui/Sections/welcomesection";
import Professionsection from "@/app/ui/Sections/proffesionsection";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
       <Mainsection/>
       <Welcomesection/>
       <Professionsection/>
    </main>
  )
}
