import './globals.css'

import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

import ModalProvider from '@/providers/modalProvider'
import ToastProvider from '@/providers/toastProvider'
import { ThemeProvider } from '@/providers/themeProvider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zonetech',
  description: 'Uma loja de periféricos e tecnologias!',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
