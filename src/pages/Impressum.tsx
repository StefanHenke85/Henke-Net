import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import LanguageToggle from '../components/LanguageToggle';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/Legal.css';

const Impressum: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].impressum;

  const getLocaleDateString = () => {
    return new Date().toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US');
  };

  return (
    <div className="legal-page">
      {/* Header */}
      <header className="legal-header">
        <div className="legal-header-content">
          <a href="/" className="legal-home-link">
            ← {language === 'de' ? 'Zur Startseite' : 'Back to Home'}
          </a>
          <div className="legal-toggles">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="legal-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{t.title}</h1>

          <section className="legal-section">
            <h2>{t.legalNotice}</h2>

            <h3>{t.representative}</h3>
            <p>
              <strong>{t.name}:</strong> Stefan Henke<br />
              <strong>{t.address}:</strong> [Your address here]<br />
              <strong>{t.cityZip}:</strong> [City, ZIP here]<br />
              <strong>{t.country}:</strong> {language === 'de' ? 'Deutschland' : 'Germany'}
            </p>

            <h3>{t.contact}</h3>
            <p>
              <strong>{t.phone}:</strong> +49 1556 / 5612722<br />
              <strong>{t.email}:</strong> info@henke-net.com<br />
              <strong>{t.website}:</strong> www.henke-net.com
            </p>

            <h3>{t.vatId}</h3>
            <p>
              <strong>{t.vatIdLabel}:</strong> [Your VAT ID here]
            </p>
          </section>

          <section className="legal-section">
            <h2>{t.disclaimer}</h2>

            <h3>{t.contentLiability}</h3>
            <p>{t.contentLiabilityText}</p>

            <h3>{t.linkLiability}</h3>
            <p>{t.linkLiabilityText}</p>

            <h3>{t.copyright}</h3>
            <p>{t.copyrightText}</p>
          </section>

          <section className="legal-section">
            <h2>{t.privacy}</h2>
            <p>{t.privacyText}</p>
            <p>
              {t.privacyMore} <a href="/datenschutz">{t.privacyLink}</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>{t.dispute}</h2>
            <p>
              {t.disputeText} <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/</a> {language === 'de' ? 'zu finden ist.' : 'available.'}
            </p>
            <p>{t.disputeDecline}</p>
          </section>

          <p className="legal-updated">
            <em>{t.lastUpdated}: {getLocaleDateString()}</em>
          </p>

          <p className="legal-link">
            {t.backToHome} <a href="/">{t.home}</a> | <a href="/datenschutz">{t.privacyPolicy}</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;
