import { motion } from "framer-motion"
import Shape01 from "./icons/Shape01"

export default function Details({ day, show, setShow }) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        onClick={() => setShow(!show)}
        className="w-full h-full bg-opacity-25 bg-gray-900 absolute top-0 left-0 z-40 flex justify-center items-center"
      ></motion.div>

      <motion.div
        initial={{
          scale: 0.9,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          // duration: 0.1,
          type: "spring",
          stiffness: 1000,
          damping: 15,
        }}
        exit={{
          scale: 0.9,
        }}
        className="absolute z-50 bg-white w-full max-w-xl h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      >
        <div
          className="w-8 h-8 flex justify-center items-center rounded-full absolute top-3 right-3 bg-gray-100 hover:bg-gray-300 cursor-pointer select-none"
          onClick={() => setShow(!show)}
        >
          X
        </div>

        <div className="p-8">
          <h1 className="text-2xl">{day.hijri.fulldate}</h1>
          <h2>{day.gregorian.fulldate}</h2>
        </div>

        <motion.div
          className="absolute top-1/2 right-0"
          animate={{
            rotate: "360deg",
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            type: "keyframes",
            ease: "linear",
          }}
        >
          <Shape01 />
        </motion.div>
      </motion.div>
    </>
  )
}
