"use client";

import { BsFillPencilFill } from "react-icons/bs";
import { Database } from "@/database.types";
import { useAppDispatch } from "@/redux/hooks";
import { setEditingComment } from "@/redux/features/comment";

type Comment = Database["public"]["Tables"]["comments"]["Row"];

const EditBtn = ({ commentInfo }: { commentInfo: Comment }) => {
  const dispatch = useAppDispatch();

  const scrollToForm = () => {
    document.getElementById("scrollTo")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleEdit = () => {
    scrollToForm();
    dispatch(setEditingComment(commentInfo));
  };
  return (
    <>
      {}
      <span className="hover:cursor-pointer text-blue-500" onClick={handleEdit}>
        <BsFillPencilFill />
      </span>
    </>
  );
};

export default EditBtn;
