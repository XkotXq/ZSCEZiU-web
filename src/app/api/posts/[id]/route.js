import {connectDB} from "../../../../../utils/connect";
import Post from "../../../../../models/postModel";
import {NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";
export const dynamic = 'force-dynamic';
export async function GET(req, { params }) {
    try {
    const { id } = params;
    await connectDB();
        const post = await Post.findOne({ _id: id, share: true });
        if (!post) {
            return NextResponse.json({ error: "Nie znaleziono postu o podanym id" }, { status: 404 });
        } else {
            return NextResponse.json({ post }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Nie znaleziono postu o podany id" }, { status: 404 });
    }
}

export async function PUT(req, { params }) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    const { id } = params
    const postData = await req.json()
    await connectDB();
    await Post.findByIdAndUpdate(id, postData)
    return NextResponse.json({ message: "Post zaaktualizowany"}, { status: 200 })
}