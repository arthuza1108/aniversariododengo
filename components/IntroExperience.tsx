"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeIntro from "./EnvelopeIntro";
import LoveLetter from "./LoveLetter";

type Stage = "envelope" | "opening" | "letter";

interface IntroExperienceProps {
  onComplete: () => void;
}

export default function IntroExperience({ onComplete }: IntroExperienceProps) {
  const [stage, setStage] = useState<Stage>("envelope");

  const handleOpen = () => {
    setStage("opening");
    window.setTimeout(() => setStage("letter"), 1700);
  };

  return (
    <div className="fixed inset-0 z-50 h-[100dvh] w-full">
      <AnimatePresence mode="wait">
        {stage !== "letter" ? (
          <EnvelopeIntro key="envelope" onOpen={handleOpen} isOpening={stage === "opening"} />
        ) : (
          <LoveLetter key="letter" onContinue={onComplete} />
        )}
      </AnimatePresence>
    </div>
  );
}
