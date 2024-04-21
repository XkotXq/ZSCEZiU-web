import {connectDB} from "../../../../../utils/connect";
import Subpage from "../../../../../models/subpageModel";
import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic';
export async function GET() {
    await connectDB()
    const posts = await Subpage.find({ share: true, component: "nav-4" }, { content: 0, createdAt: 0, updatedAt: 0, __v: 0, share: 0, component: 0 })
    return NextResponse.json({ posts });
}