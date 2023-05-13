"use client";

import React, { Dispatch, useEffect, useState } from "react";
import { CountDiv, CountSpan } from "../styled";

const Count = ({
  setIsGameStart,
  setIsCountStart,
}: {
  setIsGameStart: Dispatch<boolean>;
  setIsCountStart: Dispatch<boolean>;
}) => {
  const text = "生成が完了しました．ゲームを開始します.".split("");
  const [timer, setTimer] = useState(3);
  const [typingTimer, setTypingTimer] = useState(0);
  const [isCountNumStart, setIsCountNumStart] = useState(false);

  useEffect(() => {
    let c = 0;
    const typingCount = setInterval(() => {
      if (c > text.length) {
        clearInterval(typingCount);
        setIsCountNumStart(true);
        return;
      }
      setTypingTimer((prev) => prev + 1);
      c++;
    }, 50);

    const count = setInterval(() => {
      if (c > text.length) {
        setTimer((prev) => {
          if (prev < 1) {
            setIsGameStart(true);
            setIsCountStart(false);
            return prev;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      clearInterval(count);
      clearInterval(typingCount);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="completeText">
          <h3>
            {text.map((word, index) => {
              if (index <= typingTimer) {
                return <span key={index}>{word}</span>;
              }
              return "";
            })}
          </h3>
          {isCountNumStart && (
            <CountDiv>
              <CountSpan>{timer === 0 ? "スタート!" : timer}</CountSpan>
            </CountDiv>
          )}
        </div>
      </div>
    </>
  );
};

export default Count;

