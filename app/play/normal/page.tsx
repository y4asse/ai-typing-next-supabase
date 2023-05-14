"use client";

import { useState } from "react";
import Loader from "../../components/loader/loader";
import Game from "@/app/components/Game/game";
import Count from "@/app/components/Game/count";
import ScoreLayout from "@/app/components/Game/scoreLayout";
import WaitingPress from "@/app/components/Game/waitingPress";

export default function Play() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCountStart, setIsCountStart] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const [showScore, setShowScore] = useState(false);

  return (
    <>
      {showScore ? (
        <ScoreLayout difficulty="normal" />
      ) : isGameStart ? (
        <Game difficulty="normal" setShowScore={setShowScore} />
      ) : isCountStart ? (
        <Count
          setIsGameStart={setIsGameStart}
          setIsCountStart={setIsCountStart}
        />
      ) : isLoading ? (
        <Loader />
      ) : (
        <WaitingPress
          setIsLoading={setIsLoading}
          setIsCountStart={setIsCountStart}
        />
      )}
    </>
  );
}
