import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(request: Request) {
  const newPost = await request.json()
  const postsPath = path.join(process.cwd(), "app/data/posts.json")

  try {
    const postsData = JSON.parse(fs.readFileSync(postsPath, "utf8"))
    const newId = Math.max(...postsData.map((post: any) => post.id)) + 1
    newPost.id = newId
    postsData.push(newPost)
    fs.writeFileSync(postsPath, JSON.stringify(postsData, null, 2))
    return NextResponse.json({ message: "Post added successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error adding post:", error)
    return NextResponse.json({ message: "Error adding post" }, { status: 500 })
  }
}

