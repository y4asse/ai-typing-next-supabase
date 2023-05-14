import React from "react";
import ScoresList from "../components/scores/scoresList";
import GoBackBtn from "../components/goBackBtn";
import CommentsList from "../components/comments/comments-list";
import CommentForm from "../components/comments/comment-form";

const Ranking = () => {
  return (
    <div className="">
      <div className="flex">
        <GoBackBtn />
      </div>
      <div className="flex flex-col justify-center items-center gap-3 my-10">
        <div className="text-5xl mb-5 w-3/5">ランキング</div>
        {/* @ts-ignore */}
        <ScoresList />
        <div className="text-5xl my-5 w-3/5">コメント</div>
        {/* @ts-ignore */}
        <CommentForm />
        {/* @ts-ignore */}
        <CommentsList />
      </div>
    </div>
  );
};

export default Ranking;
