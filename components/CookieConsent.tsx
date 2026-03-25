"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { X } from "lucide-react";

const cookieTexts = {
  hu: {
    text: "Ez a weboldal sütiket használ a legjobb felhasználói élmény biztosítása érdekében.",
    accept: "Elfogadom",
    decline: "Elutasítom",
  },
  en: {
    text: "This website uses cookies to ensure the best user experience.",
    accept: "Accept",
    decline: "Decline",
  },
  zh: {
    text: "本网站使用Cookie以确保最佳用户体验。",
    accept: "接受",
    decline: "拒绝",
  },
  th: {
    text: "เว็บไซต์นี้ใช้คุกกี้เพื่อประสบการณ์การใช้งานที่ดีที่สุด",
    accept: "ยอมรับ",
    decline: "ปฏิเสธ",
  },
};

export function CookieConsent() {
  const { locale } = useLanguage();
  // Start with false to match SSR output — avoids hydration mismatch
  const [dismissed, setDismissed] = useState(false);

  // Check localStorage AFTER hydration to avoid SSR/client mismatch
  useEffect(() => {
    if (localStorage.getItem("lumen-cookies") !== null) {
      setDismissed(true);
    }
  }, []);

  if (dismissed) return null;

  const t = cookieTexts[locale];

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem("lumen-cookies", accepted ? "accepted" : "declined");
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 animate-in" role="dialog" aria-label="Cookie consent">
      <div className="max-w-4xl mx-auto bg-[#0B0B0B]/95 backdrop-blur-xl border border-[#C6A15B]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 shadow-2xl shadow-black/50">
        <p className="text-sm text-[#EAEAEA]/70 flex-1 tracking-wide">
          {t.text}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleChoice(true)}
            className="px-6 py-2.5 bg-[#C6A15B] text-[#0B0B0B] text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-[#E5D5A0] transition-colors"
          >
            {t.accept}
          </button>
          <button
            onClick={() => handleChoice(false)}
            className="px-6 py-2.5 border border-[#EAEAEA]/20 text-[#EAEAEA]/60 text-xs uppercase tracking-[0.15em] rounded-full hover:border-[#EAEAEA]/40 hover:text-[#EAEAEA] transition-colors"
          >
            {t.decline}
          </button>
          <button
            onClick={() => handleChoice(false)}
            className="p-1.5 text-[#EAEAEA]/30 hover:text-[#EAEAEA] transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
