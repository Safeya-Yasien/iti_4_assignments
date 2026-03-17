import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
};
