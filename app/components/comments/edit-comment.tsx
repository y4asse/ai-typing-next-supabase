"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSupabase } from "../supabase/supabase-provider";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import BtnSppiner from "../utils/btnSpinner";
import {
  clearEditingComment,
  setEditingComment,
} from "@/redux/features/comment";

const EditComment = () => {
  const editingComment = useAppSelector(
    (state) => state.comment.editingComment
  );
  const { supabase } = useSupabase();
  const [name, setName] = useState(editingComment.name);
  const [content, setContent] = useState(editingComment.content);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const user_id = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();
  const ref = useRef();

  const handleSubmit = async () => {
    if (content === "") {
      alert("編集内容を入力してください");
      return;
    }
    setIsLoading(true);
    const { data, error } = await supabase
      .from("comments")
      .update({ content: content, name: name, user_id: user_id })
      .eq("id", editingComment.id);
    if (error) {
      alert(error.message);
    }
    setName("");
    setContent("");
    dispatch(clearEditingComment());
    setIsLoading(false);
    router.refresh();
  };
  useEffect(() => {
    setName(editingComment.name);
    setContent(editingComment.content);
  }, [editingComment]);

  return (
    <div className="w-3/5 font-semibold border-b-2 border-gray-500" id="to">
      <div className="mb-3">
        <p>名前</p>
        <input
          placeholder="名無しさん"
          required
          type="text"
          className="border-2 border-black rounded bg-transparent p-3 w-1/2 shadow-lg"
          value={name!}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <p>編集内容</p>
        <textarea
          placeholder="編集内容を入力"
          required
          className=" bg-transparent border-2 border-black rounded p-3 w-full resize-none shadow-lg"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
      </div>
      <div
        onClick={handleSubmit}
        className="border-black inline-block border-2 rounded-xl py-2 px-10 my-5 cursor-pointer hover:text-white hover:bg-black transition-all duration-200 shadow"
      >
        <span>{isLoading ? <BtnSppiner color="white" /> : "編集する"}</span>
      </div>
      <div
        onClick={handleSubmit}
        className="border-black inline-block border rounded-xl py-2 px-5 my-5 ml-5 cursor-pointer hover:text-white hover:bg-black transition-all duration-200 shadow"
      >
        <span>キャンセル</span>
      </div>
    </div>
  );
};

export default EditComment;
