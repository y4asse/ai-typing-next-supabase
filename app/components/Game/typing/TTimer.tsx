"use client";
import {
  addCurrentTextIndex,
  clearTimer,
  setCurrentCharIndex,
  setCurrentTextIndex,
  subTimer,
} from "@/redux/features/Game";
import { subScore } from "@/redux/features/Scores";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { Dispatch, useEffect } from "react";
import { GameTimerInnner, StyledCount } from "../../styled";

const TTimer = ({ setShowScore }: { setShowScore: Dispatch<boolean> }) => {
  const dispatch = useAppDispatch();
  const timer = useAppSelector((state) => state.game.timer);
  const english = useAppSelector((state) => state.game.english);
  const currentCharIndex = useAppSelector(
    (state) => state.game.currentCharIndex
  );
  const currentTextIndex = useAppSelector(
    (state) => state.game.currentTextIndex
  );

  useEffect(() => {
    dispatch(clearTimer());
  }, [currentTextIndex]);

  useEffect(() => {
    const count = setInterval(() => {
      if (timer <= 1) {
        dispatch(subScore(100));
        if (currentTextIndex >= english.length - 1) {
          setShowScore(true);
        } else {
          dispatch(addCurrentTextIndex(1));
          dispatch(setCurrentCharIndex(0));
        }
      } else {
        dispatch(subTimer());
      }
    }, 1000);
    return () => {
      clearInterval(count);
    };
  }, [timer, currentTextIndex]);

  return (
    <div className="gameTimer">
      <GameTimerInnner key={currentTextIndex}>
        <StyledCount key={currentTextIndex}>{timer}</StyledCount>
      </GameTimerInnner>
    </div>
  );
};

export default TTimer;
