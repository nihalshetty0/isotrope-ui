// 'use client'
import "./globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { fontMono, fontSans, fontRethink } from "@/lib/fonts";

import { ThemeProvider } from "@/registry/theme-provider";
import Sidebar from "./_components/Sidebar";
import Navigation from "./_components/Navigation";

export const metadata: Metadata = {
  title: "Carbon Design System",
  description:
    "A design system for building scalable and accessible web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontRethink.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dim", "dark", "system"]}
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <div className="flex flex-1 md:container">
              <Sidebar />
              <main className="flex-1 px-4 md:px-0">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
