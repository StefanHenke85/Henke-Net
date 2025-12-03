import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');
  const [mounted, setMounted] = useState(false);

  // On mount: Check localStorage, otherwise default to German
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;

    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setLanguage('de');
    }
    setMounted(true);
  }, []);

  // Save language changes to localStorage
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('language', language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'de' ? 'en' : 'de'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
