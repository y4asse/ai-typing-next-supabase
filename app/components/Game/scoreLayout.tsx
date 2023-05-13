"use client";

import React, { Dispatch } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

const ScoreLayout = ({
  difficulty,
}: {
  difficulty: string;
}) => {
  const score = useAppSelector((state) => state.score.value);
  const router = useRouter();
  return (
    <div className="container">
      <div>
        <h1>終了！</h1>
      </div>
      <div className="scoreModal">
        <span className="score">スコア： {score}</span>
      </div>
      <div className="buttonContainer">
        <button className="button small" onClick={() => router.push("/difficulty")}>
          もう一度
        </button>
        <button
          className="button small"
          onClick={() => {
            router.push("/");
          }}
        >
          タイトルへ戻る
        </button>
      </div>
    </div>
  );
};

export default ScoreLayout;
