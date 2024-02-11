import {connectDB} from "../../../../utils/connect";
import User from "../../../../models/userModel";
import {NextResponse} from "next/server";

export async function GET() {
    await connectDB()
    const users = await User.find({})
    return NextResponse.json({users})
}