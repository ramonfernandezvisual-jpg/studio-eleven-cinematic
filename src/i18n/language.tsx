import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LANGUAGE_KEY, resolveLocale, translations, type Locale } from "./translations";
const LanguageContext = createContext({ locale: "es" as Locale, t: translations.es as (typeof translations)[Locale], changeLocale: (_locale: Locale) => {} });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");
  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(LANGUAGE_KEY); } catch { /* Storage may be disabled. */ }
    setLocale(resolveLocale(saved, navigator.language));
  }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  function changeLocale(next: Locale) {
    setLocale(next);
    try { localStorage.setItem(LANGUAGE_KEY, next); } catch { /* Language remains usable without storage. */ }
  }
  return <LanguageContext.Provider value={{ locale, t: translations[locale], changeLocale }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
