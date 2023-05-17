'use client'

import { Database } from "@/database.types";
import { format } from "date-fns";
import React from "react";
import DeleteBtn from "./deleteBtn";
import EditBtn from "./editBtn";
import { useAppSelector } from "@/redux/hooks";

type Comment = Database["public"]["Tables"]["comments"]["Row"];

const CommentItem = (commentInfo: Comment) => {
  const userId = useAppSelector((state) => state.user.id);
  return (
    <div className=" relative">
      <span className="mr-2">
        {commentInfo.name ? commentInfo.name : "名無しさん"}
      </span>
      <span>
        {format(new Date(commentInfo.created_at), "yyyy/mm/dd hh:mm")}
      </span>
      <p className="mt-3">{commentInfo.content}</p>
      {commentInfo.user_id === userId && (
        <div className="absolute right-0 top-0 flex text-xl gap-3">
          {/* <EditBtn id="ss" /> */}
          <DeleteBtn id={commentInfo.id} />
        </div>
      )}
    </div>
  );
};

export default CommentItem;
