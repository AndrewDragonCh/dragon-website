import Script from 'next/script'
import { Metadata, Viewport } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import './globals.css'

import Theme from "../providers/ColorMode";


export const metadata: Metadata = {
  metadataBase: new URL('https://www.andrewdragon.dev'),
  title: {
    default: 'AndrewDragon',
    template: '%s - AndrewDragon'
  },
  description: 'AndrewDragon - YouTube Streamer and Content Creator',
  applicationName: 'AndrewDragon',
  creator: 'Andrew Still',
  referrer: 'origin-when-cross-origin',
  manifest: '/manifest.json',
  keywords: ['youtube', 'twitch', 'twitter', 'wyvernaere', 'dragonaere'],
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
    date: false,
    url: false,
  },
  twitter: {
    card: 'summary',
    title: 'AndrewDragon',
    description: 'AndrewDragon - YouTube Streamer and Content Creator',
    creator: '@AndrewDragonCh'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  openGraph: {
    title: 'AndrewDragon',
    description: 'AndrewDragon - YouTube Streamer and Content Creator',
    url: 'https://www.andrewdragon.dev/',
    siteName: 'AndrewDragon',
    type: 'website',
    locale: 'en_US'
  },
  appleWebApp: {
    title: 'AndrewDragon',
    statusBarStyle: 'default',
    startupImage: [
      '/icon-512x512.png'
    ],
  },
  icons: {
    apple: '/icon-192x192png'
  }
};

export const viewport:Viewport = {
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Theme>
            {children}
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
