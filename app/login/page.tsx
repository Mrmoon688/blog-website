"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })

    if (response.ok) {
      const { token } = await response.json()
      document.cookie = `token=${token}; path=/;`
      router.push("/admin")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#001d3d]">
      <form onSubmit={handleSubmit} className="bg-[#002b59] p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-white">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-white mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-[#001d3d] text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-[#001d3d] text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#FFA500] text-[#001d3d] p-2 rounded hover:bg-[#FFB52E] transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  )
}

