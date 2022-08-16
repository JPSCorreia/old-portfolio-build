import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Script from 'next/script'
import Particle from "../components/Particle";

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Script type="module" id='ball' src='./rotating-ball.js'>
      </Script>
      {/* <canvas style="display: block; width: 320.2px; height: 264.6px;" className="ball" width="320" height="264"></canvas> */}
      {/* <canvas style={{display: "block", width: "320.2px", height: "264.6px"}} className="ball" width="320" height="264"></canvas> */}
      <Particle />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
