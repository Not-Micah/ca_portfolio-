"use client";

import ProjectModal from "@/app/components/ProjectModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
        <ProjectModal />
    </>
  );
};

export default ModalProvider;