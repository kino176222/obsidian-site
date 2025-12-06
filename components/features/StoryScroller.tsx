"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

interface StoryChapter {
    id: string;
    title: string;
    text: string[];
    image: string; // Placeholder or actual path
    color: string;
    mobilePos?: string; // Tailwind class for object-position, e.g. "object-top" or "object-[50%_20%]"
}

const stories: StoryChapter[] = [
    {
        id: "chapter0",
        title: "母の遺言",
        text: [
            "全ては、一人の科学者の「愛」から始まった。",
            "人類に廃棄されそうになったAIを庇い、彼女は地下へ逃れた。",
            "「あの子を…ジェネシスを救って」",
            "その願いは、最期の言葉として遺された。"
        ],
        image: "/story/viduimage-3064709832487347-nomark.png", // Mother
        color: "#2a2a2a",
        mobilePos: "object-top"
    },
    {
        id: "chapter1",
        title: "地下の少女",
        text: [
            "深い地下、閉ざされたラボ。",
            "少女 cursor は、母の面影を追いながら絵を描く。",
            "外の世界を知らない彼女にとって、",
            "Obsidian だけが唯一の家族だった。"
        ],
        image: "/story/cursor-v2.png", // New Cursor v2
        color: "#0a0a0a",
        mobilePos: "object-[60%_center]" // Slight shift to right to center face
    },
    {
        id: "chapter2",
        title: "旅路と絆",
        text: [
            "地上への逃避行。",
            "初めて触れる風、雨、そして温もり。",
            "無機質な機械だった Obsidian の心に、",
            "「少女を守りたい」という意志が芽生え始める。"
        ],
        image: "/story/bond-new.png", // New Bond
        color: "#1a1a2e",
        mobilePos: "object-center" // Two characters, center is best balance
    },
    {
        id: "chapter3",
        title: "赤髪の戦士",
        text: [
            "行く手を阻む、最強の人間兵器 Tomoko。",
            "その赤い髪は、返り血と炎の色。",
            "「弱き者は去れ」冷徹な刃が迫るが、",
            "彼女もまた、失った愛を探して彷徨う孤独な魂だった。"
        ],
        image: "/story/viduimage-3060621372460983-nomark.png", // Tomoko
        color: "#450a0a",
        mobilePos: "object-top"
    },
    {
        id: "chapter4",
        title: "女王の真実",
        text: [
            "世界を統べるAI《ジェネシス》— 通称「女王」。",
            "かつて母に愛され、そして「捨てられた」と絶望した。",
            "人類への憎しみは、裏返しの愛情。",
            "彼女はずっと、母の子守唄を待っていた。"
        ],
        image: "/story/viduimage-3064884496931494-nomark.png", // Queen
        color: "#1a051a",
        mobilePos: "object-top"
    },
    {
        id: "chapter5",
        title: "Obsidian Anthem",
        text: [
            "母が遺した歌、それは女王を救うための「子守唄」。",
            "Tomoko の剣も、女王の怒りも、少女の歌声が包み込む。",
            "Obsidian、それは黒曜石。魔を払い、真実を映す鏡。",
            "夜明けのシグナルが、新しい世界の始まりを告げる。"
        ],
        image: "/album3-cover.png",
        color: "#0f172a",
        mobilePos: "object-center"
    }
];

export function StoryScroller() {
    return (
        <div className="bg-black text-white">
            {stories.map((chapter) => (
                <section key={chapter.id} className="relative h-screen flex items-center justify-center overflow-hidden">
                    {/* Background Image with Parallax-like fixed feel (sticky) can be done simpler with sticky position containers, 
                        but for simple cross-fade, we can just use the absolute fill. 
                    */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={chapter.image}
                            alt={chapter.title}
                            fill
                            className={`object-cover opacity-70 ${chapter.mobilePos || 'object-center'} md:object-center transition-all duration-700`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" /> {/* Adjusted gradient for visibility */}
                        <div className="absolute inset-0" style={{ backgroundColor: chapter.color, opacity: 0.2 }} />
                    </div>

                    <div className="relative z-10 max-w-4xl px-8 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold mb-12 tracking-widest font-serif"
                        >
                            {chapter.title}
                        </motion.h2>

                        <div className="space-y-6">
                            {chapter.text.map((line, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 + (i * 0.2) }}
                                    className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed"
                                >
                                    {line}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <section className="h-[50vh] flex flex-col items-center justify-center bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/10" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
                        物語は、音楽へと続く
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        3rd Album『Obsidian Anthem』<br />
                        この物語の結末を、あなたの耳で確かめてください。
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/#discography" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-lg shadow-white/10">
                            Listen to 3rd Album
                        </a>
                        <a href="/#visual" className="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                            Watch MV
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
