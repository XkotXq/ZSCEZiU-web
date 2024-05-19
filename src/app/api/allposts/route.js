import { connectDB } from "../../../../utils/connect";
import Post from "../../../../models/postModel";
import { NextResponse } from "next/server"
import {getToken} from "next-auth/jwt";
export const dynamic = 'force-dynamic';
export async function GET(req, res) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    try {
        await connectDB()
        const posts = await Post.find({}, { content: 0, createdAt: 0, updatedAt: 0 }).sort({ _id: -1 })
        return NextResponse.json({ posts });
    } catch (e) {
        console.log("error", e)
    }

};