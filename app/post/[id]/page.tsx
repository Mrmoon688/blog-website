import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"
import posts from "../../data/posts.json"

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#001d3d] text-white">
      <header className="p-4 border-b border-gray-700">
        <div className="container mx-auto">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300">
            My Blog
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <article className="max-w-3xl mx-auto">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">{post.date}</span>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Github size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div className="prose prose-invert max-w-none">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>

      <footer className="bg-[#002b59] py-4 mt-8">
        <div className="container mx-auto text-center text-sm">&copy; 2023 My Blog. All rights reserved.</div>
      </footer>
    </div>
  )
}

