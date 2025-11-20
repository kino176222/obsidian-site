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
                    © 2024 Obsidian AI Musician. All rights reserved.
                </motion.div>
            </div>
        </section>
    );
}
