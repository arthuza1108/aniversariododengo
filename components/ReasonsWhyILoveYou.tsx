"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const reasons = [
  "Seu sorriso",
  "Seu carinho",
  "Seu abraço",
  "Sua inteligência",
  "Seu jeito",
  "Sua companhia",
  "Sua bondade",
  "A paz que você me transmite",
  "Porque você me faz querer ser uma pessoa melhor",
  "Porque até os dias comuns ficam especiais quando estou ao seu lado",
  "Porque você é simplesmente você",
];

function FlipCard({ reason, index }: { reason: string; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.07 }}
      className="h-40 [perspective:1200px] sm:h-48"
    >
      <motion.button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={flipped ? reason : "Vire o cartão para ver o motivo"}
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/70 bg-gradient-to-br from-sky-mist to-blush shadow-soft [backface-visibility:hidden]"
        >
          <span className="text-4xl text-blush-deep sm:text-5xl">❤</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl border border-gold-soft bg-gradient-to-br from-cream to-gold-soft/40 p-4 text-center shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="font-body text-sm font-medium leading-snug text-ink sm:text-base">
            {reason}
          </p>
        </div>
      </motion.button>
    </motion.div>
  );
}

export default function ReasonsWhyILoveYou() {
  return (
    <section id="motivos" className="relative bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="font-script text-4xl text-ink sm:text-6xl"
        >
          Motivos pelos quais eu te amo
        </motion.h2>
        <p className="mt-3 font-body text-sm font-light text-ink/60 sm:text-base">
          toque em cada coração
        </p>
        <div className="gold-divider mx-auto mt-4 w-24" />
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4">
        {reasons.map((reason, idx) => (
          <FlipCard key={reason} reason={reason} index={idx} />
        ))}
      </div>
    </section>
  );
}
