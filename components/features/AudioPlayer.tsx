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
            console.log('Toggle music event received, current isVisible:', isVisible);
            setIsVisible(prev => {
                console.log('Toggling from', prev, 'to', !prev);
                return !prev;
            });
        };

        window.addEventListener('toggle-music', handleToggleMusic);

        return () => {
            window.removeEventListener('toggle-music', handleToggleMusic);
        };
    }, []);

    if (!mounted || playlist.length === 0) return null;

    const currentTrack = playlist[currentTrackIndex];

    const handleClose = () => {
        console.log('Close button clicked!');
        setIsVisible(false);
    };

    const handleNext = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    };

    if (!isVisible) return null;

    const forceClose = (e?: React.MouseEvent | React.TouchEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        console.log('FORCE CLOSE TRIGGERED');
        setIsVisible(false);
    };

    return (
        <div id="floating-player-container" className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[200] flex flex-col items-end gap-2 animate-in slide-in-from-bottom-8 duration-500 pointer-events-none">
            {/* Close Button - Attached to player */}
            <button
                onClick={forceClose}
                onTouchEnd={forceClose}
                className="p-2 bg-black/80 hover:bg-purple-600 text-white rounded-full border border-white/20 transition-all shadow-lg cursor-pointer pointer-events-auto backdrop-blur-sm"
                aria-label="Close player"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Player */}
            <div className="relative w-[280px] md:w-[320px] pointer-events-auto">
                <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
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
            </div>
        </div>
    );
}
