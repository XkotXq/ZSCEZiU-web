import {connectDB} from "../../../../../utils/connect";
import Post from "../../../../../models/postModel";
import {NextResponse} from "next/server";

export async function GET(req, { params }) {
    try {
    const { id } = params;
    await connectDB();
    const post = await Post.findById(id);
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
    const { id } = params
    const postData = await req.json()
    await connectDB();
    await Post.findByIdAndUpdate(id, postData)
    return NextResponse.json({ message: "Post zaaktualizowany"}, { status: 200 })
}