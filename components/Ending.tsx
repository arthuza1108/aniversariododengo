"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const symbols = ["❤", "❀", "✦"];

export default function Ending() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = window.setTimeout(() => setShowBurst(true), 1200);
      return () => window.clearTimeout(t);
    }
  }, [inView]);

  const items = useMemo(
    () =>
      Array.from({ length: 55 }, (_, i) => ({
        id: i,
        left: seededRandom(i * 9.7) * 100,
        delay: seededRandom(i * 3.3) * 5,
        duration: 6 + seededRandom(i * 5.1) * 6,
        size: 12 + seededRandom(i * 2.2) * 18,
        symbol: symbols[i % symbols.length],
      })),
    []
  );

  return (
    <section
      ref={ref}
      id="final"
      className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-romantic-gradient px-6 py-24 text-center"
    >
      {showBurst &&
        items.map((item) => (
          <motion.span
            key={item.id}
            className="pointer-events-none absolute select-none text-blush-deep"
            style={{ left: `${item.left}%`, top: -40, fontSize: item.size }}
            initial={{ opacity: 0 }}
            animate={{
              y: "120vh",
              opacity: [0, 0.85, 0.85, 0],
              rotate: 360,
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {item.symbol}
          </motion.span>
        ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-10"
      >
        <p className="font-script text-4xl text-ink sm:text-6xl">
          Obrigado por fazer parte da minha vida.
        </p>
        <p className="mt-6 font-script text-2xl text-blush-deep sm:text-4xl">
          ❤️ Feliz Aniversário, Perfeitinha de Química ❤️
        </p>
      </motion.div>
    </section>
  );
}
