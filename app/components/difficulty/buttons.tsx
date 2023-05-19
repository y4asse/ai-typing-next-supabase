'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const Buttons = () => {
  const router = useRouter();

  return (
    <div className="buttonContainer">
      <button className="button" onClick={() => router.push("/play/easy")}>
        簡単
      </button>
      <button className="button" onClick={() => router.push("/play/normal")}>
        普通
      </button>
      <button className="button" onClick={() => router.push("/play/hard")}>
        難しい
      </button>
      <button onClick={() => router.push("/")} className="button small">
        タイトルへ戻る
      </button>
    </div>
  );
}

export default Buttons