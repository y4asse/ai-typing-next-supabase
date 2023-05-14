import { Database } from "@/database.types";
import { format } from "date-fns";
import React from "react";

type Comment = Database["public"]["Tables"]["comments"]["Row"];

const CommentItem = (commentInfo: Comment) => {
  return (
    <div>
      <span className="mr-2">{commentInfo.name ? commentInfo.name : "名無しさん"}</span>
      <span>{format(new Date(commentInfo.created_at), "yyyy/mm/dd")}</span>
      <p className="mt-3">{commentInfo.content}</p>
    </div>
  );
};

export default CommentItem;
