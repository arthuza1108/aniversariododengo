"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  src: `/images/galeria-${i + 1}.jpg`,
  alt: `Momento ${i + 1} de Arthur e Ellen`,
}));

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="relative bg-romantic-gradient px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="font-script text-4xl text-ink sm:text-6xl"
        >
          Nossos momentos
        </motion.h2>
        <div className="gold-divider mx-auto mt-4 w-24" />
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5">
        {photos.map((photo, idx) => (
          <motion.button
            type="button"
            key={photo.id}
            onClick={() => setSelected(idx)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (idx % 4) * 0.08 }}
            whileHover={{ scale: 1.04 }}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-white/60 shadow-soft"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.img
              key={selected}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Fechar"
              className="absolute right-6 top-6 text-3xl font-light text-cream/90 transition hover:text-gold"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
