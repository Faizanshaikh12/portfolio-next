import Head from 'next/head'
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Faizan Shaikh</title>
        <meta name="description" content="My Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
    </div>
  )
}
