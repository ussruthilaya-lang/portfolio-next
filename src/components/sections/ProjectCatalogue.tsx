"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
    title: string;
    impact: string;
    tags: string[];
    github?: string;
    live?: string;
}

export default function ProjectCatalogue() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });
    const [filter, setFilter] = useState<string>("All");

    const projects: Project[] = [
        {
            title: "AlgoLab — Sorting Systems for ML & Data",
            impact:
                "Designed to help learners and early engineers understand how classical sorting choices surface inside real ML, data, and ranking systems — not just how algorithms work, but why they matter in production contexts.",
            tags: [
                "Algorithms",
                "ML Systems",
                "Data Engineering",
                "React",
                "TypeScript",
            ],
            github: "https://github.com",
        },
    ];

    const allTags = Array.from(
        new Set(projects.flatMap((p) => p.tags)),
    );
    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((p) => p.tags.includes(filter));

    return (
        <section ref={ref} className="min-h-screen px-6 py-20">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-xs text-emerald-500 tracking-wider uppercase mb-2">
                        Other Work
                    </p>
                    <div className="w-12 h-0.5 bg-emerald-500/50" />
                </motion.div>

                {/* Filter Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    <button
                        onClick={() => setFilter("All")}
                        className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${filter === "All"
                            ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-500"
                            : "bg-white/5 border border-white/10 text-white/50 hover:border-white/30"
                            }`}
                    >
                        All
                    </button>
                    {allTags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => setFilter(tag)}
                            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${filter === tag
                                ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-500"
                                : "bg-white/5 border border-white/10 text-white/50 hover:border-white/30"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </motion.div>

                {/* Project List - Minimal rows */}
                <div className="space-y-4">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.4,
                                delay: 0.2 + index * 0.05,
                            }}
                            className="group bg-white/5 border border-white/10 hover:border-emerald-500/30 rounded-lg p-6 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                {/* Left: Title & Impact */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-500 transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-white/50">
                                        {project.impact}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/40"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Links */}
                                <div className="flex items-center gap-3 flex-shrink-0">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 rounded-lg transition-all duration-300 group/icon"
                                        >
                                            <Github className="w-4 h-4 text-white/40 group-hover/icon:text-emerald-500 transition-colors" />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 rounded-lg transition-all duration-300 group/icon"
                                        >
                                            <ExternalLink className="w-4 h-4 text-white/40 group-hover/icon:text-emerald-500 transition-colors" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center text-sm text-white/30 mt-12"
                >
                    More work will be listed as completed.
                </motion.p>
            </div>
        </section>
    );
}