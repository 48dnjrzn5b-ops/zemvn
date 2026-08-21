"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import RequestForm from "./RequestForm";

type RequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RequestModal({ isOpen, onClose }: RequestModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#29231F]/70 p-4 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-[#F5F1E8]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрити"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#4A3528] text-[#F5F1E8] transition hover:bg-[#5A4030]"
        >
          <X size={20} />
        </button>

        <div className="px-6 pb-2 pt-8 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C0A264]">
            Заявка
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#4A3528] sm:text-3xl">
            Залишити заявку
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6A6058]">
            Залиште свої контакти, і ми зв`яжемося з вами для уточнення деталей.
          </p>
        </div>

        <RequestForm />
      </div>
    </div>
  );
}
