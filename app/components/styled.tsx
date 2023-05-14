"use client";
import styled, { keyframes } from "styled-components";

export const countdownAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

export const GameTimerInnner = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${countdownAnimation} 10s linear infinite;
`;

export const rotate = keyframes`
  0%{
    transform: rotateY(0);
    opacity: 0;
  }
  10%{
    transform: rotateY(0);
    opacity: 1;
  }
  90%{
    transform: rotateY(0deg);
    opacity: 1;
  }
  100%{
    transform: rotateY(180deg);
    opacity: 0;
  }
  `;
export const StyledCount = styled.span`
  animation: rotate 1s infinite;
  position: absolute;
  top: 0;
  left: 49%;
`;

export const CountSpan = styled.h1`
  font-size: 100px;
  padding: 50px;
  animation: ${rotate} 1s infinite;
`;

export const CountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
