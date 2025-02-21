import {NextResponse, NextRequest} from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/db";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import {cookies} from "next/headers";
export async function POST(request: NextRequest) {
  try {
    // Step 1: Ensure the database connection is established
    const db = await dbConnect();

    // Step 2: Parse the incoming request data
    const userData = await request.json();
    const cookie = await cookies();
    // Step 3: Hash the password before saving
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Step 4: Create the new user instance with the received data
    const newUser = new User({
      fullName: userData.fullName,
      email: userData.email,
      password: hashedPassword,
      whatsapp: userData.whatsapp,
      role: userData.role || "user",
      createdAt: new Date().toISOString(),
    });

    // Step 5: Validate the user data before saving
    await newUser.validate(); // This checks if the data is valid

    // Step 6: Save the user to the database
    const savedUser = await newUser.save();

    const token = await jwt.sign(
      {
        id: savedUser._id,
        email: savedUser.email,
        fullName: savedUser.fullName,
      },
      process.env.JWT_SECRET as string,
      {expiresIn: "7d"},
    );

    cookie.set("jwtToken", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    });

    return NextResponse.json({
      message: "User created successfully!",
      status: 200,
      fullName: savedUser.fullName,
    });
  } catch (error: any) {
    console.error("Validation or saving error:", error.message);

    return NextResponse.json({
      message: `An error occurred while creating the user: ${error.message}`,
      status: 500,
    });
  }
}
