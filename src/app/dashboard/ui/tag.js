import clsx from "clsx";
export default function Tag({ value, setActiveTag, activeTag }) {
    const switchActiveTag = () => {
        setActiveTag(value)
    }

    return (
        <button onClick={switchActiveTag} className={clsx("border-2 border-white px-2 py-1 text-sm rounded-full font-medium", {"bg-white text-custom-gray-800": activeTag === value, "text-white": activeTag !== value} )}>
            <p>{value}</p>
        </button>
    )
}