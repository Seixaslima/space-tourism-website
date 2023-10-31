import './globals.css'
import type { Metadata } from 'next'
import { Bellefair } from "next/font/google";
import Header from '@/components/patterns/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://space-tourism-website-eight-omega.vercel.app/'),
  title: 'Frontend Mentor | Space tourism website',
  description: 'Frontend Mentor | Space tourism website',
  openGraph: {
    images: '/opengraph-image.jpeg',
  },
  icons: '/favicon.ico',
  


}

const bellefair = Bellefair({
  weight: "400",
  subsets: ["hebrew"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bellefair.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
