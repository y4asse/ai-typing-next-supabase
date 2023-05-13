"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "../redux/store";
import { Sora } from "next/font/google";
import Footer from "./components/footer";
import Identify from "./components/Identify";
import ModalPortal from "./components/modals/modalPortal";
import Nav from "./components/nav";

const sora = Sora({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.className}`}>
      <body>
        <Provider store={store}>
          <Identify>
            <ModalPortal>
              <Nav />
              {children}
            </ModalPortal>
            <Footer />
          </Identify>
        </Provider>
      </body>
    </html>
  );
}
