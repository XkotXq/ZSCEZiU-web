import {connectDB} from "../../../../utils/connect";
import {NextResponse} from "next/server";
import Post from "../../../../models/postModel";

export const dynamic = 'force-dynamic';
export async  function GET() {
    await connectDB()
    const posts = await Post.find({ share: true }, { tags: 0, date: 0, img: 0, desc: 0, content: 0, addDate: 0 }).sort({ addDate: -1 }).limit(3)
    return NextResponse.json( { posts });
}