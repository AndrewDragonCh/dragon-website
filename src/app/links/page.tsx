import Link from 'next/link'
import type { Metadata, Route } from 'next';
import 'animate.css'
import { Box, display, grid } from '@mui/system';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

let page = "Links"

export const metadata: Metadata = {
  title: `${page}`,
};

export default function Links() {
  return (
    <main>
      <Navbar />
      <Box>

      </Box>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", minHeight: "90vh"}}>
        <Box sx={{display: "flex", flexDirection: "row"}}>
          <h1 className='title animate__animated animate__backInDown'>
            Social
          </h1>
          <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
            Links
          </h1>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column"}}  className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
          <h2 className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
            Find me on These Platforms
          </h2>
          <Box sx={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "3fr", justifyContent: "center", alignItems: "center"}}>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="/" >
                My Website
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://thisisandrews.link/yt" as Route} >
                YouTube
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://thisisandrews.link/dc" as Route } >
                Discord
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://thisisandrews.link/adx" as Route} >
                X/Twitter
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://thisisandrews.link/github" as Route} >
                GitHub
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href={"https://thisisandrews.link/pcpp" as Route} >
                PcPartPicker
              </Link>
            </p>
          </Box>
        </Box>
      </Box>
      <Footer />
    </main>
  )
}