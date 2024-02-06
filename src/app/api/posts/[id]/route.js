import {connectDB} from "../../../../../utils/connect";
import Post from "../../../../../models/postModel";
import {NextResponse} from "next/server";

export async function GET(req, {params}) {
    const {id} = params;
    await connectDB();
    const post = await Post.findById({id});
    return NextResponse.json({ post }, { status: 200 });
}