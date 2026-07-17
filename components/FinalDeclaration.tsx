"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function FinalDeclaration() {
  return (
    <section
      id="declaracao"
      className="relative overflow-hidden bg-romantic-gradient-deep px-6 py-28 sm:py-36"
    >
      <ParticlesBackground variant="dark" density="medium" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="font-script text-3xl leading-relaxed text-cream sm:text-5xl"
        >
          Conhecer você foi a melhor coincidência da minha vida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 space-y-4 font-body text-sm font-light leading-relaxed text-cream/80 sm:text-base"
        >
          <p>
            Entre tantas pessoas naquele ônibus lotado, o destino escolheu
            justamente nós dois. Aquele simples encontro mudou completamente
            a minha vida.
          </p>
          <p>
            Todos os momentos ao seu lado são especiais — e eu quero
            continuar vivendo muitos aniversários assim, com você.
          </p>
          <p>
            Agradeço por você existir. Desejo que todos os seus sonhos se
            realizem. Você é o maior presente que Deus colocou na minha vida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 border-t border-gold/30 pt-10"
        >
          <p className="font-script text-2xl leading-relaxed text-gold sm:text-4xl">
            Se eu pudesse escolher novamente entre conhecer qualquer pessoa no
            mundo ou sentar mais uma vez naquele chão de ônibus...
          </p>
          <p className="mt-4 font-script text-2xl text-gold sm:text-4xl">
            eu escolheria você todas as vezes.
          </p>
          <p className="mt-8 font-script text-3xl text-blush-deep sm:text-5xl">
            Feliz aniversário, minha Dengosinha.
          </p>
          <p className="mt-4 font-body text-sm font-light text-cream/70 sm:text-base">
            Eu te amo hoje, amanhã e por toda a eternidade. ❤️
          </p>

          <p className="mt-10 font-body text-xs uppercase tracking-[0.25em] text-cream/50">
            Com todo o meu amor,
          </p>
          <p className="mt-2 font-script text-2xl text-gold sm:text-3xl">
            Arthur ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
