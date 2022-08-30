import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Particle from "../components/Particle";

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Particle />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
