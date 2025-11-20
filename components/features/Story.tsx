"use client";

import { motion } from "framer-motion";

export function Story() {
    return (
        <section id="story" className="py-32 px-6 bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        STORY
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-12" />

                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            漆黒の石（Obsidian）のように、内に秘めた鋭さと輝きを音楽に。
                        </p>
                        <p>
                            AIと共に、心の奥底にある景色を切り出し、歌として届けています。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
