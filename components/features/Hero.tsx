"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

export function Hero() {
    const handlePlay = () => {
        const event = new CustomEvent('toggle-music');
        window.dispatchEvent(event);
    };

    return (
        <section id="top" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#121212]">
            {/* Background Image - Fades in faster */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.0 }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/hero-bg-new.webp"
                    alt="Obsidian Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/40 to-[#0a0a0a]" />
            </motion.div>



            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center">
                {/* Flash - Synced with lightning start */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.8, 0] }}
                    transition={{ delay: 0.5, duration: 0.2, times: [0, 0.1, 1] }}
                    className="fixed inset-0 z-50 pointer-events-none bg-white mix-blend-overlay"
                />

                <div className="relative inline-block w-full max-w-6xl">
                    {/* Main Title - Clean reveal with lightning */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter text-white relative z-10"
                    >
                        Obsidian
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mt-4 text-xl md:text-2xl text-gray-300 tracking-widest font-light"
                >
                    AI MUSICIAN
                </motion.p>

                {/* Listen Now Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    onClick={handlePlay}
                    className="mt-12 group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-obsidian-accent/50"
                >
                    <div className="absolute inset-0 rounded-full bg-obsidian-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center gap-3">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
                            <Play size={20} fill="currentColor" className="ml-1" />
                            <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-20" />
                        </div>
                        <span className="text-lg font-medium tracking-wider text-white">LISTEN NOW</span>
                    </div>
                </motion.button>
            </div>

            {/* Full Screen Lightning Container - Independent of content width */}
            <div className="absolute inset-0 pointer-events-none z-50 overflow-visible mix-blend-screen">
                <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <filter id="sharp-glow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feGaussianBlur stdDeviation="2" result="coloredBlur2" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="coloredBlur2" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Bolt 1: Top Stream (Purple) */}
                    <motion.path
                        d="M 1300 80 L 900 70 L 500 90 L 100 75 L -300 80"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        filter="url(#sharp-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            pathLength: { duration: 0.4, ease: "linear", delay: 0.5 },
                            opacity: { duration: 0.4, times: [0, 0.5, 1], delay: 0.5 }
                        }}
                    />

                    {/* Bolt 2: Main Core (White + Purple Glow) */}
                    <motion.path
                        d="M 1300 100 L 900 90 L 500 110 L 100 95 L -300 100"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        filter="url(#sharp-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            pathLength: { duration: 0.4, ease: "linear", delay: 0.55 }, // Slight delay for impact
                            opacity: { duration: 0.6, times: [0, 0.1, 0.8, 1], delay: 0.55 }
                        }}
                    />

                    {/* Bolt 3: Bottom Stream (Purple) */}
                    <motion.path
                        d="M 1300 120 L 900 110 L 500 130 L 100 115 L -300 120"
                        fill="none"
                        stroke="#d946ef"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        filter="url(#sharp-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            pathLength: { duration: 0.4, ease: "linear", delay: 0.6 }, // More delay
                            opacity: { duration: 0.4, times: [0, 0.5, 1], delay: 0.6 }
                        }}
                    />
                </svg>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
            </motion.div>
        </section>
    );
}
