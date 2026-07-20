import { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "./translations";

const STORAGE_KEY = "pm_lang";
const LANG_CODES = ["DE", "FR", "IT"];

const getInitialLang = () => {
  if (typeof window === "undefined") return "DE";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANG_CODES.includes(saved)) return saved;
  } catch (e) {
    // ignore
  }
  return "DE";
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = (code) => {
    if (!LANG_CODES.includes(code)) return;
    setLangState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang.toLowerCase()] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
