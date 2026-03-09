import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Providers } from "@/components/providers";
import { MotionConfig } from "@/components/motion-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const incognito = localFont({
  src: [
    {
      path: "../assets/fonts/incognito/incognito_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/incognito/incognito_bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/incognito/incognito_medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--incognito",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Full Stack Developer & Designer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${incognito.variable} antialiased`}
      >
        <Providers>
          <MotionConfig>
            {children}
          </MotionConfig>
        </Providers>
      </body>
    </html>
  );
}
