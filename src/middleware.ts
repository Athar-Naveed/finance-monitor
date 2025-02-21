import {NextRequest, NextResponse} from "next/server";
import {jwtVerify} from "jose";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get("jwtToken")?.value;
  // Exclude the user route from further redirection
  if (url.pathname.startsWith(`/user`) && token !== undefined) {
    return NextResponse.next(); // Let the user continue to the page
  }
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", url.origin));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    // Verify the JWT token
    const {payload}: any = await jwtVerify(token, secret);
    const firstName = payload.firstName.split(" ")[0].toLowerCase();
    // If user is authenticated, redirect to user profile page
    return NextResponse.redirect(new URL(`/user/${firstName}`, url.origin));
  } catch (error) {
    console.error("JWT verification failed:", error);
    return NextResponse.redirect(new URL("/sign-in", url.origin));
  }
}

// Apply this middleware to all user routes
export const config = {
  matcher: ["/user/:path*"],
};
