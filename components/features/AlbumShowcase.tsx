"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { albums, Album } from "@/lib/data";
import { X, Play, Disc } from "lucide-react";
import { cn } from "@/lib/utils";

export function AlbumShowcase() {
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

    return (
        <section id="discography" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight"
            >
                DISCOGRAPHY
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {albums.map((album, index) => (
                    <motion.div
                        key={album.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-[#1a1a2e] rounded-3xl overflow-hidden border border-white/5 hover:border-obsidian-accent/50 transition-all duration-500"
                        onClick={() => setSelectedAlbum(album)}
                    >
                        {/* Cover Image */}
                        <div className="relative aspect-video w-full overflow-hidden">
                            <Image
                                src={album.cover}
                                alt={album.title}
                                fill
                                className="object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent opacity-60" />
                        </div>

                        {/* Content */}
                        <div className="p-8 relative z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-obsidian-accent font-bold tracking-wider text-sm uppercase">
                                    {album.label}
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-obsidian-accent transition-colors">
                                {album.title}
                            </h3>

                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                                <div className="w-4 h-[1px] bg-obsidian-purple" />
                                <span>{album.year}</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
                                {album.links.suno && (
                                    <a
                                        href={album.links.suno}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-gray-300 hover:text-white"
                                    >
                                        <Play className="w-3 h-3 fill-current" />
                                        Suno
                                    </a>
                                )}
                                {album.links.youtubeMusic && (
                                    <a
                                        href={album.links.youtubeMusic}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-600/50 transition-colors text-sm text-gray-300 hover:text-red-500"
                                    >
                                        <Disc className="w-3 h-3" />
                                        YouTube Music
                                    </a>
                                )}
                                {album.links.appleMusic && (
                                    <a
                                        href={album.links.appleMusic}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#FA243C]/20 border border-white/10 hover:border-[#FA243C]/50 transition-colors text-sm text-gray-300 hover:text-[#FA243C]"
                                    >
                                        <Disc className="w-3 h-3" />
                                        Apple Music
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Album Detail Modal */}
            <AnimatePresence>
                {selectedAlbum && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedAlbum(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-obsidian-gray border border-white/10 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Cover Art Side */}
                            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto">
                                <Image
                                    src={selectedAlbum.cover}
                                    alt={selectedAlbum.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-gray via-transparent to-transparent md:bg-gradient-to-r" />
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center w-full md:w-1/2 overflow-y-auto">
                                <button
                                    onClick={() => setSelectedAlbum(null)}
                                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <h3
                                    className="text-3xl md:text-4xl font-bold mb-2 text-white"
                                    style={{ color: selectedAlbum.color }}
                                >
                                    {selectedAlbum.title}
                                </h3>
                                <p className="text-gray-400 mb-6">{selectedAlbum.year}</p>

                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    {selectedAlbum.description}
                                </p>

                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Tracklist</h4>
                                    <ul className="space-y-2">
                                        {selectedAlbum.tracks.map((track, i) => (
                                            <li key={i} className="flex items-center text-gray-300 hover:text-white transition-colors group cursor-pointer">
                                                <span className="w-6 text-gray-600 text-sm">{i + 1}</span>
                                                <span className="flex-1">{track}</span>
                                                <Play className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <a
                                        href="https://suno.com/@kino_11"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white hover:text-obsidian-accent transition-colors font-bold"
                                    >
                                        <Play className="w-5 h-5 fill-current" />
                                        Listen on Suno
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
