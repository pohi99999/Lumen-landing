"use client";

import { useSyncExternalStore } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { X } from "lucide-react";

const COOKIE_STORAGE_KEY = "lumen-cookies";
const COOKIE_STORAGE_EVENT = "lumen-cookie-consent-changed";

// The site sets no cookies. It only keeps the chosen language ("lumen-locale") and the
// fact that this notice was closed ("lumen-cookies") in localStorage, so the banner is a
// notice with one button, not a consent choice.
const cookieTexts = {
  hu: {
    text: "Ez az oldal nem használ sütiket. A böngésző csak a választott nyelvet és ennek az értesítésnek a bezárását tárolja.",
    ok: "Rendben",
  },
  en: {
    text: "This site uses no cookies. Your browser only stores your chosen language and that you closed this notice.",
    ok: "OK",
  },
  zh: {
    text: "本网站不使用Cookie。浏览器仅保存您选择的语言以及您已关闭此通知。",
    ok: "知道了",
  },
  th: {
    text: "เว็บไซต์นี้ไม่ใช้คุกกี้ เบราว์เซอร์จะจดจำเพียงภาษาที่คุณเลือกและการปิดข้อความนี้เท่านั้น",
    ok: "ตกลง",
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

  const handleClose = () =>
  {
    localStorage.setItem( COOKIE_STORAGE_KEY, "seen" );
    window.dispatchEvent( new Event( COOKIE_STORAGE_EVENT ) );
  };

  return (
    // On phones the banner is one compact row, so the first view keeps as much of the hero as possible.
    <div className="fixed inset-x-0 bottom-0 z-50 animate-in p-2 sm:p-4" role="dialog" aria-label="Storage notice">
      <div className="mx-auto flex max-w-4xl flex-row items-center gap-3 rounded-2xl border border-[#C6A15B]/20 bg-[#0B0B0B]/95 px-3 py-2.5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:gap-4 sm:p-6">
        <p className="flex-1 text-[11px] leading-snug tracking-wide text-[#EAEAEA]/70 sm:text-sm">
          {t.text}
        </p>
        <div className="flex shrink-0 flex-col items-stretch gap-1.5 sm:flex-row sm:items-center sm:gap-3">
          <button
            onClick={handleClose}
            className="min-h-[32px] rounded-full bg-[#C6A15B] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#0B0B0B] transition-colors hover:bg-[#E5D5A0] sm:px-6 sm:py-2.5 sm:text-xs"
          >
            {t.ok}
          </button>
          <button
            onClick={handleClose}
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
