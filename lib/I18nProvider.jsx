"use client";

import { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations.json";

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
    setMounted(true);
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key, defaultValue = "") => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return defaultValue;
    }

    return value || defaultValue;
  };

  const tReplace = (key, variables = {}, defaultValue = "") => {
    let text = t(key, defaultValue);
    Object.entries(variables).forEach(([variable, value]) => {
      text = text.replace(new RegExp(`{${variable}}`, "g"), value);
    });
    return text;
  };

  return (
    <I18nContext.Provider value={{ language, switchLanguage, t, tReplace, mounted }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
};
