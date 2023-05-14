"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "./supabase-provider";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/User";

export default function SupabaseListener({
  accessToken,
}: {
  accessToken?: string;
}) {
  const router = useRouter();
  const { supabase } = useSupabase();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserInfo = async () => {
      //クライアントのセッションを取得
      const { data } = await supabase.auth.getSession();
      dispatch(setUser({ id: data.session?.user.id!, email: data.session?.user.email! }));
    };
    getUserInfo();

    //ログイン，ログアウトしたときを監視し，セッション情報を取得する（ブラウザ内の話）
    supabase.auth.onAuthStateChange((_, session) => {
      dispatch(setUser({ id: session?.user.id!, email: session?.user.email! }));
      if (session?.access_token !== accessToken) {
        //キャッシュクリア
        router.refresh();
      }
    });
  }, [accessToken]);
  return null;
}
