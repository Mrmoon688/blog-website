"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const date = new Date().toISOString().split("T")[0]
    const newPost = { title, excerpt, content, image, date }

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      })

      if (response.ok) {
        router.push("/")
        router.refresh()
      } else {
        console.error("Failed to add post")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    router.push("/login")
  }

  return (
    <div className="min-h-screen p-8 bg-[#001d3d] text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Add New Blog Post</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#002b59] text-white"
          />
        </div>
        <div>
          <label htmlFor="excerpt" className="block mb-2">
            Excerpt:
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#002b59] text-white"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#002b59] text-white h-40"
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#002b59] text-white"
          />
        </div>
        <button
          type="submit"
          className="bg-[#FFA500] text-[#001d3d] px-4 py-2 rounded hover:bg-[#FFB52E] transition-colors"
        >
          Add Post
        </button>
      </form>
    </div>
  )
}

