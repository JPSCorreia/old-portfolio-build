import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Script from 'next/script'
import Particle from "../components/Particle";
import RotatingBall from '../components/RotatingBall';

function MyApp({ Component, pageProps }) {
  return (
    <> 
      {/* <Script type="module" id='ball' src='./rotating-ball.js'></Script> */}
      {/* <Script type="module" id='scroll-bar' src='./scroll-bar.js'></Script> */}
      {/* <Script type="module" id='jQueryCDN' src="https://code.jquery.com/jquery-3.6.0.min.js"></Script> */}
      {/* <Script type="module" id='scroll-animation' src='./scroll-animation.js'></Script> */}
      {/* <Script type="module" scr="/dist/js/jquery-scrolla.min.js"></Script> */}
      <RotatingBall />
      <Particle />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
