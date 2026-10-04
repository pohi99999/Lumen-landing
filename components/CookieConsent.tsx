"use client";

import { useSyncExternalStore } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { X } from "lucide-react";

const COOKIE_STORAGE_KEY = "lumen-cookies";
const COOKIE_STORAGE_EVENT = "lumen-cookie-consent-changed";

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

export function CookieConsent ()
{
  const { locale } = useLanguage();
  const dismissed = useSyncExternalStore(
    ( onStoreChange ) =>
    {
      if ( typeof window === "undefined" )
      {
        return () => undefined;
      }

      const handleChange = () => onStoreChange();

      window.addEventListener( "storage", handleChange );
      window.addEventListener( COOKIE_STORAGE_EVENT, handleChange );

      return () =>
      {
        window.removeEventListener( "storage", handleChange );
        window.removeEventListener( COOKIE_STORAGE_EVENT, handleChange );
      };
    },
    () => typeof window !== "undefined" && localStorage.getItem( COOKIE_STORAGE_KEY ) !== null,
    () => false
  );

  if ( dismissed ) return null;

  const t = cookieTexts[locale];

  const handleChoice = ( accepted: boolean ) =>
  {
    localStorage.setItem( COOKIE_STORAGE_KEY, accepted ? "accepted" : "declined" );
    window.dispatchEvent( new Event( COOKIE_STORAGE_EVENT ) );
  };

  return (
    // On phones the banner is one compact row, so the first view keeps as much of the hero as possible.
    <div className="fixed inset-x-0 bottom-0 z-50 animate-in p-2 sm:p-4" role="dialog" aria-label="Cookie consent">
      <div className="mx-auto flex max-w-4xl flex-row items-center gap-3 rounded-2xl border border-[#C6A15B]/20 bg-[#0B0B0B]/95 px-3 py-2.5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:gap-4 sm:p-6">
        <p className="flex-1 text-[11px] leading-snug tracking-wide text-[#EAEAEA]/70 sm:text-sm">
          {t.text}
        </p>
        <div className="flex shrink-0 flex-col items-stretch gap-1.5 sm:flex-row sm:items-center sm:gap-3">
          <button
            onClick={() => handleChoice( true )}
            className="min-h-[32px] rounded-full bg-[#C6A15B] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#0B0B0B] transition-colors hover:bg-[#E5D5A0] sm:px-6 sm:py-2.5 sm:text-xs"
          >
            {t.accept}
          </button>
          <button
            onClick={() => handleChoice( false )}
            className="min-h-[32px] rounded-full border border-[#EAEAEA]/20 px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-[#EAEAEA]/60 transition-colors hover:border-[#EAEAEA]/40 hover:text-[#EAEAEA] sm:px-6 sm:py-2.5 sm:text-xs"
          >
            {t.decline}
          </button>
          <button
            onClick={() => handleChoice( false )}
            className="hidden p-1.5 text-[#EAEAEA]/30 hover:text-[#EAEAEA] transition-colors sm:block"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
