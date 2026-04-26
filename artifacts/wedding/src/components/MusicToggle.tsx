import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/85 backdrop-blur shadow-[0_8px_24px_-8px_rgba(94,15,41,0.35)] border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
      aria-label="Toggle background music"
    >
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </motion.button>
  );
}
