"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroExperience from "@/components/IntroExperience";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import ReasonsWhyILoveYou from "@/components/ReasonsWhyILoveYou";
import FinalDeclaration from "@/components/FinalDeclaration";
import Ending from "@/components/Ending";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-cream">
      <AnimatePresence>
        {!unlocked && <IntroExperience onComplete={() => setUnlocked(true)} />}
      </AnimatePresence>

      {unlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <Hero />
          <OurStory />
          <Gallery />
          <ReasonsWhyILoveYou />
          <FinalDeclaration />
          <Ending />
        </motion.div>
      )}
    </main>
  );
}
