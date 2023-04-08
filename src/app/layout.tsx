import '../styles/globals.scss'
import sty from "./page.module.scss"

import Image from "next/image"
import Link from "next/link";

import { Inter } from 'next/font/google'
import PageLoading from './components/PageLoading/PageLoading';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Hey!Tec',
  description: 'Hey!Tec Chat Aplication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>

        <PageLoading />

        <header className={sty.header}>
        <div>
          <Link href="/">
            <Image
              priority
              src="/static/heytec.svg"
              height={32}
              width={144}
              alt="Hey!Tec"
            />
          </Link>
        </div>
        <div className={sty.linkdiv}>
          <Link href={"/login"}>
          <span>Login</span>
          </Link>
          <Link href={"/signup"}>
            <div className={sty.signup}>
              <span>Sign Up</span>
            </div>
          </Link>
        </div>
      </header>

      {children}

      </body>
    </html>
  )
}
