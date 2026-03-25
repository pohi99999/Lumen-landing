"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 p-3 bg-[#3A0F14]/80 backdrop-blur-md border border-[#C6A15B]/30 rounded-full text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-all duration-300 shadow-lg shadow-black/30 hover:scale-110"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
