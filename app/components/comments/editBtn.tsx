'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { useSupabase } from "../supabase/supabase-provider";

const EditBtn = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState();
  const router = useRouter();
  const {supabase} = useSupabase();
  return (
    <>
    {}
      <span className="hover:cursor-pointer text-blue-500">
        <BsFillPencilFill />
      </span>
    </>
  );
};

export default EditBtn;
