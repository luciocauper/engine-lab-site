import "./globals.css";
import { Metadata } from "next";
import { Header } from "@/components/header";
import {Syne, Space_Grotesk, Bricolage_Grotesque} from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Engine Lab',
  description: 'Laboratório de engenharia de software e sistemas',
  openGraph:{
      title: 'Engine Lab',
      description: 'Laboratório de engenharia de software e sistemas',
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${syne.variable} ${spaceGrotesk.variable} ${bricolageGrotesque.variable}`}
    >
      <body
        className={`antialiased`}
      >
            <Header />
        {children}
      </body>
    </html>
  );
}
