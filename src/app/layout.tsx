import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  )
}
