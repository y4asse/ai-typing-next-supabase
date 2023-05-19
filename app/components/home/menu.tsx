"use client";

import { useRouter } from "next/navigation";

// import { GiStairs } from "react-icons/gi";
// import { FaRocket } from "react-icons/fa";
// import { FaInfoCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { showInfoModal } from "@/redux/features/Modal";
import InfoModal from "../modals/infoModal";
import OptionModal from "../modals/optionModal";

export default function Menu() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const infoModalOpen = useAppSelector((state) => state.modal.info);
  const optionModalOpen = useAppSelector((state) => state.modal.option);
  return (
    <>
      {infoModalOpen && <InfoModal />}
      {optionModalOpen && <OptionModal />}
      <div className="buttonContainer">
        <button
          onClick={() => router.push("/difficulty")}
          className="button start"
        >
          {/* <FaRocket className=" inline-block mr-5" /> */}
          スタート
        </button>
        <button className="button" onClick={() => dispatch(showInfoModal())}>
          {/* <FaInfoCircle className=" inline-block mr-5" /> */}
          お知らせ
        </button>
        <button className="button" onClick={() => router.push("/ranking")}>
          {/* <GiStairs className=" inline-block mr-5" /> */}
          ランキング
        </button>
      </div>
    </>
  );
}
