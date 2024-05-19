import {connectDB} from "../../../../../../../utils/connect";
import ServiceModel from "../../../../../../../models/serviceModel";
import {NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";

export async function PUT(req, { params }) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    const { id } = params
    const postData = await req.json()
    const updatedDataPost = {
        title: postData.title,
        description: postData.description,
        tags: postData.tags,
        images: postData.images,
        state: "verifiable",
        author: postData.author
    }
    try {
        await connectDB();
        await ServiceModel.findByIdAndUpdate(id, updatedDataPost)
        return NextResponse.json({ message: "Post zaaktualizowany"}, { status: 200 })
    } catch (e) {
        console.log("error", e)
    }
}