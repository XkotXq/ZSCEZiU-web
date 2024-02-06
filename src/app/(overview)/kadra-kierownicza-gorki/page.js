import PhotoBar from "@/app/ui/Sections/photobar";

export default function page() {
    return (
        <div className="text-custom-gray-300 w-full">
            <PhotoBar name="Kadra Kierownicza" />
            <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold py-2 text-custom-gray-200">kadra kierownicza</h2>
            <p className="my-2">mgr Radosław Kaźmierczak - dyrektor szkoły</p>
            <p className="my-2">mgr Anna Jagniątkowska - zastępca dyrektora</p>
            <p className="my-2">mgr Krzysztof Gruchała - zastępca dyrektora</p>
            <p className="my-2">mgr Radosław Gierach - kierownik szkolenia praktycznego</p>
            <p className="my-2">mgr Beata Brzezińska - kierownik internatu</p>
            </div>
        </div>
    )
}