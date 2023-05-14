import { Database } from "@/database.types";
import { format } from "date-fns";
import React from "react";

type Score = Database["public"]["Tables"]["scores"]["Row"];

const ScoreItem = (scoreInfo: Score) => {
  return (
    <>
      <td className=" p-3">{scoreInfo.name ? scoreInfo.name : "名無しさん"}</td>
      <td className=" p-3">{scoreInfo.score}</td>
      <td className=" p-3">
        {scoreInfo.difficulty === "easy"
          ? "簡単"
          : scoreInfo.difficulty === "normal"
          ? "普通"
          : "難しい"}
      </td>
      <td className=" p-3">
        {format(new Date(scoreInfo.created_at), "yyyy/MM/dd")}
      </td>
    </>
  );
};

export default ScoreItem;
