import {connectDB} from "../../../../../utils/connect";
import ServiceModel from "../../../../../models/serviceModel"
import {NextResponse} from "next/server"
import {getToken} from "next-auth/jwt";

export const dynamic = 'force-dynamic';
export async function GET(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    try {
        await connectDB()
        const servicePosts = await ServiceModel.find({ state: "rejected" })
        return NextResponse.json({ servicePosts })
    } catch (error) {
        return NextResponse.json( {error: error})
    }
}

export async function DELETE(req) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!session) {
        return NextResponse.json({ error: "Użytkownik nie jest uwierzytelniony" }, { status: 401 });
    }
    if (!session.permission.includes("uczen")) {
        return NextResponse.json({ error: "Użytkownik nie ma uprawnień do wykonania tej akcji" }, { status: 403 });
    }
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectDB();
        const post = await ServiceModel.findById(id);
        if (!post) return NextResponse.json({ error: "Post nie został znaleziony" }, { status: 404 });

        if (post.state === "rejected") {
            await ServiceModel.findByIdAndDelete(id);
            return new Response(null, {
                status: 204,
            })
        } else {
            return NextResponse.json({ error: "Post nie może zostać usunięty, ponieważ jego stan nie jest równy 'rejected'" }, { status: 403 });
        }

    } catch (e) {
        console.error("Błąd podczas usuwania postu", e);
        return NextResponse.json({ error: "Błąd podczas usuwania postu" }, { status: 500 });
    }
}

