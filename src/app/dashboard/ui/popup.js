export default function Popup({ id }) {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div>
                Na pewno chcesz usunąć post {id}?
            </div>
            <div>
                Aby usunąć ten post wpisz: TAK
            </div>
        </div>
    )
}