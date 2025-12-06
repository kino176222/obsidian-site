"use client";

import { motion } from "framer-motion";
import { Youtube, Music2 } from "lucide-react";

const links = [
    {
        name: "YouTube",
        url: "https://www.youtube.com/@Obsidian_aimusic",
        icon: Youtube,
        color: "bg-red-600/80 hover:bg-red-600 border-red-500/50",
    },
    {
        name: "Spotify",
        url: "https://open.spotify.com/intl-ja/artist/522vxZ4OIMnv2Uz7zVywEJ",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 14.82 1.14.54.3.719.96.42 1.5-.3.54-.96.72-1.5.42z" />
            </svg>
        ),
        color: "bg-[#1DB954]/80 hover:bg-[#1DB954] border-[#1DB954]/50",
    },
    {
        name: "Apple Music",
        url: "https://music.apple.com/jp/artist/obsidian/1848987605",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg {...props} viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.52 4.25c-.93-.42-1.89-.64-2.88-.65-2.02-.03-3.66 1.05-5.36 2.16-1.55 1-3.1 2.01-5.18 2.01-.65-.01-1.3-.11-1.92-.3v7.91c0 3.25-3.32 4.96-6 3.19-2.06-1.36-1.74-5.06 1.34-5.02 1.13.01 2.5.76 2.66 2.02l.01.1V5.04c-.01-1.31.27-2.31 1.76-3.08C8.5.88 10.38.3 12.35.3c2.72-.01 5.09 1.16 7.28 2.58 1.1.71 1.95 2.15 2.89 1.35z" />
            </svg>
        ),
        color: "bg-[#FA243C]/80 hover:bg-[#FA243C] border-[#FA243C]/50",
    },
    {
        name: "Suno",
        url: "https://suno.com/@kino_11",
        icon: Music2,
        color: "bg-black/60 hover:bg-black/80 border-white/20 hover:border-white/50",
    },
];

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        CONTACT
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-12" />

                    <p className="text-gray-300 text-lg mb-12">
                        Follow Obsidian on social platforms
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center">
                        {links.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`px-10 py-4 rounded-full backdrop-blur-sm transition-all hover:scale-105 flex items-center gap-3 font-bold tracking-wide border ${link.color} text-white`}
                            >
                                <link.icon className="w-5 h-5" />
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-8 border-t border-white/10 text-gray-500 text-sm"
                >
                    © 2025 Obsidian AI Musician. All rights reserved.
                </motion.div>
            </div>
        </section>
    );
}
