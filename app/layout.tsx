import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tribe | Connect with Student Communities",
  description: "Discover, join, and create student communities that match your interests and academic pursuits.",
  metadataBase: new URL("https://tribe.vercel.app"),
  openGraph: {
    title: "Tribe | Connect with Student Communities",
    description: "Discover, join, and create student communities that match your interests and academic pursuits.",
    url: "https://tribe.vercel.app",
    siteName: "Tribe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tribe - Student Communities Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tribe | Connect with Student Communities",
    description: "Discover, join, and create student communities that match your interests and academic pursuits.",
    images: ["/og-image.png"],
    creator: "@tribecommunity",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: ["student clubs", "university communities", "campus groups", "student organizations", "tribe"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

