import React, { useState } from "react"

import Details from "./Details"

export default function Box({ day }) {
  const [showDetails, setShowDetails] = useState(false)

  function getClassNames() {
    const classNames = [
      "px-4 py-2 border-b-4 border-r-4 border-gray-400 hover:bg-white cursor-pointer flex justify-center items-center sm:block",
    ]
    const d = new Date()

    if (day.gregorian === d.getDate() && [3, 4].includes(d.getMonth())) {
      classNames.push("")
    } else {
      classNames.push("")
    }

    return classNames.join(" ")
  }

  return (
    <>
      {showDetails && (
        <Details day={day} show={showDetails} setShow={setShowDetails} />
      )}
      <div
        className={getClassNames() + ""}
        key={day.hijri.date}
        onClick={() => setShowDetails(!showDetails)}
      >
        {day.hijri.date}
      </div>
    </>
  )
}
