"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Github } from "lucide-react";

export default function FeaturedProject() {
    const ref = useRef(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    const [isExpanded, setIsExpanded] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const toggleVideo = () => {
        if (!videoRef.current) return;

        if (isPaused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }

        setIsPaused(!isPaused);
    };

    return (
        <section
            id="work"
            ref={ref}
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-5xl w-full">

                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <p className="text-xs text-emerald-500 tracking-wider uppercase mb-2">
                        Featured Work
                    </p>
                    <div className="w-12 h-0.5 bg-emerald-500/50" />
                </motion.div>

                {/* Project Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
                >
                    {/* Video */}
                    <div
                        className="relative h-80 bg-gradient-to-br from-emerald-950/50 to-black overflow-hidden group cursor-pointer"
                        onClick={() => {
                            if (!videoRef.current) return;

                            if (videoRef.current.paused) {
                                videoRef.current.play();
                                setIsPaused(false);
                            } else {
                                videoRef.current.pause();
                                setIsPaused(true);
                            }
                        }}
                    >
                        {/* Ambient glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />

                        {/* Video */}
                        <video
                            ref={videoRef}
                            src="/videos/ProjectDemo.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-hidden="true"
                            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                        />

                        {/* Hover controls (only when paused) */}
                        {isPaused && (
                            <div className="absolute inset-0 flex items-center justify-center gap-6 pointer-events-none">
                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    {/* Resume */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (!videoRef.current) return;
                                            videoRef.current.play();
                                            setIsPaused(false);
                                        }}
                                        className="
                        pointer-events-auto
                        bg-black/60 backdrop-blur-md
                        rounded-full p-3
                        text-white/80 hover:text-white
                        transition
                        text-3xl
                    "
                                        aria-label="Resume video"
                                    >
                                        ▶
                                    </button>

                                    {/* Replay */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (!videoRef.current) return;
                                            videoRef.current.currentTime = 0;
                                            videoRef.current.play();
                                            setIsPaused(false);
                                        }}
                                        className="
                        pointer-events-auto
                        bg-black/60 backdrop-blur-md
                        rounded-full p-3
                        text-white/80 hover:text-white
                        transition
                        text-2xl
                    "
                                        aria-label="Replay video"
                                    >
                                        ↺
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Reputation & Sentiment Intelligence Platform
                        </h3>

                        <p className="text-xl text-emerald-500 mb-6 font-medium">
                            Turned unstructured public feedback into actionable product signals
                        </p>

                        {/* Why This Mattered */}
                        <div className="mb-8">
                            <p className="text-sm text-white/40 uppercase tracking-wider mb-2">
                                Why this mattered
                            </p>
                            <p className="text-white/70 leading-relaxed max-w-2xl">
                                Teams often react to loud feedback instead of meaningful signals.
                                This system ingests noisy reputation data and surfaces structured
                                insights that product and business teams can actually act on.
                            </p>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {[
                                "Python",
                                "NLP",
                                "Embeddings",
                                "Clustering",
                                "PostgreSQL",
                                "Streamlit",
                            ].map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Expandable Architecture */}
                        <div>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="group flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors mb-4"
                            >
                                <span className="font-medium">
                                    {isExpanded ? "Hide" : "View"} Architecture & Decisions
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: isExpanded ? "auto" : 0,
                                    opacity: isExpanded ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-4">
                                    {/* Content unchanged */}
                                </div>
                            </motion.div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                            <a
                                href="https://github.com/ussruthilaya-lang/reputation-ml-intel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-white/50 hover:text-emerald-500 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                <span>View Code</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
