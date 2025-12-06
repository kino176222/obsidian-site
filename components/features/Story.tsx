"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Story() {
    return (
        <section id="story" className="py-32 px-6 bg-gradient-to-b from-[#121212] to-[#0a0a0a] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                    {/* Visual Side (Mobile: Top, Desktop: Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 6 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2 relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0 group cursor-pointer"
                    >
                        <a href="/story" className="block relative w-full h-full">
                            <div className="absolute inset-0 bg-purple-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
                                <Image
                                    src="/story/viduimage-3065017018468651-nomark.png"
                                    alt="Story Visual"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6 text-left">
                                    <p className="text-white font-serif italic text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        Click to Read
                                    </p>
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1 flex-1 text-center md:text-left"
                    >
                        <div className="inline-block mb-4 px-3 py-1 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
                            <span className="text-xs md:text-sm font-bold text-purple-400 tracking-widest uppercase">
                                3RD ALBUM PROJECT
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Obsidian Anthem
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto md:mx-0 mb-12" />

                        <div className="space-y-8 text-gray-300 text-lg leading-relaxed mb-12">
                            <p>
                                3rdアルバム『Obsidian Anthem』で描かれる、<br className="hidden md:block" />
                                凍てついた世界と、ひとつの「歌」の物語。
                            </p>
                            <p className="text-sm md:text-base text-gray-400">
                                失われた記憶、赤髪の戦士、そして女王の涙。<br />
                                全ての真実は、ここにある。
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <a
                                href="/story"
                                className="inline-flex items-center gap-2 group px-8 py-4 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                            >
                                <span className="text-lg font-bold tracking-wider text-white">
                                    READ THE STORY
                                </span>
                                <svg className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
