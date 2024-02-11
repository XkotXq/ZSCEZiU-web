import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZSCEZiU',
  description: 'Strona ZSCEZiU',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className + "overflow-auto relative text-white bg-black"}>
        {children}
      </body>
    </html>
  )
}
