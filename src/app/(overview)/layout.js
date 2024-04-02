import Navigation from "@/app/ui/navigation/navigation";
import Footer from "@/app/ui/footer/footer";
import Newnavigation from "@/app/ui/navigation/newnavigation";

export default function appLayout({ children }) {
    return (
        <div className="flex flex-col sm:p-2 max-w-screen-2xl mx-auto">
            {/*<Navigation/>*/}
            <Newnavigation/>
            <div className="w-full z-20">
                <div>
                    {children}
                </div>
            </div>
            <div className="w-full">
                <Footer/>
            </div>

        </div>
    )
}
