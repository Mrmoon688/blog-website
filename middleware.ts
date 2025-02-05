import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import * as jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (token) {
      try {
        jwt.verify(token, JWT_SECRET)
        return NextResponse.next()
      } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url))
      }
    }
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

