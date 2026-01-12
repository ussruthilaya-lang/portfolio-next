"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function XPArc() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    const phases = [
        {
            level: "01",
            title: "Built an engineering base",
            desc: "Started with a computer science foundation. Learned to think in systems, trade-offs, and constraints before models or metrics.",
        },
        {
            level: "02",
            title: "Learned data through the business lens",
            desc: "Worked closely with datasets, insights, and dashboards. Learned how data decisions affect real teams, clients, and outcomes.",
        },
        {
            level: "03",
            title: "Moved closer to product and execution",
            desc: "Collaborated across clients, SMEs, and product teams. Worked on workflows, automation, and design thinking under real-world constraints.",
        },
        {
            level: "04",
            title: "Now building systems with intent",
            desc: "Back in graduate study to build end-to-end ML and AI systems. Focused on practical impact, modern architectures, and product-first engineering.",
        },
    ];

    return (
        <section
            id="journey"
            ref={ref}
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-4xl w-full">
                {/* Section Header - minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-3">
                        Journey
                    </h2>
                    <div className="w-16 h-0.5 bg-emerald-500/50" />
                </motion.div>

                {/* XP Phases - compressed progression */}
                <div className="space-y-12">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            className="group"
                        >
                            <div className="flex items-start gap-6">
                                {/* Level indicator */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 rounded-lg group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300">
                                        <span className="text-sm font-mono text-emerald-500">
                                            {phase.level}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-2">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-emerald-500 transition-colors">
                                        {phase.title}
                                    </h3>
                                    <p className="text-white/50 leading-relaxed max-w-2xl">
                                        {phase.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Connector line */}
                            {index < phases.length - 1 && (
                                <div className="ml-6 mt-6 mb-6 w-0.5 h-8 bg-gradient-to-b from-emerald-500/30 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Current State - power statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-lg"
                >
                    <p className="text-white/70 leading-relaxed">
                        Now I focus on systems that think, scale, and evolve
                        — building AI that doesn't just work, but works{" "}
                        <span className="text-emerald-500 font-medium">
                            intentionally
                        </span>
                        .
                    </p>
                </motion.div>
            </div>
        </section>
    );
}