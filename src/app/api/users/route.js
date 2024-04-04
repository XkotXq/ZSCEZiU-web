import {connectDB} from "../../../../utils/connect";
import User from "../../../../models/userModel";
import {NextResponse} from "next/server";
import { getToken } from "next-auth/jwt"

export const dynamic = 'force-dynamic';

export async function GET(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    if (session.permission !== "administrator") {
        return NextResponse.json({error: "User does not have the right permissions"}, { status: 403 })
    }
    await connectDB()
    const users = await User.find({}, {password: 0, createdAt: 0, updatedAt: 0})
    return NextResponse.json({users})
}
export async function DELETE(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    if (session.permission !== "administrator") {
        return NextResponse.json({error: "User does not have the right permissions"}, { status: 403 })
    }
    const id = req.nextUrl.searchParams.get("id");
    await connectDB()
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User deleted"}, { status: 200 })
}