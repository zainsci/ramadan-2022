import React from "react"

import Header from "./Header"
import Calendar from "./Calendar"

export default function Main() {
  return (
    <main className="w-screen h-screen bg-white py-4">
      <div className="xl:max-w-6xl lg:max-w-4xl px-4 mx-auto h-full w-screen flex flex-col items-start justify-start bg-gray-200">
        <Header />
        <Calendar />
        <footer className="p-4 w-full text-center">
          <a href="https://zainsci.dev" className="my-2">
            [ Made By Zain Shabbir ]
          </a>
        </footer>
      </div>
    </main>
  )
}
