import type { Metadata } from "next";
import { Geist, Geist_Mono, Imperial_Script } from "next/font/google";
import { Monsieur_La_Doulaise } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monsieurLaDoulaise = Monsieur_La_Doulaise({
  variable: "--font-monsieur-la-doulaise",
  subsets: ["latin"],
  weight: "400",
});

const imperialScript = Imperial_Script({
  variable: "--font-imperial-script",
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Thiệp Cưới Quang Vinh & Mỹ Anh",
  description: "Thư mời tiệc cưới Quang Vinh & Mỹ Anh - 26.10.2025",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monsieurLaDoulaise.variable} ${imperialScript.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <script src="/scroll-animations.js" defer></script>
      </body>
    </html>
  );
}
