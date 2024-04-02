export default function UnauthorizedError() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex gap-2 items-center">
                <h2 className="text-2xl font-bold pr-3 border-r-1 mr-2 leading-10 border-custom-gray-500">401</h2>
                <h2 className="text-base">brak uprawnień</h2>
            </div>
        </div>
    )
}