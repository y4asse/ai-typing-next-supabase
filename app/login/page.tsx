"use client";

import React from "react";
import { useSupabase } from "../components/supabase/supabase-provider";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { showPrivacyModal } from "@/redux/features/Modal";

const Login = () => {
  const { supabase } = useSupabase();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const loginWithGit = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  return (
    <div className="container">
      <div className="border-4 border-black p-5 rounded-xl">
        <p className="text-center font-bold text-3xl mb-12">ログイン</p>
        <p className="text-center mb-10">
          ログインするとコメントを投稿することができます．
        </p>
        <p className="text-center mb-10">
          プライバシーポリシーについては
          <span
            className="underline cursor-pointer"
            onClick={() => dispatch(showPrivacyModal())}
          >
            こちら
          </span>
          をご覧ください．
        </p>
        <div
          onClick={loginWithGit}
          className="flex items-center gap-3 justify-center cursor-pointer border-4 border-black rounded-xl px-4 py-3 mx-5 my-1 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-200"
        >
          <FaGithub className=" w-8 h-8" />
          <span onClick={loginWithGit}>GitHubでログイン</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
