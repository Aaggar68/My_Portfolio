import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata = {
  title: 'Anurag Aggarwal - Portfolio',
  description: 'Personal portfolio website',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/FavIcon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/FavIcon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/FavIcon.png" type="image/png" />
        <link rel="shortcut icon" href="/FavIcon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/FavIcon.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}

