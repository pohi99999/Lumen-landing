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
      // A 20 px tab at the right edge on every width: the sections keep 24 px side padding, so a
      // text line always stays at least 4 px away from it, whatever the scroll position. The round
      // 46 px button it replaced covered text at 1280 px, and a 24 px tab touched line ends on phones.
      className="fixed bottom-8 right-0 z-50 flex h-11 w-5 items-center justify-center rounded-l-lg border border-r-0 border-[#C6A15B]/30 bg-[#3A0F14]/80 text-[#C6A15B] shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-300 hover:bg-[#C6A15B] hover:text-[#0B0B0B]"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
