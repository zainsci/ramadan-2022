import { useState, useEffect } from "react"

export default function WeekDays() {
  const [dayLenght, setDayLength] = useState(null)

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  useEffect(() => {
    function checkWidth() {
      if (document.documentElement.clientWidth < 500) {
        setDayLength(1)
      } else if (document.documentElement.clientWidth < 900) {
        setDayLength(3)
      } else {
        setDayLength(null)
      }
    }

    checkWidth()
    window.addEventListener("resize", checkWidth)
  }, [])

  function weekDayName(day) {
    switch (dayLenght) {
      case 1:
        return day.slice(0, 1)
      case 3:
        return day.slice(0, 3)
      default:
        return day
    }
  }

  return (
    <div className="grid grid-cols-7 border-b-8 border-t-4 border-l-4 border-gray-400">
      {weekDays.map((d, i) => (
        <div
          className="px-4 py-2 bg-gray-200 select-none border-b-4 border-r-4 border-gray-400 flex justify-center items-center sm:block"
          key={i}
        >
          {weekDayName(d)}
        </div>
      ))}
    </div>
  )
}
