import {connectDB} from "../../../../../utils/connect";
import ServiceModel from "../../../../../models/serviceModel"
import {NextResponse} from "next/server"
import {getToken} from "next-auth/jwt";

export const dynamic = 'force-dynamic';
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
        const post = await ServiceModel.findOne({_id: id, serviceType: typePost, state: "rejected"});
        if (!post) {
            return NextResponse.json({ error: `Brak postu o podanym id`}, { status: 404})
        } else {
            return NextResponse.json({ post }, { status: 200 })
        }
    } catch (e) {
        return NextResponse.json({ error: `Brak postu o podanym id`}, { status: 404})
    }
}
export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectDB();
        await ServiceModel.findByIdAndDelete(id);
        return NextResponse.json({ message: "Topic deleted"}, { status: 200 })
    } catch (e) {
        return NextResponse.json({ error: `Brak postu o podanym id`}, { status: 404})
    }
}