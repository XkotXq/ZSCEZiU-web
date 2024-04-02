import {connectDB} from "../../../../utils/connect";
import Subpage from "../../../../models/subpageModel";
import {NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";


export async function GET(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    await connectDB()
    const subpages = await Subpage.find({}, { createdAt: 0, updatedAt: 0 })
    return NextResponse.json({ subpages });
}