"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import { type Locale, translations, type SiteTranslations } from "./translations";

interface LanguageContextType
{
    locale: Locale;
    setLocale: ( locale: Locale ) => void;
    t: SiteTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>( undefined );

function detectInitialLocale (): Locale
{
    if ( typeof window === "undefined" )
    {
        return "hu";
    }

    const stored = localStorage.getItem( "lumen-locale" );
    if ( stored === "hu" || stored === "en" || stored === "zh" || stored === "th" )
    {
        return stored;
    }

    const browserLang = navigator.language.slice( 0, 2 ).toLowerCase();
    if ( browserLang === "zh" )
    {
        return "zh";
    }

    if ( browserLang === "th" )
    {
        return "th";
    }

    return "hu";
}

export function LanguageProvider ( { children }: { children: ReactNode } )
{
    const [locale, setLocaleState] = useState<Locale>( detectInitialLocale );

    useEffect( () =>
    {
        if ( typeof document !== "undefined" )
        {
            document.documentElement.lang = locale;
        }
    }, [locale] );

    const setLocale = useCallback( ( newLocale: Locale ) =>
    {
        setLocaleState( newLocale );
        if ( typeof window !== "undefined" )
        {
            localStorage.setItem( "lumen-locale", newLocale );
            document.documentElement.lang = newLocale;
        }
    }, [] );

    const t = translations[locale];

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage ()
{
    const context = useContext( LanguageContext );
    if ( !context )
    {
        throw new Error( "useLanguage must be used within a LanguageProvider" );
    }
    return context;
}
