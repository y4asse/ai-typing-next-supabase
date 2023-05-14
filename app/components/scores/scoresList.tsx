export const revalidate = 0;

import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { headers, cookies } from "next/headers";
import ScoreItem from "./scoreItem";
import { Database } from "@/database.types";

const ScoresList = async () => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data: scores } = await supabase
    .from("scores")
    .select("*")
    .order("score", { ascending: false });
  return (
    <div className="border-black border-2 border-collapse w-3/5 font-semibold rounded-xl shadow-xl mb-5">
      <table className="w-full">
        <tbody>
          <tr className="border-b-2 border-black">
            <th className=" p-3">順位</th>
            <td className=" p-3">スコア</td>
            <td className=" p-3">名前</td>
            <td className=" p-3">難易度</td>
            <td className=" p-3">日付</td>
          </tr>
          {scores?.map((score, index) => (
            <tr key={score.id}>
              <th className=" p-3">{index + 1}位</th>
              <ScoreItem {...score} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoresList;
