import Tag from "../../dashboard/ui/tag";

export default function Boxtag({ activeTag, setActiveTag }) {
    const tags = ["ZSCEZiU", "KONKURS", "INFO"]
    return (
        <div className="flex flex-col gap-2">
            <p>Wybierz tag</p>
        <div className="flex gap-2">
            {tags.map(tag => <Tag key={tag} value={tag} setActiveTag={setActiveTag} activeTag={activeTag}/>)}
        </div>
        </div>
    )
}