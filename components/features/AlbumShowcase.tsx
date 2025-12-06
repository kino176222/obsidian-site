"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { albums, Album } from "@/lib/data";
import { X, Play, Disc } from "lucide-react";
import { cn } from "@/lib/utils";

export function AlbumShowcase() {
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

    return (
        <section id="discography" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight"
                >
                    DISCOGRAPHY
                </motion.h2>
            </div>

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
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.2c-3.974 0-7.2-3.226-7.2-7.2S8.026 4.8 12 4.8s7.2 3.226 7.2 7.2-3.226 7.2-7.2 7.2zm-1.2-10.8v7.2l4.8-3.6-4.8-3.6z" />
                                        </svg>
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
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M22.52 4.25c-.93-.42-1.89-.64-2.88-.65-2.02-.03-3.66 1.05-5.36 2.16-1.55 1-3.1 2.01-5.18 2.01-.65-.01-1.3-.11-1.92-.3v7.91c0 3.25-3.32 4.96-6 3.19-2.06-1.36-1.74-5.06 1.34-5.02 1.13.01 2.5.76 2.66 2.02l.01.1V5.04c-.01-1.31.27-2.31 1.76-3.08C8.5.88 10.38.3 12.35.3c2.72-.01 5.09 1.16 7.28 2.58 1.1.71 1.95 2.15 2.89 1.35z" />
                                        </svg>
                                        Apple Music
                                    </a>
                                )}
                                {album.links.spotify && (
                                    <a
                                        href={album.links.spotify}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#1DB954]/20 border border-white/10 hover:border-[#1DB954]/50 transition-colors text-sm text-gray-300 hover:text-[#1DB954]"
                                    >
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 14.82 1.14.54.3.719.96.42 1.5-.3.54-.96.72-1.5.42z" />
                                        </svg>
                                        Spotify
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
                        className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm overflow-y-auto"
                        onClick={() => setSelectedAlbum(null)}
                    >
                        {/* Close Button - Fixed to viewport */}
                        <button
                            onClick={() => setSelectedAlbum(null)}
                            className="fixed top-6 right-6 p-3 z-[60] bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-all shadow-2xl"
                            style={{ zIndex: 9999 }}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-obsidian-gray border border-white/10 rounded-2xl overflow-hidden max-w-5xl w-full mx-auto my-8 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Cover Art - Sticky at top on mobile, side on desktop */}
                            <div className="relative w-full md:w-1/2 md:float-left aspect-square md:aspect-auto md:h-[80vh] md:sticky md:top-0">
                                <Image
                                    src={selectedAlbum.modalCover || selectedAlbum.cover}
                                    alt={selectedAlbum.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                            </div>

                            {/* Content Side - Scrollable */}
                            <div className="p-6 md:p-12 md:w-1/2 md:float-right">

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

                                {/* Music Videos Section */}
                                {selectedAlbum.mvs && selectedAlbum.mvs.length > 0 && (
                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Music Videos</h4>
                                        <div className="grid grid-cols-1 gap-4">
                                            {selectedAlbum.mvs.map((mv, i) => (
                                                <div key={i} className="relative aspect-video rounded-lg overflow-hidden bg-black/50 border border-white/10">
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={`https://www.youtube.com/embed/${mv.id}`}
                                                        title={mv.title}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        className="absolute inset-0"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Concept Art Section */}
                                {selectedAlbum.conceptArt && selectedAlbum.conceptArt.length > 0 && (
                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Concept Art</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {selectedAlbum.conceptArt.map((art, i) => (
                                                <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group cursor-pointer">
                                                    <Image
                                                        src={art}
                                                        alt={`Concept Art ${i + 1}`}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
}
