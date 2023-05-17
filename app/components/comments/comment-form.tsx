"use client";

import { useAppSelector } from "@/redux/hooks";
import NewComment from "./new-comment";
import EditComment from "./edit-comment";

const CommentForm = () => {
  const editingComment = useAppSelector(
    (state) => state.comment.editingComment
  );

  return (
    <div className="flex justify-center w-full" id="scrollTo">
      {!editingComment.id ? <NewComment /> : <EditComment />}
    </div>
  );
};

export default CommentForm;
