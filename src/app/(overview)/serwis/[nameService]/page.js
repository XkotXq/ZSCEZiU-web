import {redirect} from "next/navigation";
export default function Page({ params }) {
    redirect()
    return <div>{params}</div>;
}