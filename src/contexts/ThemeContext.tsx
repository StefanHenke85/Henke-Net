import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [mounted, setMounted] = useState(false);

  // Beim Mount: Überprüfe localStorage und System-Preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (!prefersDark) {
      setTheme('light');
    }
    setMounted(true);
  }, []);

  // Speichere Theme-Änderungen und aktualisiere DOM
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'light') {
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.style.colorScheme = 'dark';
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
