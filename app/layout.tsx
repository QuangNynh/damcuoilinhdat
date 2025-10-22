import type { Metadata } from "next";
import { Geist, Geist_Mono, Imperial_Script } from "next/font/google";
import { Monsieur_La_Doulaise } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import MusicPlayer from "./components/MusicPlayer";

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
  title: "Thiệp Cưới Tiến Đạt & Mỹ Linh",
  description: "Thư mời tiệc cưới Tiến Đạt & Mỹ Linh - 26.10.2025",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicons/apple-touch-icon.png",
    },
  ],
  openGraph: {
    title: "Thiệp Cưới Tiến Đạt & Mỹ Linh",
    description: "Thư mời tiệc cưới Tiến Đạt & Mỹ Linh - 26.10.2025",
    images: [
      {
        url: "/album/anh-chinh.JPG",
        width: 1200,
        height: 630,
        alt: "Thiệp Cưới Tiến Đạt & Mỹ Linh",
      },
    ],
  },
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
        <MusicPlayer />
        <script src="/scroll-animations.js" defer></script>
      </body>
    </html>
  );
}
