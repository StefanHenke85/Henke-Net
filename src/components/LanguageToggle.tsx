import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      className="language-toggle"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={language === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
    >
      {language === 'de' ? 'DE' : 'EN'}
    </motion.button>
  );
};

export default LanguageToggle;
