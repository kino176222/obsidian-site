"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
    { label: "TOP", href: "#top" },
    { label: "STORY", href: "#story" },
    { label: "DISCOGRAPHY", href: "#discography" },
    { label: "VISUAL", href: "#visual" },
    { label: "CONTACT", href: "#contact" },
];

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("top");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = navItems.map(item => item.href.slice(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
                ? "bg-black/80 backdrop-blur-md border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#top"
                    onClick={(e) => handleClick(e, "#top")}
                    className="text-2xl font-bold tracking-tighter text-white hover:text-purple-400 transition-colors"
                >
                    Obsidian
                </a>

                {/* Menu Items */}
                <ul className="flex gap-8 items-center">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={`text-sm font-medium tracking-wider transition-all hover:text-purple-400 ${activeSection === item.href.slice(1)
                                    ? "text-purple-400"
                                    : "text-gray-300"
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}
