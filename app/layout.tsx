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
import {SmallNavigation} from "@/components/small-navigation";

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
          "prose prose-invert max-w-none dark:prose-p:text-neutral-300 prose-p:text-neutral-700 prose-h1:text-[40px]  md:prose-h1:text-[60px] lg:prose-h1:text-[88px] prose-a:text-neutral-800 dark:prose-a:text-neutral-100 prose-h1:text-neutral-800 dark:prose-h1:text-neutral-200 prose-h2:text-neutral-800 dark:prose-h2:text-neutral-200 prose-h3:text-neutral-800 dark:prose-h3:text-neutral-200 prose-h1:font-normal prose-h1:text-center prose-h2:text-[48px] prose-h2:font-normal ",
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
          <SmallNavigation />
          {children}
          <Contact />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
