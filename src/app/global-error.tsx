'use client'

import React from 'react';
import Link from 'next/link'
import 'animate.css'
import { Box } from '@mui/system';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error(error)
  return (
    <html>
      <body>
        <main>
          <Box className='main'>
            <Box className='head'>
              <h1 className='title animate__animated animate__backInDown'>
                Error
              </h1>
              <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
                {error.name}
              </h1>
            </Box>
            <Box className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
              <h2 className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
                <Link href="/" >
                  {error.message}
                </Link>
              </h2>
              <button onClick={() => reset()} className='animate__animated animate__fadeIn animate__delay-2s'>
                Click here to try again. If this continues, please contact me.
              </button>
              <p>{error.digest}</p>
            </Box>
          </Box>
        </main>
      </body>
    </html>
  )
}