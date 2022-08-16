import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Particle from "../components/Particle";
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Scroller from '../components/Scroller'


export default function Home() {

  return (
    <div>
      <Head>
        <title>JPSCorreia Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='maincontainer'>
          
          <Main  className='' />
          <canvas style={{display: "block", width: "320.2px", height: "264.6px"}} className="ball" width="320" height="264"></canvas>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Scroller />
        </div>
      </main>
    </div>
  )
}
