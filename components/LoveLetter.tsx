"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

interface LoveLetterProps {
  onContinue: () => void;
}

export default function LoveLetter({ onContinue }: LoveLetterProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      transition={{ duration: 1 }}
      className="relative flex h-full w-full items-center justify-center overflow-y-auto bg-romantic-gradient px-4 py-10 sm:px-6"
    >
      <ParticlesBackground variant="light" density="medium" />

      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        className="glass-card relative w-full max-w-xl rounded-2xl px-6 py-10 shadow-soft sm:px-12 sm:py-14"
      >
        <p className="text-center font-script text-4xl text-gold sm:text-5xl">
          Para minha Dengosinha
        </p>
        <div className="gold-divider my-6" />

        <div className="space-y-5 font-script text-[1.35rem] leading-relaxed text-ink sm:text-[1.55rem]">
          <p>Minha Perfeitinha de Química,</p>

          <p>
            Antes de você, minha vida seguia seu curso normal — dias comuns,
            uma rotina qualquer. Então, do nada, sentados no chão de um ônibus
            lotado, o destino decidiu escrever uma história para nós dois.
          </p>

          <p>
            Desde aquele dia, tudo mudou. Você trouxe cor para lugares que eu
            nem sabia que eram cinzas. Trouxe leveza para os meus dias mais
            pesados, e transformou o comum em memória.
          </p>

          <p>
            Quero te agradecer por cada instante — pelas risadas bobas, pelos
            silêncios confortáveis, pelas viagens, pelos abraços que
            resolvem qualquer dia ruim. Sou mais feliz por sua causa, todos
            os dias, um pouquinho mais.
          </p>

          <p>
            Hoje é seu dia, e eu só quero que você saiba: você é o maior
            presente que a vida já me deu. Feliz aniversário, meu amor.
          </p>

          <p className="pt-2">Com todo o meu amor,</p>
          <p className="text-3xl text-blush-deep sm:text-4xl">Arthur ❤️</p>
        </div>

        <div className="mt-10 flex justify-center">
          <motion.button
            type="button"
            onClick={onContinue}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-gradient-to-r from-sky-soft via-blush-deep to-gold-soft px-10 py-3 font-body text-sm font-medium uppercase tracking-[0.2em] text-ink shadow-soft transition-shadow hover:shadow-gold"
          >
            Continuar
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
