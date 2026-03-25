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

export function LanguageProvider ( { children }: { children: ReactNode } )
{
    const [locale, setLocaleState] = useState<Locale>( "hu" );

    useEffect( () =>
    {
        // Detect browser language on mount
        const stored = typeof window !== "undefined" ? localStorage.getItem( "lumen-locale" ) : null;
        if ( stored && ( stored === "hu" || stored === "en" || stored === "zh" || stored === "th" ) )
        {
            setLocaleState( stored as Locale );
            document.documentElement.lang = stored;
        } else
        {
            const browserLang = navigator.language.slice( 0, 2 ).toLowerCase();
            const detected: Locale =
                browserLang === "hu" ? "hu" :
                    browserLang === "zh" ? "zh" :
                        browserLang === "th" ? "th" : "en";
            // Default to Hungarian for the brand
            // Only auto-switch for clear matches
            if ( browserLang === "zh" || browserLang === "th" )
            {
                setLocaleState( detected );
                document.documentElement.lang = detected;
            }
        }
    }, [] );

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
        <LanguageContext.Provider value={ { locale, setLocale, t } }>
            { children }
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
