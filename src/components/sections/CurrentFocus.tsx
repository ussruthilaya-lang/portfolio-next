"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FocusingMusic from "./FocusingMusic";


export default function CurrentFocus() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    const focuses = [
        {
            area: "Algorithms & System Foundations",
            detail:
                "Strengthening core algorithmic thinking and understanding how classical choices influence real ML, data, and ranking systems.",
        },
        {
            area: "MLOps & Production ML Systems",
            detail:
                "Learning how models are trained, deployed, monitored, and iterated in real-world environments under operational constraints.",
        },
        {
            area: "LLMs & Agentic Frameworks (Exploratory)",
            detail:
                "Experimenting with open-source LLMs and agent-style workflows to understand where they help—and where they break.",
        },
        {
            area: "Product & Architectural Thinking",
            detail:
                "Designing systems with clear boundaries, trade-offs, and user impact in mind, not just technical correctness.",
        },
    ];

    return (
        <section
            id="focus"
            ref={ref}
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-4xl w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs text-emerald-500 tracking-wider uppercase mb-2">
                        Current Focus
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Currently Locked In On
                    </h2>
                    <div className="w-16 h-0.5 bg-emerald-500/50" />
                </motion.div>

                {/* Focus Areas */}
                <div className="space-y-8">
                    {focuses.map((focus, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-2 w-2 h-2 bg-emerald-500 rounded-full" />
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-emerald-500 transition-colors">
                                        {focus.area}
                                    </h3>
                                    <p className="text-white/50 leading-relaxed">
                                        {focus.detail}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mindset Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-transparent border-l-2 border-emerald-500/50 rounded-r-lg"
                >
                    <p className="text-white/70 text-lg leading-relaxed">
                        Not chasing trends. Building systems that compound.
                        Focused on{" "}
                        <span className="text-emerald-500 font-medium">
                            long-term impact
                        </span>
                        , not short-term noise.
                    </p>
                </motion.div>

                {/* 🎧 Focus Music (Spotify Embed) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-16"
                >
                    <FocusingMusic />
                </motion.div>

                {/* Core Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mt-16"
                >
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-6">
                        Current Core Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Python",
                            "PyTorch",
                            "Embeddings",
                            "FastAPI",
                            "PostgreSQL",
                            "Docker",
                            "AWS",
                            "React",
                            "TypeScript",
                        ].map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.9 + index * 0.03,
                                }}
                                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-sm text-white/60 hover:border-emerald-500/30 hover:text-emerald-500 transition-all duration-300"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
