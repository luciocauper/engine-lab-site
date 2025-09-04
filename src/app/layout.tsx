import { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";



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
    <html lang="en">
      <body
        className={`antialiased`}
      >
            <Header />
        {children}
      </body>
    </html>
  );
}
