"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineRollback } from "react-icons/ai";

const GoBackBtn = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div
      onClick={handleBack}
      className="flex items-center justify-center gap-3 cursor-pointer border-4 border-black rounded-xl px-5 py-3 mx-5 my-1 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-200"
    >
      <AiOutlineRollback className=" mr-1" />
      <span>戻る</span>
    </div>
  );
};

export default GoBackBtn;
