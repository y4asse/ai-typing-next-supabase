import React from "react";
import SupabaseProvider from "./supabase-provider";
import { headers, cookies } from "next/headers";
import SupabaseListener from "./supabase-listener";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/database.types";

const SupabaseLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <SupabaseProvider>
      {/* <SupabaseListener accessToken={session?.access_token}>
        {children}
      </SupabaseListener> */}
    </SupabaseProvider>
  );
};

export default SupabaseLayout;
