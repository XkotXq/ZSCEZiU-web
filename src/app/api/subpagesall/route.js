import {connectDB} from "../../../../utils/connect";
import Subpage from "../../../../models/subpageModel";
import {NextResponse} from "next/server";


export async function GET() {
    await connectDB()
    const subpages = await Subpage.find({}, { createdAt: 0, updatedAt: 0 })
    return NextResponse.json({ subpages });
}