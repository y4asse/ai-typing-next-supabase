"use client";

import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import ConfirmDelete from "./confirmDelete";
import { useRouter } from "next/navigation";
import { useSupabase } from "../supabase/supabase-provider";

const DeleteBtn = ({ id }: { id: string }) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { supabase } = useSupabase();
  const handleDelete = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("comments")
      .delete()
      .eq("id", id);
    if (error) {
      alert(error.message);
    }
    setIsLoading(false);
    setIsConfirming(false);
    router.refresh();
  };
  const confirm = () => {
    setIsConfirming(true);
  };

  return (
    <>
      {isConfirming && (
        <ConfirmDelete
          setIsConfirming={setIsConfirming}
          handleDelete={handleDelete}
          isLoading={isLoading}
        />
      )}
      <RiDeleteBinLine
        className="hover:cursor-pointer text-red-600"
        onClick={confirm}
      />
      {/* {isLoading ? (
        <span>
          <BtnSppiner />
        </span>
      ) : (
        <span
          className="hover:cursor-pointer text-red-600"
          onClick={confirm}
        >
          <RiDeleteBinLine />
        </span>
      )} */}
    </>
  );
};

export default DeleteBtn;
