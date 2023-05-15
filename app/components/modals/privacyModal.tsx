import { closePrivacyModal } from "@/redux/features/Modal";
import { useAppDispatch } from "@/redux/hooks";
import { FC } from "react";

const PrivacyModal: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="modal">
      <span
        className="batsu"
        onClick={() => {
          dispatch(closePrivacyModal());
        }}
      ></span>
      <h2 className="my-5">プライバシーポリシー</h2>

      <p>
        このプライバシーポリシーは、当サイトのウェブサイト/サービスの利用者のプライバシーを尊重し、提供された情報を保護するために作成されました。当サイトは、個人情報の収集、使用、開示、および保管に関して透明性と信頼性を提供することを目指しています。当サイトは、以下に示す方針に従い、第三者に情報を提供しないことを約束いたします。
      </p>

      <h3 className="my-5">1. 収集される情報</h3>
      <p>
        当サイトは、利用者から直接提供された情報を収集する場合があります。これには、名前、連絡先情報、メールアドレス、その他の識別情報が含まれます。また、利用者がウェブサイト/サービスを使用する際に自動的に生成される情報（IPアドレス、Cookie情報、ブラウザの種類、使用言語など）も収集する場合があります。
      </p>

      <h3 className="my-5">2. 情報の使用</h3>
      <p>収集した情報は、以下の目的のために使用される場合があります。</p>
      <ul className="text-xl deco list-disc list-inside">
        <li>ウェブサイト/サービスの提供および運営</li>
        <li>利用者とのコミュニケーション</li>
        <li>サービス改善のための統計データの収集</li>
        <li>法的要件や規制への適合</li>
      </ul>

      <h3 className="my-5">3. 情報の開示</h3>
      <p>
        当サイトは、利用者の同意なしに個人情報を第三者と共有しません。ただし、以下の場合には情報を開示することがあります。
      </p>
      <ul className="text-xl deco list-disc list-inside">
        <li>利用者から明示的な同意が得られた場合</li>
        <li>法的要件や規制に従う必要がある場合</li>
        <li>利用者や他の個人の安全を保護する必要がある場合</li>
      </ul>
      <h3 className="my-5">4. セキュリティ</h3>
      <p>
        当サイトは、利用者の情報を適切に保護するために技術的、物理的、組織的なセキュリティ対策を講じています。ただし、インターネット上での情報の送信は完全に安全であることを保証することはできません。
      </p>

      <h3 className="my-5">5. Cookieの使用</h3>
      <p>
        当サイトは、一部の場合にCookieを使用して利用者のウェブサイト/サービスの利用状況を追跡し、より良いユーザーエクスペリエンスを提供するために使用することがあります。
      </p>

      <h3 className="my-5">6. 法令遵守</h3>
      <p>
        当サイトは、個人情報の収集、使用、開示、および保管に関して、適用される法律、規制、および業界のベストプラクティスに準拠します。個人情報の処理に関する法的権利を尊重し、利用者に対して以下の権利を保証します。
      </p>
      <p>
        <ul className="text-xl deco list-disc list-inside">
          <li>個人情報へのアクセス</li>
          <li>選択の権利</li>
          <li>コンテンツの制御</li>
          <li>プライバシーへの配慮</li>
        </ul>
      </p>

      <p className="mt-5">
        当サイトは、プライバシーポリシーを定期的に見直し、必要な改訂を行います。プライバシーポリシーの変更がある場合には、ウェブサイト上で通知を行います。
      </p>

      <p>
        ご不明な点や個人情報に関するお問い合わせがある場合は、twitterにご連絡ください：
        <a
          style={{ color: "white" }}
          href="https://twitter.com/y4isse"
          target="_blank"
          rel="noopener noreferrer"
        >
          (y4isse)
        </a>
      </p>

      <p>
        ご提供いただく個人情報は、当サイトのプライバシーポリシーに従って使用されます。プライバシーに関するご質問や懸念がある場合は、お気軽にお問い合わせください。
      </p>
      <div className="flex justify-center mt-5">
        <button
          className="button small2 reverse"
          onClick={() => {
            dispatch(closePrivacyModal());
          }}
        >
          閉じる
        </button>
      </div>
    </div>
  );
};

export default PrivacyModal;
