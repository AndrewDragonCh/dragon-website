import Link from 'next/link'
import 'animate.css'
import { Box } from '@mui/system';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

let page = "About"

export const metadata = {
  title: `${page}`,
};

export default function About() {
  return (
      <main>
        <Navbar />
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="90vh">
          <Box display="flex" flexDirection="row">
            <h1 className='title animate__animated animate__backInDown'>
              About
            </h1>
            <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
              Me
            </h1>
          </Box>
          <Box display="flex" flexDirection="column" className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
            <h2 className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
              Hi, I&#39;m AndrewDragon
            </h2>
            <p className='maintext'>
              I&#39;m a Content Creator and Developer. I&#39;m passionate about creating content and sharing my knowledge with the world. Most of my projects can be found on <Link className='highlightedLink' href="https://www.dragonaere.com/">Dragonaere Enterprises</Link>. I also have a <Link className='highlightedLink' href="https://www.youtube.com/c/AndrewDragon">YouTube Channel</Link> where I post videos about my projects and other things I&#39;m passionate about. If you want to find me on any other platform, take a look at <Link className='highlightedLink' href="/links">My Socials</Link>.
            </p>
          </Box>
        </Box>
        <Footer />
      </main>
  )
}