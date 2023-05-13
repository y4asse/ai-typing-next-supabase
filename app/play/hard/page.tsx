"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../../components/loader";
import { useAppDispatch } from "@/redux/hooks";
import {
  addEnglishText,
  addJapaneseText,
  reset,
  setCurrentCharIndex,
  setCurrentTextIndex,
} from "@/redux/features/Game";
import Game from "@/app/components/Game/game";
import Count from "@/app/components/Game/count";
import ScoreLayout from "@/app/components/Game/scoreLayout";
import { clearScore } from "@/redux/features/Scores";

type Data = {
  texts: {
    role: string;
    content: string;
  };
};

const apiRequest = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hard`, {
      method: "get",
      cache: "no-store",
    });
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export default function Play() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isCountStart, setIsCountStart] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const dispatch = useAppDispatch();

  const handleKeyDown = async (e: KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      dispatch(reset());
      dispatch(setCurrentCharIndex(0));
      dispatch(setCurrentTextIndex(0));
      dispatch(clearScore());
      setIsLoading(true);
      const res: Data = await apiRequest();
      const data = res.texts.content;
      setIsLoading(false);
      const firstSplitArray = data.split(")");
      firstSplitArray.pop();
      for (let i = 0; i < firstSplitArray.length; i++) {
        const text = firstSplitArray[i];
        const secondSplitArray = text.split("(");
        secondSplitArray[0] = secondSplitArray[0].trim();
        secondSplitArray[0] = secondSplitArray[0].slice(3);
        dispatch(addEnglishText(secondSplitArray[0]));
        dispatch(addJapaneseText(secondSplitArray[1]));
      }
      setIsCountStart(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  return (
    <>
      {showScore ? (
        <ScoreLayout difficulty="hard" />
      ) : isGameStart ? (
        <Game difficulty="hard" setShowScore={setShowScore} />
      ) : isCountStart ? (
        <Count
          setIsGameStart={setIsGameStart}
          setIsCountStart={setIsCountStart}
        />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="title">
            <h1>難しい</h1>
          </div>
          <div className="mb-tb">
            <span style={{ fontSize: 30 }}>
              スペースかエンターを押すと，インポートを開始します
            </span>
          </div>
          <div className="buttonContainer">
            <button
              className="button small"
              onClick={() => router.push("/difficulty")}
            >
              難易度選択へ戻る
            </button>
            <button className="button small" onClick={() => router.push("/")}>
              タイトルへ戻る
            </button>
          </div>
        </div>
      )}
    </>
  );
}
