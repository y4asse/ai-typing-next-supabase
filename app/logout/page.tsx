"use client";

import React from "react";
import { useSupabase } from "../components/supabase/supabase-provider";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const Logout = () => {
  const { supabase } = useSupabase();
  const router = useRouter();
  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };
  return (
    <div onClick={logout} className="absolute top-2/3">
      <div className="flex items-center gap-3 cursor-pointer border-4 border-black rounded-xl px-5 py-3 mx-5 my-1 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-200">
        <FaGithub className=" w-8 h-8" />
        <span>ログアウト</span>
      </div>
    </div>
  );
};

export default Logout;
