import {connectDB} from "../../../../../../utils/connect";
import ServiceModel from "../../../../../../models/serviceModel"
import {NextResponse} from "next/server"

export const dynamic = 'force-dynamic';
export async function GET(req, { params }) {
    try {
        const { type } =  params
        await connectDB();
        const posts = await ServiceModel.find({ serviceType: type, state: "rejected" })
        if (!posts) {
            return NextResponse.json({ error: `Brak postów dla kategorii ${type}`}, { status: 404})
        } else {
            return NextResponse.json({ posts }, { status: 200 })
        }
    } catch (e) {
        return NextResponse.json({ error: `Brak postów dla kategorii ${type}`}, { status: 404})
    }
}