import "./globals.css"

import type { Metadata } from "next"

import { fontMono, fontRethink, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Sidebar } from "@/components/sidebar-nav"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Carbon Design System",
  description:
    "A design system for building scalable and accessible web applications.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontRethink.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dim", "dark", "system"]}
        >
          <div className="relative min-h-screen">
            <SiteHeader />
            <div className="items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
              <Sidebar />
              <main className="h-full">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
