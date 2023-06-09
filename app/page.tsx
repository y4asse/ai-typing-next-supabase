"use client";

import { useRouter } from "next/navigation";

import { GiStairs } from "react-icons/gi";
import { FaRocket, FaPencilAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { showInfoModal } from "@/redux/features/Modal";
import InfoModal from "./components/modals/infoModal";
import OptionModal from "./components/modals/optionModal";
import Image from "next/image";
import imageSrc from "./image/OIG.jpg";

export default function Home() {
  const router = useRouter();
  router.prefetch("/ranking");
  router.prefetch("/difficulty");
  const dispatch = useAppDispatch();
  const infoModalOpen = useAppSelector((state) => state.modal.info);
  const optionModalOpen = useAppSelector((state) => state.modal.option);
  return (
    <>
      {infoModalOpen && <InfoModal />}
      {optionModalOpen && <OptionModal />}
      <div className="container">
        <div className="title">
          <Image
            src={imageSrc}
            width={70}
            height={70}
            alt="Icon"
            style={{ borderRadius: "40%" }}
          />
          <h1>AI Typing</h1>
          <p>
            GPTが文を生成
            <FaPencilAlt className=" inline-block" />
          </p>
        </div>
        <div className="buttonContainer">
          <button
            onClick={() => router.push("/difficulty")}
            className="button start"
          >
            <FaRocket className=" inline-block mr-5" />
            スタート
          </button>
          <button className="button" onClick={() => dispatch(showInfoModal())}>
            <FaInfoCircle className=" inline-block mr-5" />
            お知らせ
          </button>
          <button
            className="button"
            onClick={() => router.push("/ranking")}
          >
            <GiStairs className=" inline-block mr-5" />
            ランキング
          </button>
        </div>
      </div>
    </>
  );
}
