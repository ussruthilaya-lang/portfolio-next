"use client";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5"
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Identity */}
                <a
                    href="www.linkedin.com/in/sruthilaya-sundaram-306"
                    className="text-sm font-semibold tracking-wide text-white hover:text-emerald-400 transition-colors"
                >
                    Sruthilaya U.S
                </a>

                {/* Navigation */}
                <div className="flex items-center gap-8 text-sm text-white/60">
                    {["Work", "Journey", "Focus", "Connect"].map(
                        (item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative group hover:text-white transition-colors"
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ),
                    )}
                </div>
            </div>
        </motion.nav>
    );
}