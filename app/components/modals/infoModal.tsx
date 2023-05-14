import { closeInfoModal } from "@/redux/features/Modal";
import { useAppDispatch } from "@/redux/hooks";
import { FC } from "react";

const InfoModal: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="modal">
      <span
        className="batsu"
        onClick={() => {
          dispatch(closeInfoModal());
        }}
      ></span>
      <h3 className="my-5">遊び方</h3>
      <p>
        ゲームを開始するとAIが自動で7つテキストを生成してくれます.
        簡単，普通，難しい，のコースが選べます.
        制限時間内に出題されたテキストをタイピングすると得点が加算されます.
        文章が長いほどポイントは高いです.
        AIなので.初めが大文字だったり小文字だったりします.気を付けてください.
        ゲームが終わると自動的にスコアが登録され，ランキングに表示されます．高順位を目指してください！
        ログインするとランキング画面でコメントを投稿することができます．なんでもいいので，つぶやいて楽になりましょう．
        ログイン情報は安全なセキュリティのもと大切に保管するので，安心してください．
      </p>
      <h3 className="my-5">その他</h3>
      <p>
        文章はすべてAIが作っているので,たまに変な挙動をする可能性がありますのでご了承ください．
        なにか問題やバグがあればtwitterまで連絡をいただけると幸いです.
        <a
          style={{ color: "white" }}
          href="https://twitter.com/y4isse"
          target="_blank"
          rel="noopener noreferrer"
        >
          (y4isse).
        </a>
        プロンプト次第でもっと面白くなると思うので，
        こんなプロンプトがあれば面白いというアイデアがあればぜひ教えてください.
      </p>
      <div className="flex justify-center">
        <button
          className="button small2 reverse mt-30"
          onClick={() => {
            dispatch(closeInfoModal());
          }}
        >
          閉じる
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
