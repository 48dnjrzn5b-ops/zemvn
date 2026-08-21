"use client";

import { useState } from "react";
import RequestModal from "./RequestModal";

type ServiceRequestButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ServiceRequestButton({
  children,
  className,
}: ServiceRequestButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>

      <RequestModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
