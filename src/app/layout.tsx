import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import {} from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme.provider'

export const metadata: Metadata = {
  title: 'Teshe.Log',
  description: 'Teshe - Full-Stack Developer and Designer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable}`}>
        <ThemeProvider attribute={'class'} defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
