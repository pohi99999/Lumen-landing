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
      // Below md: a 24 px tab in the right gutter (the sections keep 24 px side padding), so it never
      // covers text while scrolling. From md up: the round button as before.
      className="fixed bottom-8 right-0 z-50 flex h-11 w-6 items-center justify-center rounded-l-lg border border-r-0 border-[#C6A15B]/30 bg-[#3A0F14]/80 text-[#C6A15B] shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B] md:right-8 md:h-auto md:w-auto md:rounded-full md:border-r md:p-3 md:hover:scale-110"
    >
      <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
    </button>
  );
}
