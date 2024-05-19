import {connectDB} from "../../../../../../utils/connect";
import ServiceModel from "../../../../../../models/serviceModel"
import {NextResponse} from "next/server"
import {getToken} from "next-auth/jwt";

export const dynamic = 'force-dynamic';
export async function GET(req, { params }) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    try {
        const { type } =  params
        await connectDB();
        const posts = await ServiceModel.find({serviceType: type, state: "verifiable" })
        if (!posts) {
            return NextResponse.json({ error: `Brak postów dla kategorii ${type}`}, { status: 404})
        } else {
            return NextResponse.json({ posts }, { status: 200 })
        }
    } catch (e) {
        return NextResponse.json({ error: `Brak postów dla kategorii ${type}`}, { status: 404})
    }
}