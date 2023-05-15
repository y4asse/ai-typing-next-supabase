import "./globals.css";
import { Sora } from "next/font/google";
import Footer from "./components/layout/footer";
import Identify from "./components/layout/Identify";
import ModalPortal from "./components/modals/modalPortal";
import Nav from "./components/layout/nav";
import SupabaseProvider from "./components/supabase/supabase-provider";
import SupabaseListener from "./components/supabase/supabase-listener";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/database.types";
import { headers, cookies } from "next/headers";
import { ReduxProvider } from "@/redux/provider";
import { Metadata } from "next";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'AI Typing'
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <html lang="en" className={`${sora.className}`}>
      
      <body>
        <ReduxProvider>
          <SupabaseProvider>
            <SupabaseListener accessToken={session?.access_token} />
              <Identify>
                <ModalPortal>
                  <Nav />
                  {children}
                </ModalPortal>
                <Footer />
              </Identify>
          </SupabaseProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
