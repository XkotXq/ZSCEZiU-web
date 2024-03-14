import fs, { writeFile } from "fs/promises"
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import path, { join } from 'path';

export async function POST(req) {
    const data = await req.formData()
    const file = data.get("file")

    if (!file) {
        return NextResponse.json({ success: false })
    }
    const randomId = uuidv4();
    const extension = file.name.split('.').pop();
    const fileName = `${randomId}.${extension}`;

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const basePath = '/images';

    const path = join(process.cwd(), "public", "images", fileName)
    await writeFile(path, buffer)

    return NextResponse.json({ success: true, path: `${basePath}/${fileName}` })
}
export async function GET() {
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
        return NextResponse.json({ error: 'Błąd przy pobieraniu zdjęć' });
    }
}