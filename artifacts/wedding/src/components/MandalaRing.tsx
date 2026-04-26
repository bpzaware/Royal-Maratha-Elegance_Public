import { motion } from "framer-motion";

/**
 * Decorative concentric mandala rendered as inline SVG so it
 * adapts perfectly to the light theme.
 */
export function MandalaRing({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          className="text-primary/25"
        >
          <circle cx="200" cy="200" r="190" />
          <circle cx="200" cy="200" r="160" />
          <circle cx="200" cy="200" r="120" />
          <circle cx="200" cy="200" r="80" />
          <circle cx="200" cy="200" r="40" />
          <g id="petals">
            <path d="M200 10 C 220 80 220 120 200 200 C 180 120 180 80 200 10 Z" />
            <path d="M200 60 C 215 110 215 140 200 200 C 185 140 185 110 200 60 Z" />
          </g>
          {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <use key={deg} href="#petals" transform={`rotate(${deg} 200 200)`} />
          ))}
          <g id="diamonds">
            <path d="M200 30 L 210 50 L 200 70 L 190 50 Z" />
            <path d="M200 130 L 208 145 L 200 160 L 192 145 Z" />
          </g>
          {[45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <use
              key={deg}
              href="#diamonds"
              transform={`rotate(${deg} 200 200)`}
            />
          ))}
        </g>
        <g className="text-secondary/20" fill="currentColor">
          <circle cx="200" cy="200" r="5" />
        </g>
      </svg>
    </motion.div>
  );
}
