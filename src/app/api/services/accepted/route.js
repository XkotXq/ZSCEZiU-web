import {connectDB} from "../../../../../utils/connect";
import ServiceModel from "../../../../../models/serviceModel"
import {NextResponse} from "next/server"

export const dynamic = 'force-dynamic';
export async function GET(req) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectDB();
        const post = await ServiceModel.findById(id)
        if (!post) {
            return NextResponse.json({ error: `Brak postu o podanym id`}, { status: 404})
        } else {
            return NextResponse.json({ post }, { status: 200 })
        }
    } catch (e) {
        return NextResponse.json({ error: `Brak postu o podanym id`}, { status: 404})
    }
}