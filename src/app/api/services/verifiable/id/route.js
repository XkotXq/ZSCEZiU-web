import {getToken} from "next-auth/jwt";
import {NextResponse} from "next/server";
import {connectDB} from "../../../../../../utils/connect";
import ServiceModel from "../../../../../../models/serviceModel";

export async function GET(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    const id = req.nextUrl.searchParams.get("id");
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    const typePost = session.permission.replace(/uczen|admin/gi, "").toLowerCase();
    console.log(session)
    try {
        await connectDB();
        const post = await ServiceModel.findOne({_id: id, serviceType: typePost, state: "verifiable"});
        if (!post) {
            return NextResponse.json({ error: `Brak postu o podanym id`}, { status: 404})
        } else {
            return NextResponse.json({ post }, { status: 200 })
        }
    } catch (e) {
        return NextResponse.json({ error: `Brak postu o podanym id`}, { status: 404})
    }
}