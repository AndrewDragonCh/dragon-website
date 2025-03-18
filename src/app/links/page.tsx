import Link from 'next/link'
import type { Route } from 'next';
import 'animate.css'
import { Box } from '@mui/system';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

let page = "Links"

export const metadata = {
  title: `${page}`,
};

export default function Links() {
  return (
    <main>
      <Navbar />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="90vh">
        <Box display="flex" flexDirection="row">
          <h1 className='title animate__animated animate__backInDown'>
            Social
          </h1>
          <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
            Links
          </h1>
        </Box>
        <Box display="flex" flexDirection="column" className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
          <h2 className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
            Find me on These Platforms
          </h2>
          <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridTemplateRows="4fr" justifyContent="center" alignItems="center">
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="/" >
                My Website
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://go.andrewdragon.dev/f45" as Route} >
                YouTube
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://go.andrewdragon.dev/fyx" as Route } >
                Discord
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://go.andrewdragon.dev/pyd" as Route} >
                X/Twitter
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://go.andrewdragon.dev/7mw" as Route} >
                GitHub
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://go.andrewdragon.dev/w2o" as Route} >
                PcPartPicker
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://go.andrewdragon.dev/zh1" as Route} >
                MyAnimeList
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://go.andrewdragon.dev/5x6" as Route} >
                MangaDex
              </Link>
            </p>
          </Box>
        </Box>
      </Box>
      <Footer />
    </main>
  )
}