import Head from 'next/head'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>JPSCorreia Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
      </main>
    </div>
  )
}
