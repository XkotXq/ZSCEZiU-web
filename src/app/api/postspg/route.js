import {connectDB} from "../../../../utils/connect";
import Post from "../../../../models/postModel";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        await connectDB();
        const posts = await Post.countDocuments({ share: true });
        return NextResponse.json({ posts }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Nie znaleziono postow" }, { status: 404 });
    }
}