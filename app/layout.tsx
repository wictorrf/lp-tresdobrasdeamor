import type { Metadata } from 'next'
import './globals.css'
import FacebookPixel from '@/components/FacebookPixel'

export const metadata: Metadata = {
  title: 'Três Dobras de Amor',
  description: 'E-book Exclusivo para Casais Cristãos',
  icons: {
    icon: '/images/title.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}
