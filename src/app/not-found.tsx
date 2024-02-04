import Link from 'next/link'
import { Box } from '@mui/system';
import 'animate.css'

export default function NotFound() {
  return (
    <main>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="90vh">
        <Box display="flex" flexDirection="row">
          <h1 className='title animate__animated animate__backInDown'>
            Error
          </h1>
          <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
            404
          </h1>
        </Box>
        <Box display="flex" flexDirection="column" className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
          <h2 className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
            <Link href="/" >
              Page Not Found
            </Link>
          </h2>
        </Box>
      </Box>
    </main>
  )
}