"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

interface EnvelopeIntroProps {
  onOpen: () => void;
  isOpening: boolean;
}

export default function EnvelopeIntro({ onOpen, isOpening }: EnvelopeIntroProps) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-romantic-gradient overflow-hidden px-6">
      <ParticlesBackground variant="light" density="low" />

      <motion.p
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="mb-10 max-w-md text-center font-body text-base font-light tracking-wide text-ink/80 sm:text-lg"
      >
        Você recebeu uma carta de alguém que te ama muito{" "}
        <span className="text-blush-deep">❤️</span>
      </motion.p>

      <motion.button
        type="button"
        onClick={onOpen}
        disabled={isOpening}
        aria-label="Abrir a carta"
        className="group relative"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: isOpening ? 0 : [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.6 },
          scale: { duration: 1, delay: 0.6 },
          y: { duration: 3.4, repeat: isOpening ? 0 : Infinity, ease: "easeInOut" },
        }}
      >
        {/* Envelope body */}
        <div className="relative h-[190px] w-[270px] sm:h-[220px] sm:w-[320px]">
          <div className="absolute inset-0 rounded-md bg-gradient-to-b from-cream to-blush shadow-soft" />

          {/* Side flaps (static) */}
          <div
            className="absolute inset-0 rounded-md"
            style={{
              background:
                "linear-gradient(135deg, transparent 49.5%, rgba(212,175,122,0.15) 50%, transparent 50.5%), linear-gradient(-135deg, transparent 49.5%, rgba(212,175,122,0.15) 50%, transparent 50.5%)",
            }}
          />

          {/* Peeking letter */}
          <motion.div
            className="absolute left-1/2 top-0 h-[75%] w-[86%] -translate-x-1/2 rounded-sm bg-cream shadow-inner"
            style={{ transformOrigin: "bottom center" }}
            animate={
              isOpening
                ? { y: "-72%", opacity: 1 }
                : { y: "6%", opacity: 1 }
            }
            transition={{ duration: 1.6, ease: "easeInOut", delay: isOpening ? 0.5 : 0 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 px-4 pt-6 opacity-70">
              <div className="h-[2px] w-2/3 rounded bg-sky-soft" />
              <div className="h-[2px] w-1/2 rounded bg-blush-deep" />
              <div className="h-[2px] w-3/5 rounded bg-sky-soft" />
            </div>
          </motion.div>

          {/* Top flap (triangle) */}
          <motion.div
            className="absolute left-0 top-0 h-[95px] w-full sm:h-[110px]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: "linear-gradient(160deg, #FBE3EC 0%, #F7C9DC 100%)",
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateX: isOpening ? 180 : 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />

          {/* Heart seal */}
          <motion.div
            className="absolute left-1/2 top-[60px] flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full shadow-gold sm:top-[70px]"
            style={{
              background: "radial-gradient(circle at 35% 30%, #E6C48F, #C99A5C)",
            }}
            animate={{
              opacity: isOpening ? 0 : 1,
              scale: isOpening ? 0.4 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lg text-cream">❤</span>
          </motion.div>
        </div>

        <motion.p
          className="mt-8 font-body text-sm font-medium uppercase tracking-[0.25em] text-gold"
          animate={{ opacity: isOpening ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          Toque para abrir
        </motion.p>
      </motion.button>
    </div>
  );
}
