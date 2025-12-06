"use client";

import { motion } from "framer-motion";

interface VideoPlayerProps {
    videoId: string;
    title?: string;
}

export function VideoPlayer({ videoId, title }: VideoPlayerProps) {
    return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
                title={title || "YouTube video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            />
        </div>
    );
}

export function VideoSection() {
    return (
        <section id="visual" className="py-24 px-6 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight text-center md:text-left"
                >
                    VISUAL
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Latest MV */}
                    <VideoPlayer videoId="Z_tCUd2_Zj0" title="Daybreak Signal" />

                    <div className="mt-8 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Daybreak Signal</h3>
                        <p className="text-gray-400 max-w-2xl">
                            最新のミュージックビデオをご覧ください。
                        </p>
                        <a
                            href="https://www.youtube.com/@Obsidian_aimusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-obsidian-accent hover:text-white transition-colors duration-300"
                        >
                            View Channel
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
