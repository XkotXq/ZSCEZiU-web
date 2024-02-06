export default function Chapters({ chapters }) {

    return (
        <div className="sticky w-64 bg-custom-gray-900 top-[72px] rounded-md">
            <p className="text-center text-xl p-2">Rozdziały</p>
            <div className="overflow-auto max-h-60">
                <div className="flex flex-col gap-2 p-2">

                {chapters.map(chapter => {
                    return (
                        <a href={"#" + chapter.href} key={chapter.name} className="bg-custom-gray-800 rounded-md flex justify-center items-center p-2 hover:bg-custom-gray-700 text-center">
                            {chapter.name}
                        </a>
                    );
                })}
                </div>
            </div>
        </div>
    )
}