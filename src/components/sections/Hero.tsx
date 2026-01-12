"use client";

import { motion } from "framer-motion";
export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative">
            <div className="max-w-4xl w-full">

                {/* Status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="inline-flex items-center gap-2 mb-12"
                >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs text-white/40 tracking-wider uppercase">
                        OPEN TO PRODUCT-DRIVEN AI & DATA ROLES
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                >
                    <span className="text-white">Turning </span>
                    <span className="text-emerald-500">ideas</span>
                    <span className="text-white"> into </span>
                    <span className="text-emerald-500">advantage</span>
                    <span className="text-white">.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl text-white/60 mb-6 max-w-2xl leading-relaxed"
                >
                    I build production-ready AI systems — from data and models to deployment.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <a
                        href="#work"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-500 rounded-lg transition-all duration-300"
                    >
                        <span className="text-sm font-medium tracking-wide">
                            View Work
                        </span>
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-1 bg-emerald-500/60 rounded-full"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
