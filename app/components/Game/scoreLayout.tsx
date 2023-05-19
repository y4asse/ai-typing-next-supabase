"use client";

import React, {  useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useSupabase } from "../supabase/supabase-provider";
import { GiStairs } from "react-icons/gi";
import { MdOutlineKeyboardReturn } from "react-icons/md";

const ScoreLayout = ({ difficulty }: { difficulty: string }) => {
  const score = useAppSelector((state) => state.score.value);
  const userName = useAppSelector((state) => state.user.name);
  const userId = useAppSelector((state) => state.user.id);
  const router = useRouter();
  const { supabase } = useSupabase();

  const insertScore = async () => {
    const { data, error } = await supabase.from("scores").insert({
      difficulty: difficulty,
      score: score,
      user_id: userId,
      name: userName,
    });
    if (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    insertScore();
  }, []);
  return (
    <div className="container">
      <div>
        <h1>終了！</h1>
      </div>
      <div className="scoreModal">
        <span className="score">スコア： {score}</span>
      </div>
      <div className="buttonContainer">
        <button
          className="button small"
          onClick={() => router.push("/ranking")}
        >
          <GiStairs className=" inline-block mr-5" />
          ランキングを見る
        </button>
        <button
          className="button small"
          onClick={() => {
            router.push("/difficulty");
          }}
        >
          <MdOutlineKeyboardReturn className=" inline-block mr-5" />
          もう一度
        </button>
      </div>
    </div>
  );
};

export default ScoreLayout;
