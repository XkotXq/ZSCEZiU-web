import { connectDB } from "../../../../utils/connect";
import Post from "../../../../models/postModel";
import Subpage from "../../../../models/subpageModel";
import Service from "../../../../models/serviceModel";
import { NextResponse } from "next/server"
export const dynamic = 'force-dynamic';

function containsWord(value, word) {
  if (typeof value === 'string') {
    return value.toLowerCase().includes(word.toLowerCase());
  } else if (Array.isArray(value)) {
    return value.some(item => containsWord(item, word));
  } else if (typeof value === 'object' && value !== null) {
    return Object.values(value).some(val => containsWord(val, word));
  }
  return false;
}
function filterObjectsContainingWord(array, word) {
  return array.filter(obj => containsWord(obj, word));
}


export async function GET(req) {
  const q = req.nextUrl.searchParams.get("q");
  try {

    await connectDB();
    const posts = await Post.find(
      { share: true },
      { createdAt: 0, updatedAt: 0, img: 0 },
    )
    const isCont = filterObjectsContainingWord(posts, q)
    const subpages = await Subpage.find(
        { share: true },
        { createdAt: 0, updatedAt: 0 },
    )
    const filteredSubpages = filterObjectsContainingWord(subpages, q)
    const service = await Service.find(
        { state: "accepted" },
        { createdAt: 0, images: 0 },
    )
    const found = {
      posts : isCont,
      subpages: filteredSubpages
    }
    return NextResponse.json({ found });
  } catch (e) {
    console.log("error", e);
  }
};