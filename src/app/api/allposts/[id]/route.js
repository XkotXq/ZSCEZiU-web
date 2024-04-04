import {connectDB} from "../../../../../utils/connect";
import Post from "../../../../../models/postModel";
import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic';
export async function GET(req, { params }) {
    try {
        const { id } = params;
        await connectDB();
        const post = await Post.findOne({ _id: id });
        if (!post) {
            return NextResponse.json({ error: "Nie znaleziono postu o podanym id" }, { status: 404 });
        } else {
            return NextResponse.json({ post }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Nie znaleziono postu o podany id" }, { status: 404 });
    }
}