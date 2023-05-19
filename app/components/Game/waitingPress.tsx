"use client";

import {
  addEnglishText,
  addJapaneseText,
  reset,
  setCurrentCharIndex,
  setCurrentTextIndex,
} from "@/redux/features/Game";
import { clearScore } from "@/redux/features/Scores";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Data = {
  texts: {
    role: string;
    content: string;
  };
};
const WaitingPress = ({
  setIsLoading,
  setIsCountStart,
  difficulty,
}: {
  setIsLoading: React.Dispatch<boolean>;
  setIsCountStart: React.Dispatch<boolean>;
  difficulty: string;
}) => {
  const router = useRouter();
  router.prefetch("/difficulty");
  router.prefetch("/")
  const dispatch = useAppDispatch();
  const apiRequest = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/${difficulty}`,
        {
          method: "get",
          cache: "no-store",
        }
      );
      return res.json();
    } catch (e) {
      console.log(e);
    }
  };

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
    <div className="container">
      <div className="title">
        <h1>
          {difficulty === "easy"
            ? "簡単"
            : difficulty === "normal"
            ? "普通"
            : difficulty == "hard"
            ? "難しい"
            : "error"}
        </h1>
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
  );
};

export default WaitingPress;
