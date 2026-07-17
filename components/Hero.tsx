"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-romantic-gradient px-6 pt-24 pb-16"
    >
      <ParticlesBackground variant="light" density="medium" />

      <motion.div style={{ y: textY, opacity }} className="z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-script text-5xl leading-tight text-ink text-shadow-soft sm:text-7xl"
        >
          Feliz Aniversário,
          <br />
          Ellen Mayanne <span className="text-blush-deep">❤️</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mx-auto mt-6 max-w-lg font-body text-base font-light leading-relaxed text-ink/70 sm:text-lg"
        >
          Para a minha Dengosinha... para a minha Perfeitinha de Química...
          <br />
          Este é apenas um pequeno presente para lembrar o quanto você é
          especial para mim.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 mt-12 w-full max-w-md sm:max-w-lg"
      >
        <div className="overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-soft">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/casal-hero.jpg"
            alt="Arthur e Ellen Mayanne"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-soft via-transparent to-blush-deep opacity-60 blur-2xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-1 text-ink/50"
      >
        <span className="font-body text-xs uppercase tracking-[0.3em]">
          role para ver
        </span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  );
}
