import { useState } from "react"
import { motion } from "framer-motion"

function getRandomPosition(axis) {
  if (typeof document !== "undefined") {
    switch (axis) {
      case "X":
        return Math.floor(Math.random() * document.documentElement.clientWidth)
      case "Y":
        return Math.floor(Math.random() * document.documentElement.clientHeight)
    }
  }
  return Math.floor(Math.random() * 1000)
}

export default function RandomMotion({ children }) {
  const [x, setX] = useState(getRandomPosition("X"))
  const [y, setY] = useState(getRandomPosition("Y"))

  const animationComplete = () => {
    setX(getRandomPosition("X"))
    setY(getRandomPosition("Y"))
  }

  return (
    <motion.div
      animate={{ top: y, left: x }}
      transition={{
        ease: "linear",
        duration: 20,
      }}
      onAnimationComplete={animationComplete}
      className="absolute -z-10"
      style={{
        left: getRandomPosition("X"),
        top: getRandomPosition("Y"),
      }}
    >
      {children}
    </motion.div>
  )
}
