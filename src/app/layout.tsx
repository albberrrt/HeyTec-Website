import '../styles/globals.scss'
import sty from "./page.module.scss"

import Image from "next/image"
import Link from "next/link";

import PageLoading from './components/PageLoading/PageLoading';
import { AuthProvider } from '@/contexts/AuthContext';


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
    <AuthProvider>
      <html lang="en">
        <body>

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
    </AuthProvider>
  )
}
