import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from "@/app/ClientProviders";

const inter = Inter({
  subsets: ['latin'],
  // SELECT only necessary weight
  /*weight: [
    '400', // font-normal
    '500', // font-medium
    '600', /// font-semibold
    "700", // font-bold
  ],*/
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SELECT title for browser tab',
  description: 'SELECT description. Used when share the link',
  icons: {
    icon: [
      {url: '/favicons/favicon-32x32.png', sizes: '32x32'},
      {url: '/favicons/android-chrome-192x192.png', sizes: '192x192'},
    ],
    apple: [
      {url: 'favicons/apple-touch-icon.png'},
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body suppressHydrationWarning={true} className={inter.className}>
    <ClientProviders>
      {children}
    </ClientProviders>
    </body>
    </html>
  )
}
