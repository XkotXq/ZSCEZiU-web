import {connectDB} from "../../../../utils/connect";
import Post from "../../../../models/postModel";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
export const dynamic = 'force-dynamic';
export async function POST(req) {
    const session = await getServerSession(req)
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    const { title, tags, date, img, desc, content } = await req.json();
    await connectDB();
    await Post.create({ title, tags, date, img, desc, content });
    return NextResponse.json({message: "Post created"}, {status: 201})
}
export async function GET() {
    await connectDB()
    const posts = await Post.find({ share: true }, { content: 0, createdAt: 0, updatedAt: 0 }).sort({ _id: -1 })
    return NextResponse.json({ posts });
}
export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectDB()
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted"}, { status: 200 })
}
