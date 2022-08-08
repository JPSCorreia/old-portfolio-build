import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Script from 'next/script'
import Particle from "../components/Particle";
import Skills from '../components/Skills'
import Projects from '../components/Projects'


export default function Home() {

  return (
    <div>
      <Head>
        <title>JPSCorreia Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script type="module" id='ball' src='./rotating-ball.js'>
      </Script>
      <main>
        <Navbar />
        <div className='maincontainer'>
          <Main  className='' />
          <About />
          <Skills />
          <Projects />
        </div>
      </main>
    </div>
  )
}
