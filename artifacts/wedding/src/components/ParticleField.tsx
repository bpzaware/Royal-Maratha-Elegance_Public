import { useEffect, useRef } from "react";

/**
 * Soft drifting petals — subtle saffron + maroon flecks
 * that float gently upward across the page background.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Petal = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      rot: number;
      vr: number;
      hue: number;
      a: number;
    };
    let petals: Petal[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      petals = [];
      const count = Math.min(Math.floor(window.innerWidth / 28), 38);
      for (let i = 0; i < count; i++) {
        petals.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 5 + 2.5,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -Math.random() * 0.35 - 0.08,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.012,
          hue: Math.random() < 0.55 ? 22 : Math.random() < 0.5 ? 343 : 44,
          a: Math.random() * 0.32 + 0.18,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of petals) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        // teardrop petal
        const sat = p.hue === 44 ? 67 : 80;
        const light = p.hue === 343 ? 33 : 50;
        ctx.fillStyle = `hsla(${p.hue}, ${sat}%, ${light}%, ${p.a})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;

        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ opacity: 0.85 }}
    />
  );
}
