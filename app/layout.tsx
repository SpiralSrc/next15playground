import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Bg from "@/components/shared/bg/Bg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseURL = process.env.NEXT_PUBLIC_MY_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(`${baseURL}`),
  title: {
    default: "Next15 Playground",
    template: "%s | Next15 Playground",
  },
  description: "NextJs 15 Playground with Cypress, Graphql and more...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Bg />
        {children}
      </body>
    </html>
  );
}
