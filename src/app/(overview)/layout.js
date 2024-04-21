import Footer from "../ui/footer/footer";
import Newnavigation from "../ui/navigation/newnavigation";
import GetProfessions from "../ui/navigation/getProfessions";

export default function appLayout({ children }) {
    return (
        <div className="flex flex-col sm:p-2 max-w-screen-2xl mx-auto">
            {/*<Navigation/>*/}
            <Newnavigation>
                <GetProfessions/>
            </Newnavigation>
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
