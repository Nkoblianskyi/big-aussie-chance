import type React from "react"
import { Hind } from "next/font/google"
import "./globals.css"
import LayoutWrapper from "@/components/layout-wrapper"

const inter = Hind({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "Big Aussie Chance - Oz Lotto Victoria",
  description:
    "Your gateway to Oz Lotto dreams in Victoria. Buy tickets, check results, and join thousands of winners.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
