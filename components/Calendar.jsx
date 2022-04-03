import React, { useState, useEffect } from "react"

import WeekDays from "./WeekDay"
import Box from "./Box"

export default function Calendar() {
  const [days, setDays] = useState([])

  useEffect(() => {
    ;(async function () {
      const res = await fetch("/ramadan-2022.json")
      const data = await res.json()

      if (data.length > 0) {
        setDays(data)
      }
    })()
  }, [])

  return (
    <div className="flex flex-col w-full flex-1 text-xs sm:text-sm md:text-base">
      <WeekDays />
      <div className="grid grid-cols-7 flex-1 h-full border-collapse border-t-4 border-l-4 border-gray-400">
        {[24, 25, 26, 27, 28, 29].map((d) => (
          <div
            className="px-4 py-2 bg-white text-gray-400 border-b-4 border-r-4 border-gray-400 flex justify-center items-center sm:block select-none"
            key={d}
          >
            {d}
          </div>
        ))}

        {days && days.map((day) => <Box day={day} key={day.hijri.date} />)}

        {[1, 2, 3, 4, 5, 6].map((d) => (
          <div
            className="px-4 py-2 bg-white text-gray-400 border-b-4 border-r-4 border-gray-400 flex justify-center items-center sm:block select-none"
            key={d}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}
