import {connectDB} from "../../../../../utils/connect";
import Subpage from "../../../../../models/subpageModel";
import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic';
export async function GET(req, { params }) {
    try {
        const { name } = params;
        await connectDB();
        const post = await Subpage.findOne({ path: name, share: true });
        if (!post) {
            return NextResponse.json({ error: "Nie znaleziono podstrony o podanym id" }, { status: 404 });
        } else {
            return NextResponse.json({ post }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Nie znaleziono podstrony o podanym id" }, { status: 404 });
    }
}
export async function PUT(req, { params }) {
    try {
        const { name } = params;
        const subpageData = await req.json();
        await connectDB();
        await Subpage.findOneAndUpdate({ _id: name }, subpageData);

        return NextResponse.json({ message: "Podstrona zaaktualizowana" }, { status: 200 });
    } catch (error) {
        console.error("Błąd podczas aktualizacji podstrony:", error);
        return NextResponse.json({ error: "Wystąpił błąd podczas aktualizacji podstrony" }, { status: 500 });
    }
}