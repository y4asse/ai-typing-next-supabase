export const revalidate = 0;

import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { headers, cookies } from "next/headers";
import { Database } from "@/database.types";
import CommentItem from "./comment-item";

const CommentsList = async () => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data: comments } = await supabase
    .from("comments")
    .select("*")
    .order("created_at", { ascending: false });
  return (
    <div className="w-3/5 mt-5">
      {comments?.map((comment) => (
        <div
          key={comment.id}
          className="border-2 font-semibold border-black rounded-lg p-5 mb-5"
        >
          <CommentItem {...comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
