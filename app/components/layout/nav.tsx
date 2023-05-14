"use client";

import { FaGithub } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { TbLogout } from "react-icons/tb";
import { useSupabase } from "../supabase/supabase-provider";

const Nav = () => {
  const user = useAppSelector((state) => state.user);
  const { supabase } = useSupabase();
  const router = useRouter();
  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };
  return (
    <nav className="flex fixed top-0 right-0 items-center ">
      {user.id ? (
        <>
          <div>ようこそ{user.name}さん!</div>
          <div
            onClick={logout}
            className="flex items-center gap-3 cursor-pointer border-4 border-black rounded-xl px-5 py-3 mx-5 my-1 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-200"
          >
            <span>ログアウト</span>
            <TbLogout className=" w-8 h-8" />
          </div>
        </>
      ) : (
        // <>
        //   <div>ようこそ{user.name}さん!</div>
        //   <div
        //     onClick={() => router.push("/mypage")}
        //     className="flex items-center gap-3 cursor-pointer border-4 border-black rounded-xl px-5 py-3 mx-5 my-1 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-200"
        //   >
        //     <BsFillPersonFill className=" w-8 h-8" />
        //     <span>マイページ</span>
        //   </div>
        // </>
        <div
          onClick={() => router.push("/login")}
          className="flex items-center gap-3 cursor-pointer border-4 border-black rounded-xl px-5 py-3 mx-5 my-1 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-200"
        >
          <FaGithub className=" w-8 h-8" />
          <span>GitHubでログイン</span>
        </div>
      )}
    </nav>
  );
};

export default Nav;
