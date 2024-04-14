import {connectDB} from "../../../../utils/connect";
import {NextResponse} from "next/server";
import Post from "../../../../models/postModel";

export const dynamic = 'force-dynamic'
export async  function GET() {
    await connectDB()
    const posts = await Post.find({ share: true }, { content: 0, addDate: 0 }).sort({ addDate: -1 }).limit(5)
    return NextResponse.json( { posts });
}