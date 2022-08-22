import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Script from 'next/script'
import Particle from "../components/Particle";
import 'animate.css';

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Script type="module" id='ball' src='./rotating-ball.js'>
      </Script>
      {/* <Script type="module" id='scroll-bar' src='./scroll-bar.js'>
      </Script> */}
      <Particle />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
