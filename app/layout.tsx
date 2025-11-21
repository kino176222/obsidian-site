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
