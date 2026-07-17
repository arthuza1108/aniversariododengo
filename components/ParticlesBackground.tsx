"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface ParticlesBackgroundProps {
  variant?: "light" | "dark";
  density?: "low" | "medium";
}

// Deterministic pseudo-random so server/client render match
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function ParticlesBackground({
  variant = "light",
  density = "low",
}: ParticlesBackgroundProps) {
  const starCount = density === "low" ? 18 : 30;
  const heartCount = density === "low" ? 5 : 9;

  const stars = useMemo(
    () =>
      Array.from({ length: starCount }, (_, i) => ({
        id: i,
        left: seededRandom(i * 3.1) * 100,
        top: seededRandom(i * 7.7) * 100,
        size: 1 + seededRandom(i * 2.3) * 2,
        delay: seededRandom(i * 5.5) * 4,
        duration: 2.5 + seededRandom(i * 1.9) * 2.5,
      })),
    [starCount]
  );

  const hearts = useMemo(
    () =>
      Array.from({ length: heartCount }, (_, i) => ({
        id: i,
        left: seededRandom(i * 11.3) * 100,
        delay: seededRandom(i * 4.1) * 10,
        duration: 14 + seededRandom(i * 6.7) * 10,
        size: 10 + seededRandom(i * 3.3) * 14,
      })),
    [heartCount]
  );

  const starColor = variant === "light" ? "#D4AF7A" : "#F7E7C1";
  const heartColor = variant === "light" ? "#F7C9DC" : "#F0A8C4";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <div
          key={`star-${s.id}`}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            backgroundColor: starColor,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: `0 0 6px ${starColor}`,
          }}
        />
      ))}
      {hearts.map((h) => (
        <motion.span
          key={`heart-${h.id}`}
          className="absolute select-none"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            bottom: -40,
            color: heartColor,
            opacity: 0.55,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-115vh", opacity: [0, 0.6, 0.6, 0] }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤
        </motion.span>
      ))}
    </div>
  );
}
