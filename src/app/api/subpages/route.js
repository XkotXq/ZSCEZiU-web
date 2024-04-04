import {connectDB} from "../../../../utils/connect";
import Subpage from "../../../../models/subpageModel";
import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic';
export async function GET() {
    await connectDB()
    const subpages = await Subpage.find({ share: true }, { content: 0, createdAt: 0, updatedAt: 0 })
    return NextResponse.json({ subpages });
}