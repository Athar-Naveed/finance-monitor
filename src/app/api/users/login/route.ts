import {NextRequest, NextResponse} from "next/server";
import dbConnect from "@/db";
import User from "@/models/user"; // Import your User model
import bcrypt from "bcrypt"; // For password verification
import jwt from "jsonwebtoken"; // Assuming you use jsonwebtoken for generating tokens
import {cookies} from "next/headers";

export async function POST(request: NextRequest) {
  try {
    // Step 1: Ensure the database connection is established
    await dbConnect();
    const cookie = await cookies();

    // Step 2: Parse the incoming request data
    const {email, password} = await request.json(); // Destructure user input

    // Step 3: Query the database to find the user by email (or username if applicable)
    const user = await User.findOne({email});

    if (!user) {
      // If user not found, return an error
      return NextResponse.json({message: "User not found", status: 404});
    }

    // Step 4: Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // If password is invalid, return an error
      return NextResponse.json({message: "Invalid credentials", status: 401});
    }
    // Step 5: Generate a JWT token for the user
    const token = await jwt.sign(
      {
        id: user._id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET as string,
      {expiresIn: "7d"},
    );

    cookie.set("jwtToken", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    });

    return NextResponse.json(
      {
        message: "Logged In",
        status: 200,
        fullName: user.fullName,
      },
      {status: 200},
    );
  } catch (error: any) {
    console.error("Error logging in user:", error.message);

    return NextResponse.json(
      {
        message: `An error occurred during login: ${error.message}`,
        status: 500,
      },
      {status: 500},
    );
  }
}
