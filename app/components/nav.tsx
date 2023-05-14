"use client";

import { FaGithub } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

const Nav = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  return (
    <nav className="flex w-full absolute justify-end items-center bg-black bg-transparent">
      {user.id ? (
        <div
          onClick={() => router.push("/mypage")}
          className="flex items-center gap-3 cursor-pointer border-4 border-black rounded-xl px-5 py-3 mx-5 my-1 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-200"
        >
          <BsFillPersonFill className=" w-8 h-8" />
          <span>マイページ</span>
        </div>
      ) : (
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
