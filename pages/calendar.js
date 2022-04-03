import Head from "next/head"

import Main from "../components/Main"

export default function Calendar() {
  return (
    <>
      <Head>
        <title>Ramadan 2022/1443 - Calendar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />

      <footer className=""></footer>
    </>
  )
}
