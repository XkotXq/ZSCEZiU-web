import { NextResponse } from "next/server";
import User from "../../../../models/userModel";
import { connectDB } from "../../../../utils/connect";
import bcrypt from "bcryptjs"
import {getToken} from "next-auth/jwt";

export async function POST(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    try {
        await connectDB()
        const { username, email, password, permission } = await req.json()
        const exists = await User.findOne({$or:[{email},{username}]})
        if(exists){
            return NextResponse.json({message: "Taka nazwa użytkownika lub email jest zajęta."}, {status: 500})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({username, email, permission, password:hashedPassword})
        return NextResponse.json({message: "Użytkownik stworzony."}, {status: 201})
    } catch (error) {
        console.log("Error while registering user.", error);
        return NextResponse.json({message: "Error occured while registering the user"}, {status: 500})

    }
}

