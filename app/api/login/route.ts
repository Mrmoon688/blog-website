import { NextResponse } from "next/server"
import * as jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function POST(request: Request) {
  const { username, password } = await request.json()

  // In a real application, you would check these credentials against a database
  if (username === "Admin" && password === "King@User23") {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" })
    return NextResponse.json({ token })
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }
}

