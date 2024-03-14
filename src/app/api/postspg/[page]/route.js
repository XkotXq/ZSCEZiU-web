import {connectDB} from "../../../../../utils/connect";
import Post from "../../../../../models/postModel";
import {NextResponse} from "next/server";

export async function GET(req, { params }) {
    try {
        const { page } = params;
        await connectDB();
        const posts = await Post.find({ share: true }, { content: 0, createdAt: 0, updatedAt: 0 }).skip(12 * (page - 1)).limit(12).sort({ _id: -1 })
        return NextResponse.json({ posts }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Nie znaleziono postow" }, { status: 404 });
    }
}