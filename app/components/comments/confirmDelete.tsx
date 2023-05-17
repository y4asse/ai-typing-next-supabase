import React, { Dispatch, useState } from "react";
import BtnSppiner from "../utils/btnSpinner";

const ConfirmDelete = ({
  setIsConfirming,
  handleDelete,
  isLoading,
}: {
  setIsConfirming: Dispatch<boolean>;
  handleDelete: () => Promise<void>;
  isLoading: boolean;
}) => {
  return (
    <div className="flex justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-10">
      <div
        style={{ background: "rgb(255, 239, 215)" }}
        className="border-4 border-black w-1/2 h-1/2 flex flex-col justify-center items-center gap-24 rounded-2xl"
      >
        <h3>削除しますか？</h3>
        <div className="flex gap-20">
          <span
            className="border-2 border-black bg-red-400 rounded py-3 px-8 cursor-pointer hover:bg-red-700 transition-all duration-200"
            onClick={handleDelete}
          >
            {isLoading ? <BtnSppiner color="white" /> : "削除"}
          </span>
          <span
            className="border-2 border-black rounded py-3 px-7 cursor-pointer hover:bg-black hover:text-white transition-all duration-200"
            onClick={() => setIsConfirming(false)}
          >
            いいえ
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
