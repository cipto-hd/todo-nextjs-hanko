import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import HankoProvider from "@/components/HankoProvider";
import { ProModal } from "@/components/pro-modal";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Friends",
  description: "Your customized AI Friends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-secondary", inter.className)}>
        <HankoProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ProModal />
            {children}
            <Toaster />
          </ThemeProvider>
        </HankoProvider>
      </body>
    </html>
  );
}
