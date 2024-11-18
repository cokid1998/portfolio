import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://www.example.com/"),
  title: "프론트엔드 개발자 이태관",
  description: "프론트엔드 개발자 이태관의 포트폴리오 사이트",
  generator: "Next.js",
  applicationName: "프론트엔드 개발자 포트폴리오",
  keywords: [
    "프론트엔드 개발자 포트폴리오",
    "React",
    "developer",
    "frontend",
    "nextjs",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creative engineer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "프론트엔드 개발자 이태관",
    description: "프론트엔드 개발자 이태관의 포트폴리오 사이트",
    url: "https://cokid-portfolio.vercel.app/",
    siteName: "https://cokid-portfolio.vercel.app/",
    images: [
      {
        url: "./public/metadata.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
