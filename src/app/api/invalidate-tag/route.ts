import { revalidateTag } from "next/cache";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: Response) {
  const tag = req.nextUrl.searchParams.get("tag");

  try {
    revalidateTag(tag);

    return NextResponse.json({ revalidated: true, tag });
  } catch (error) {
    return NextResponse.json(
      { message: "There has been an error", error },
      { status: 500 }
    );
  }
}
