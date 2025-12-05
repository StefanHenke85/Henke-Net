import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './SimpleToggle.css';

const SimpleToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === 'simple' ? 'de' : 'simple');
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`simple-toggle ${language === 'simple' ? 'active' : ''}`}
      aria-label="Toggle Simple Mode"
      title={language === 'simple' ? 'Zurück zu Fachsprache' : 'Einfache Sprache (ohne IT-Fachbegriffe)'}
    >
      <span className="simple-icon">💡</span>
      <span className="simple-text">
        {language === 'simple' ? 'Simple' : 'Simple'}
      </span>
    </button>
  );
};

export default SimpleToggle;
