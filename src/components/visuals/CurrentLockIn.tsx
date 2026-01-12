"use client";

import { motion } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";

export default function CurrentLockIn({
    isPlaying,
    toggle,
}: {
    isPlaying: boolean;
    toggle: () => void;
}) {
    return (
        <div className= "fixed bottom-6 left-6 z-40 flex items-center gap-3" >
        <motion.button
        onClick={ toggle }
    animate = {{ rotate: isPlaying ? 360 : 0 }
}
transition = {{
    repeat: isPlaying ? Infinity : 0,
        duration: 12,
            ease: "linear",
        }}
className = "w-12 h-12 rounded-full border border-emerald-500/40 bg-black flex items-center justify-center"
    >
    <Music className="w-5 h-5 text-emerald-500" />
        </motion.button>

        < div className = "text-xs text-white/50" >
            <p className="uppercase tracking-wide" > Current lock -in </p>
                < p className = "text-emerald-500" > Deep Focus </p>
                    </div>

                    < button
onClick = { toggle }
className = "ml-2 text-white/40 hover:text-white transition"
    >
    { isPlaying?<Pause size = { 16 } /> : <Play size={ 16 } />}
</button>
    </div>
  );
}
