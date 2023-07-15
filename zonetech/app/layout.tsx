import './globals.css'

import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zonetech',
  description: 'Uma loja de periféricos e tecnologias!',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
