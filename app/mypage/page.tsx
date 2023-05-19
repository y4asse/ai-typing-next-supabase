"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Mypage = () => {
  const router = useRouter();
  router.prefetch("/logout")
  return (
    <div
      onClick={() => router.push("/logout")}
      className="absolute top-1/2 flex items-center gap-3 cursor-pointer border-4 border-black rounded-xl px-5 py-3 mx-5 my-1 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-200"
    >
      <FaGithub className=" w-8 h-8" />
      <span>ログアウト</span>
    </div>
  );
};

export default Mypage;
