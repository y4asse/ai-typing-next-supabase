import React from "react";
import Buttons from "../components/difficulty/buttons";
const Difficulty = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>難易度を選択</h2>
        </div>
        <Buttons />
      </div>
    </>
  );
};

export default Difficulty;
