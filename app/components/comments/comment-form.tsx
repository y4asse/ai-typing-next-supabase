"use client";

import React, { useState } from "react";
import { useSupabase } from "../supabase/supabase-provider";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const CommentForm = () => {
  const { supabase } = useSupabase();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const user_id = useAppSelector((state) => state.user.id);

  const handleSubmit = async () => {
    if (content === "") {
      alert("内容を入力してください");
      return;
    }
    const { data, error } = await supabase
      .from("comments")
      .insert({ content: content, name: name, user_id: user_id });
    if (error) {
      alert(error.message);
    }
    setName("");
    setContent("");
    router.refresh();
  };

  return (
    <>
      <div className="w-3/5 font-semibold border-b-2 border-gray-500">
        <div className="mb-3">
          <p>名前</p>
          <input
            placeholder="名無しさん"
            required
            type="text"
            className="border-2 border-black rounded bg-transparent p-3 w-1/2 shadow-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>内容</p>
          <textarea
            placeholder="こんにちは"
            required
            className=" bg-transparent border-2 border-black rounded p-3 w-full resize-none shadow-lg"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        {user_id ? (
          <div
            onClick={handleSubmit}
            className="border-black inline-block border-2 rounded-xl py-2 px-10 my-5 cursor-pointer hover:text-white hover:bg-black transition-all duration-200 shadow"
          >
            <p>投稿</p>
          </div>
        ) : (
          <>
            <div
              className="border-black inline-block border-2 rounded-xl py-2 px-10 my-5 cursor-not-allowed hover:text-white hover:bg-black transition-all duration-200 shadow"
            >
              <p>投稿</p>
            </div>
            <span className="text-sm ml-3">
              (ログインするとコメントができます)
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default CommentForm;
