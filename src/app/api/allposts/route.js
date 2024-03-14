import { connectDB } from "../../../../utils/connect";
import Post from "../../../../models/postModel";
import { NextResponse } from "next/server"


export async function GET(req, res) {
    await connectDB()
    const posts = await Post.find({}, { content: 0, createdAt: 0, updatedAt: 0 }).sort({ _id: -1 })
    return NextResponse.json({ posts });
};