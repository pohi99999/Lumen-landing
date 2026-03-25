"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { type Locale, localeNames } from "@/lib/translations";
import { Globe } from "lucide-react";

const localeFlags: Record<Locale, string> = {
    hu: "🇭🇺",
    en: "🇬🇧",
    zh: "🇨🇳",
    th: "🇹🇭",
};

export function LanguageSwitcher ()
{
    const { locale, setLocale } = useLanguage();
    const [isOpen, setIsOpen] = useState( false );
    const ref = useRef<HTMLDivElement>( null );

    useEffect( () =>
    {
        function handleClickOutside ( event: MouseEvent )
        {
            if ( ref.current && !ref.current.contains( event.target as Node ) )
            {
                setIsOpen( false );
            }
        }
        document.addEventListener( "mousedown", handleClickOutside );
        return () => document.removeEventListener( "mousedown", handleClickOutside );
    }, [] );

    return (
        <div ref={ ref } className="fixed top-6 right-6 z-50" style={{ position: 'fixed', top: '1.5rem', right: '1.5rem', zIndex: 50 }}>
            <button
                onClick={ () => setIsOpen( !isOpen ) }
                className="flex items-center gap-2 px-4 py-2.5 bg-black/60 backdrop-blur-md border border-[#C6A15B]/30 rounded-full text-sm text-[#EAEAEA] hover:border-[#C6A15B]/70 hover:bg-black/80 transition-all duration-300 shadow-lg shadow-black/20"
                aria-label="Change language"
            >
                <Globe className="w-4 h-4 text-[#C6A15B]" />
                <span className="text-xs tracking-wider">{ localeFlags[locale] } { localeNames[locale] }</span>
            </button>

            { isOpen && (
                <div className="absolute top-full right-0 mt-2 py-2 bg-black/90 backdrop-blur-xl border border-[#C6A15B]/20 rounded-xl shadow-2xl shadow-black/40 min-w-[160px] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    { ( Object.keys( localeNames ) as Locale[] ).map( ( loc ) => (
                        <button
                            key={ loc }
                            onClick={ () =>
                            {
                                setLocale( loc );
                                setIsOpen( false );
                            } }
                            className={ `w-full px-5 py-3 text-left text-sm flex items-center gap-3 transition-all duration-200 ${ locale === loc
                                    ? "bg-[#C6A15B]/15 text-[#C6A15B]"
                                    : "text-[#EAEAEA]/80 hover:bg-[#C6A15B]/10 hover:text-[#EAEAEA]"
                                }` }
                        >
                            <span className="text-base">{ localeFlags[loc] }</span>
                            <span className="tracking-wide">{ localeNames[loc] }</span>
                            { locale === loc && (
                                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                            ) }
                        </button>
                    ) ) }
                </div>
            ) }
        </div>
    );
}
