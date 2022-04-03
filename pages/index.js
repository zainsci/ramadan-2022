import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"

import Shape01 from "../components/icons/Shape01"
import Ramadan from "../components/icons/Ramadan"
import Kareem from "../components/icons/Kareem"
import RoamingIcons from "../components/RoamingIcons"

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy Ramadan 2022/1443</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen flex p-8 justify-center items-center">
        <div className="max-w-6xl m-auto h-full flex flex-col lg:grid lg:grid-cols-2">
          <div className="flex justify-center items-center h-1/2 sm:h-full">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                type: "spring",
                stiffness: 1000,
                damping: 15,
              }}
            >
              <motion.div
                animate={{
                  rotate: "360deg",
                }}
                transition={{
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex justify-center items-center h-1/2 sm:h-full"
              >
                <Shape01 width="480" height="480" />
              </motion.div>
            </motion.div>
          </div>

          <div
            className="px-4 flex justify-center items-center flex-col"
            id="right-section"
          >
            <RoamingIcons />

            <div className="relative z-20 flex justify-center items-center flex-col">
              <div className="py-2">
                <Ramadan />
              </div>
              <div className="py-2">
                <Kareem />
              </div>
              <p className="py-4 text-center text-lg">
                May Allah bless you and your loved ones in this holy month of
                Ramadan and always.
              </p>
              <Link href="/calendar">
                <div className="px-8 py-4 rounded-xl bg-cyan-500 text-white cursor-pointer text-center whitespace-nowrap">
                  Show Calendar
                </div>
              </Link>
            </div>
            <a href="https://zainsci.dev" className="mt-8">
              [ Made By Zain Shabbir ]
            </a>
            <div className="my-2 gap-4 flex">
              <a href="https://twitter.com/zainsci">[Twitter]</a>
              <a href="https://github.com/zainsci">[Github]</a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
