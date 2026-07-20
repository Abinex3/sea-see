import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext(null);

const FONT_CLASS = {
  en: "font-latin",
  ta: "font-tamil",
  ml: "font-malayalam",
  hi: "font-devanagari",
};

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("sea-see-lang", lang);
  };

  useEffect(() => {
    const saved = localStorage.getItem("sea-see-lang");
    if (saved) changeLanguage(saved);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <div className={FONT_CLASS[language] || "font-latin"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);