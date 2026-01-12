"use client";

import { useRef, useState, useEffect } from "react";

export function useAudioPlayer(tracks: { src: string }[]) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [volume, setVolume] = useState(0.15);

    /* 🔊 Keep DOM audio volume in sync */
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    /* ▶️ Play current track */
    const play = () => {
        if (!audioRef.current) return;
        audioRef.current.volume = volume;
        audioRef.current.play();
        setIsPlaying(true);
    };

    /* ⏸ Pause */
    const pause = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
    };

    /* 🔁 Toggle */
    const toggle = () => {
        isPlaying ? pause() : play();
    };

    /* ⏭ Next track */
    const next = () => {
        const nextIndex = (currentTrack + 1) % tracks.length;
        switchTrack(nextIndex);
    };

    /* 🎧 Switch track WITH optional autoplay */
    const switchTrack = (index: number, autoplay = true) => {
        if (!audioRef.current) return;

        audioRef.current.pause();
        setIsPlaying(false);
        setCurrentTrack(index);

        if (autoplay) {
            setTimeout(() => {
                play();
            }, 100);
        }
    };

    return {
        audioRef,
        isPlaying,
        currentTrack,
        volume,
        setVolume,
        play,
        pause,
        toggle,
        next,
        setCurrentTrack: switchTrack,
    };
}
