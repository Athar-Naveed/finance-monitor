import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {jwtVerify} from "jose";
import dbConnect from "@/db";
import User from "@/models/user";

export async function GET(request: NextRequest) {
  await dbConnect();
  const cookie = await cookies();
  const token = cookie.get("jwtToken");
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  if (token != undefined) {
    const {payload} = await jwtVerify(token.value, secret);
    const user = await User.findById(payload.id);
    if (!user) {
      return NextResponse.json({message: "No user found"}, {status: 404});
    }
    return NextResponse.json(user, {status: 200});
  }
}
