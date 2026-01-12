"use client";

export default function FocusMusic() {
    return (
        <div className="max-w-xl">
            <p className="text-xs text-white/40 tracking-wide uppercase mb-4">
                What I listen to while building
            </p>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/7nSR6aUq46L1nQ4wq4AN0F?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />

            </div>

            <p className="mt-3 text-xs text-white/30">
                Requires Spotify login to play
            </p>
        </div>
    );
}
