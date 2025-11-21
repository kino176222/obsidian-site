import type { Metadata } from "next";
import { Noto_Sans_JP, Montserrat } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Obsidian | AI Musician",
  description: "Official homepage of AI Musician Obsidian. Cinematic Emo & Post-Rock.",
  metadataBase: new URL('https://obsidian-site-theta.vercel.app'),
  openGraph: {
    title: "Obsidian | AI Musician",
    description: "Official homepage of AI Musician Obsidian. Cinematic Emo & Post-Rock.",
    url: 'https://obsidian-site-theta.vercel.app',
    siteName: 'Obsidian',
    images: [
      {
        url: '/hero-bg-new.webp',
        width: 1200,
        height: 630,
        alt: 'Obsidian AI Musician',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Obsidian | AI Musician",
    description: "Official homepage of AI Musician Obsidian. Cinematic Emo & Post-Rock.",
    images: ['/hero-bg-new.webp'],
  },
};

import { AudioPlayer } from "@/components/features/AudioPlayer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${notoSansJP.variable} ${montserrat.variable} antialiased bg-obsidian-bg text-white selection:bg-obsidian-accent selection:text-white pb-24`}
      >
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}
