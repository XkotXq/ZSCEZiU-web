import { connectDB } from "../../../../utils/connect";
import ServiceModel from "../../../../models/serviceModel"
import { NextResponse } from "next/server"
import {getToken} from "next-auth/jwt";

export async function GET(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    try {
        await connectDB()
        const servicePosts = await ServiceModel.find({})
        return NextResponse.json({ servicePosts })
    } catch (error) {
        return NextResponse.json( {error: error})
    }
}
export async function POST(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    try {
        const { title, description, serviceType, images, author } = await req.json()
        await connectDB()
        const state = "verifiable"
        await ServiceModel.create({ title, description, serviceType, state, images, author })
        return NextResponse.json({message: "Post przeslany do sprawdzenia"}, {status: 201})
    } catch (error) {
        console.log("error", error)
        return NextResponse.json({ error: 'Blad przy przesylaniu postu' });
    }
}

export async function PUT(req) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!session) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }
    if (!session.permission.includes("admin")) {
        return NextResponse.json({ error: "User does not have permission to perform this action" }, { status: 403 });
    }
    const id = req.nextUrl.searchParams.get("id");
    const updatedPost = await req.json();
    try {
        await connectDB();
        const result = await ServiceModel.findByIdAndUpdate(id, updatedPost);
        if (!result) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Post został pomyślnie zaktualizowany" }, { status: 200 });
    } catch (e) {
        console.error("Error:", e);
        return NextResponse.json({ error: "Błąd podczas aktualizacji postu" }, { status: 500 });
    }
}
export async function DELETE(req) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!session) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }
    if (!session.permission.includes("admin")) {
        return NextResponse.json({ error: "User does not have permission to perform this action" }, { status: 403 });
    }
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectDB()
        const result = await ServiceModel.findByIdAndDelete(id)
        if (!result) return NextResponse.json({ error: "Post not found" }, { status: 404 });
        return NextResponse.json({}, { status: 204 });
    } catch (e) {
        console.log("error", e)
        return NextResponse.json({ error: "Błąd podczas usuwania postu" }, { status: 500 });
    }
}