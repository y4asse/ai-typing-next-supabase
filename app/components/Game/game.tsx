import React, { Dispatch } from "react";
import TTitle from "./typing/TTitle";
import TScore from "./typing/TScore";
import TText from "./typing/TText";
import TTimer from "./typing/TTimer";

const Game = ({
  difficulty,
  setShowScore,
}: {
  difficulty: string;
  setShowScore: Dispatch<boolean>;
}) => {
  return (
    <div className="container">
      <div className="gameGrid">
        <TTitle difficulty={difficulty} />
        <TScore />
        <TText difficulty={difficulty} setShowScore={setShowScore} />
        <TTimer setShowScore={setShowScore} />
      </div>
    </div>
  );
};

export default Game;
