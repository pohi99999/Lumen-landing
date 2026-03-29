"use client";

import { createContext, useContext, useCallback, ReactNode, useEffect, useSyncExternalStore } from "react";
import { type Locale, translations, type SiteTranslations } from "./translations";

interface LanguageContextType
{
    locale: Locale;
    setLocale: ( locale: Locale ) => void;
    t: SiteTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>( undefined );
const localeListeners = new Set<() => void>();
let currentLocale: Locale = "en";

function detectPreferredLocale (): Locale
{
    if ( typeof window === "undefined" )
    {
        return "en";
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

    return "en";
}

function getServerLocaleSnapshot (): Locale
{
    return "en";
}

function getClientLocaleSnapshot (): Locale
{
    if ( typeof window === "undefined" )
    {
        return currentLocale;
    }

    const preferredLocale = detectPreferredLocale();
    if ( currentLocale !== preferredLocale )
    {
        currentLocale = preferredLocale;
    }

    return currentLocale;
}

function subscribeToLocale ( listener: () => void ): () => void
{
    localeListeners.add( listener );
    return () => localeListeners.delete( listener );
}

function emitLocaleChange (): void
{
    localeListeners.forEach( listener => listener() );
}

export function LanguageProvider ( { children }: { children: ReactNode } )
{
    const locale = useSyncExternalStore( subscribeToLocale, getClientLocaleSnapshot, getServerLocaleSnapshot );

    useEffect( () =>
    {
        if ( typeof document !== "undefined" )
        {
            document.documentElement.lang = locale;
        }
    }, [locale] );

    const setLocale = useCallback( ( newLocale: Locale ) =>
    {
        currentLocale = newLocale;
        if ( typeof window !== "undefined" )
        {
            localStorage.setItem( "lumen-locale", newLocale );
            document.documentElement.lang = newLocale;
        }
        emitLocaleChange();
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
