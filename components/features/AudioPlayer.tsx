"use client";

import { useState, useEffect } from "react";
import { albums } from '@/lib/data';

// Create a playlist from all albums' MVs
const playlist = albums.flatMap(album =>
    album.mvs ? album.mvs.map(mv => ({
        ...mv,
        albumTitle: album.title,
        cover: album.cover
    })) : []
);

export function AudioPlayer() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Hydration fix & Event Listener
    useEffect(() => {
        setMounted(true);

        const handleToggleMusic = () => {
            setIsVisible(prev => !prev);
        };

        window.addEventListener('toggle-music', handleToggleMusic);

        return () => {
            window.removeEventListener('toggle-music', handleToggleMusic);
        };
    }, []);

    if (!mounted || playlist.length === 0) return null;

    const currentTrack = playlist[currentTrackIndex];

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleNext = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    };

    return (
        <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[200] w-[280px] md:w-[320px] bg-black rounded-xl overflow-hidden shadow-2xl transition-all duration-500 transform border border-white/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
            {/* Close Button */}
            <button
                onClick={handleClose}
                className="absolute top-2 right-2 z-20 p-2 bg-black/80 rounded-full text-white hover:text-white hover:bg-black transition-all backdrop-blur-sm shadow-lg"
                aria-label="Close player"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="relative w-full aspect-video bg-black">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${currentTrack.id}?autoplay=0&controls=1&rel=0`}
                    title={currentTrack.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                />
            </div>
        </div>
    );
}
