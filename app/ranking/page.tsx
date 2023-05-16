import React, { Suspense } from "react";
import ScoresList from "../components/scores/scoresList";
import GoBackBtn from "../components/goBackBtn";
import CommentsList from "../components/comments/comments-list";
import CommentForm from "../components/comments/comment-form";
import Loading from "../loading";
import Spinner from "../components/utils/spinner";

const Ranking = () => {
  return (
    <div className="">
      <div className="fixed flex top-1">
        <GoBackBtn />
      </div>
      <div className="flex flex-col justify-center items-center gap-3 my-10">
        <div className="text-5xl mb-5 w-3/5">ランキング</div>
        <Suspense fallback={<Spinner />}>
          {/* @ts-ignore */}
          <ScoresList />
        </Suspense>
        {/* @ts-ignore */}
        <CommentForm />
        <div className="text-5xl my-5 w-3/5">コメント</div>
        <Suspense fallback={<Spinner />}>
          {/* @ts-ignore */}
          <CommentsList />
        </Suspense>
      </div>
    </div>
  );
};

export default Ranking;
