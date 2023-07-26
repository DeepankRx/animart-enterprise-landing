import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Animart Enterprises',
  description: 'Animart Enterprises is a dynamic and innovative web development company that specializes in creating cutting-edge digital solutions for businesses of all sizes. With a dedicated team of skilled professionals, Animart Enterprises is committed to delivering high-quality web development services tailored to meet the unique needs and goals of each client.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
