import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <header className="w-full px-4 py-2 mx-auto max-w-7xl bg-cyan-700 my-4 flex justify-between items-center text-white">
      <h1 className="font-bold text-2xl">Ramadam Ul Kareem, 1443/2022</h1>
      <Link href="/">
        <div className="bg-gray-400 px-2 py-1 rounded-md cursor-pointer">
          {"<<=="}
        </div>
      </Link>
    </header>
  )
}
