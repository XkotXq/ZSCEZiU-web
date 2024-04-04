import fs, { writeFile } from "fs/promises"
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import path, { join } from 'path';
import {getToken} from "next-auth/jwt";

export const dynamic = 'force-dynamic';
export async function POST(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    const data = await req.formData();
    const files = data.getAll("file");
    if (files.length === 0) {
        return NextResponse.json({ success: false, message: "Brak przesłanych plików" });
    }

    const uploadedFiles = [];

    for (const file of files) {
        console.log(file.name)
        const randomId = uuidv4();
        const extension = file.name.split('.').pop();
        const fileName = `${randomId}.${extension}`;

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const basePath = '/images';

        const filePath = join(process.cwd(), "public", "images", fileName);
        await writeFile(filePath, buffer);

        uploadedFiles.push(`${basePath}/${fileName}`);
    }

    return NextResponse.json({ success: true, files: uploadedFiles });
}
export async function GET(req) {
    const session = await getToken({req, secret:process.env.NEXTAUTH_SECRET})
    if (!session) {
        return NextResponse.json({error: "User is not authenticated"}, {status: 401})
    }
    if (session.permission !== "administrator") {
        return NextResponse.json({error: "User does not have the right permissions"}, { status: 403 })
    }
    try {
        const imagesDirectory = path.join(process.cwd(), 'public', 'images'); // Używamy path.join
        const files = await fs.readdir(imagesDirectory);

        const images = files.map(file => ({
            id: file.split('.')[0],
            path: `/images/${file}`,
        }));

        return NextResponse.json({ images });
    } catch (error) {
        console.error('Error reading images directory:', error);
        return NextResponse.json({ error: 'Blad przy pobieraniu zdjęć' });
    }
}