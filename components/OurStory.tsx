"use client";

import { motion } from "framer-motion";

function BusIllustration() {
  return (
    <svg
      viewBox="0 0 220 140"
      className="h-32 w-auto sm:h-40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="35" width="180" height="70" rx="14" fill="#CFE8FA" />
      <rect x="10" y="35" width="180" height="70" rx="14" stroke="#D4AF7A" strokeWidth="2" />
      <rect x="28" y="50" width="34" height="28" rx="6" fill="#FFFBF7" />
      <rect x="70" y="50" width="34" height="28" rx="6" fill="#FFFBF7" />
      <rect x="112" y="50" width="34" height="28" rx="6" fill="#FFFBF7" />
      <rect x="154" y="50" width="20" height="28" rx="6" fill="#FBE3EC" />
      <circle cx="55" cy="112" r="14" fill="#3B3A45" />
      <circle cx="55" cy="112" r="6" fill="#D4AF7A" />
      <circle cx="150" cy="112" r="14" fill="#3B3A45" />
      <circle cx="150" cy="112" r="6" fill="#D4AF7A" />
      <path d="M10 62 L-6 62 L-6 90 L10 90" fill="#CFE8FA" stroke="#D4AF7A" strokeWidth="2" />
      <text x="100" y="128" textAnchor="middle" fontSize="10" fill="#3B3A45" opacity="0.55">
        o começo de tudo
      </text>
    </svg>
  );
}

const chapters = [
  {
    title: "O dia em que tudo começou",
    body: [
      "Nos conhecemos da forma mais inesperada possível.",
      "O ônibus estava completamente lotado. Os únicos lugares disponíveis eram... no chão.",
      "E foi justamente ali, sentados no chão daquele ônibus, que o destino resolveu cruzar nossas vidas.",
      "Naquele momento nenhum de nós imaginava que aquele encontro mudaria completamente nossas histórias.",
    ],
    visual: "bus",
  },
  {
    title: "Nossa primeira viagem",
    body: [
      "Nossa primeira viagem sozinhos foi para Garanhuns, durante o Natal Luz de 2024.",
      "Foi um momento inesquecível, cheio de risadas, descobertas e lembranças que levaremos para sempre.",
      "Ali tivemos a certeza de que qualquer lugar se torna especial quando estamos juntos.",
    ],
    visual: "photo",
  },
];

export default function OurStory() {
  return (
    <section id="historia" className="relative bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="font-script text-4xl text-ink sm:text-6xl"
        >
          Nossa história
        </motion.h2>
        <div className="gold-divider mx-auto mt-4 w-24" />
      </div>

      <div className="relative mx-auto mt-16 flex max-w-4xl flex-col gap-20">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-sky-soft via-blush-deep to-gold-soft sm:block" />

        {chapters.map((chapter, idx) => (
          <motion.div
            key={chapter.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={`relative flex flex-col items-center gap-6 sm:flex-row ${
              idx % 2 === 1 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 rounded-2xl bg-white/70 p-8 shadow-soft backdrop-blur-sm">
              <h3 className="font-script text-3xl text-blush-deep sm:text-4xl">
                {chapter.title}
              </h3>
              <div className="mt-4 space-y-3 font-body text-sm font-light leading-relaxed text-ink/80 sm:text-base">
                {chapter.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
              {chapter.visual === "bus" ? (
                <BusIllustration />
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {["garanhuns-1.jpg", "garanhuns-2.jpg"].map((src) => (
                    <div
                      key={src}
                      className="h-28 w-28 overflow-hidden rounded-xl border-2 border-white shadow-soft sm:h-36 sm:w-36"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/${src}`}
                        alt="Viagem a Garanhuns"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
