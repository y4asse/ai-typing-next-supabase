"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex w-full absolute justify-end items-center bg-black bg-transparent">
      <div className="flex items-center gap-3 cursor-pointer border-4 border-black rounded-xl px-5 py-3 mx-5 my-1 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-200">
        <FaGithub className=" w-8 h-8" />
        <span>GitHubでログイン</span>
      </div>
    </nav>
  );
};

export default Nav;
