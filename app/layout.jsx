import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata = {
  title: 'Anurag Aggarwal - Portfolio',
  description: 'Personal portfolio website',
  icons: {
    icon: [
      { url: '/FavIcon.png', sizes: 'any' },
      { url: '/FavIcon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/FavIcon.png',
    apple: '/FavIcon.svg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 0.5,
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/FavIcon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/FavIcon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/FavIcon.svg" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}

