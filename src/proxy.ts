import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/admin")) {
    const signInUrl = new URL("/api/auth/signin", req.nextUrl.origin)
    signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }
})

export const config = {
  matcher: ["/admin/:path*"],
}
