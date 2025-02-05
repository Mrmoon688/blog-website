import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"
import posts from "./data/posts.json"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="p-4 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Blog</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-gray-300">
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 lg:pr-8">
          <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
          {posts.map((post) => (
            <article key={post.id} className="mb-8 bg-[#002b59] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <div className="flex space-x-2">
                    <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Github size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </div>
                <Link
                  href={`/post/${post.id}`}
                  className="bg-[#FFA500] text-[#001d3d] px-4 py-2 rounded hover:bg-[#FFB52E] transition-colors inline-block"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
        <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-[#002b59] p-4 rounded">
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              {posts.map((post) => (
                <li key={post.id}>
                  <Link href={`/post/${post.id}`} className="hover:text-gray-300">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>

      <footer className="bg-[#002b59] py-4 mt-8">
        <div className="container mx-auto text-center text-sm">&copy; 2023 My Blog. All rights reserved.</div>
      </footer>
    </div>
  )
}

