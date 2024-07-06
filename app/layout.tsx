import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { cn } from "@/lib/utils";
import "@code-hike/mdx/dist/index.css";
import { Navigation } from "@/components/navigation";
import { Contact } from "@/components/contact";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog application",
  description: "Blog for software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "prose prose-invert max-w-none prose-h1:text-[88px] prose-h1:font-normal prose-h1:text-center prose-h2:text-[48px] prose-h2:font-normal ",
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Contact />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
