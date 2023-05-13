"use client";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import PrivacyModal from "./privacyModal";

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const privacyModalOpen = useAppSelector((state) => state.modal.privacy);

  return (
    <div>
      {privacyModalOpen && <PrivacyModal />}
      {children}
    </div>
  );
};

export default ModalPortal;
