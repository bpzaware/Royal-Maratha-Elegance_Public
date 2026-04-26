import { motion } from "framer-motion";
import mandalaImg from "@/assets/mandala.png";

export function MandalaRing({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="w-full h-full opacity-30 mix-blend-screen drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
      >
        <img src={mandalaImg} alt="Mandala decorative ring" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
}
