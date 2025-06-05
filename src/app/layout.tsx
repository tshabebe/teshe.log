import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Caveat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme.provider'

export const metadata: Metadata = {
  title: 'Teshe.Log',
  description: 'Teshe - Full-Stack Developer and Designer',
}

const CaveatFont = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${CaveatFont.variable}`}>
        <ThemeProvider attribute={'class'} defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
