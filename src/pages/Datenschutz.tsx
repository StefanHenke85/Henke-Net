import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import LanguageToggle from '../components/LanguageToggle';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/Legal.css';

const Datenschutz: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].datenschutz;

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
            <h2>{t.overview}</h2>

            <h3>{t.generalHints}</h3>
            <p>{t.overviewText}</p>

            <h3>{t.dataCollection}</h3>
            <p>
              <strong>{t.whoResponsible}</strong><br />
              {t.whoResponsibleText}
            </p>

            <p>
              <strong>{t.howCollect}</strong><br />
              {t.howCollectText}
            </p>

            <p>
              <strong>{t.whatFor}</strong><br />
              {t.whatForText}
            </p>

            <p>
              <strong>{t.yourRights}</strong><br />
              {t.yourRightsText}
            </p>
          </section>

          <section className="legal-section">
            <h2>{t.generalInfo}</h2>

            <h3>{t.dataSecurity}</h3>
            <p>{t.dataSecurityText}</p>

            <h3>{t.withdrawal}</h3>
            <p>{t.withdrawalText}</p>

            <h3>{t.complaint}</h3>
            <p>{t.complaintText}</p>
          </section>

          <section className="legal-section">
            <h2>{t.dataCollection2}</h2>

            <h3>{t.serverLogs}</h3>
            <p>{t.serverLogsText}</p>
            <ul>
              {t.serverLogsItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>{t.serverLogsNote}</p>

            <h3>{t.contactForm}</h3>
            <p>{t.contactFormText}</p>
          </section>

          <section className="legal-section">
            <h2>{t.analyticsAds}</h2>

            <h3>{t.googleAnalytics}</h3>
            <p>{t.googleAnalyticsText1}</p>
            <p>{t.googleAnalyticsText2}</p>
            <p>{t.googleAnalyticsText3}</p>

            <h3>{t.tawkChat}</h3>
            <p>
              {t.tawkChatText} <a href="https://www.tawk.to/privacy-policy" target="_blank" rel="noopener noreferrer">
              https://www.tawk.to/privacy-policy</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>{t.plugins}</h2>

            <h3>{t.youtube}</h3>
            <p>{t.youtubeText1}</p>
            <p>{t.youtubeText2}</p>

            <h3>{t.googleFonts}</h3>
            <p>{t.googleFontsText1}</p>
            <p>{t.googleFontsText2}</p>
          </section>

          <section className="legal-section">
            <h2>{t.rights}</h2>

            <h3>{t.infoRight}</h3>
            <p>{t.infoRightText}</p>
            <ul>
              {t.infoRightItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3>{t.correctionRight}</h3>
            <p>{t.correctionRightText}</p>

            <h3>{t.deletionRight}</h3>
            <p>{t.deletionRightText}</p>
            <ul>
              {t.deletionRightItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3>{t.portabilityRight}</h3>
            <p>{t.portabilityRightText}</p>

            <h3>{t.contactDpa}</h3>
            <p>
              {t.contactDpaText}<br />
              <strong>Stefan Henke</strong><br />
              E-Mail: <a href="mailto:info@henke-net.com">info@henke-net.com</a><br />
              Telefon: <a href="tel:+4915565612722">+49 1556 / 5612722</a>
            </p>
          </section>

          <section className="legal-section">
            <h2>{t.security}</h2>

            <p>{t.securityText1}</p>
            <p>{t.securityText2}</p>
          </section>

          <section className="legal-section">
            <h2>{t.changes}</h2>

            <p>{t.changesText}</p>
          </section>

          <p className="legal-updated">
            <em>{t.lastUpdated}: {getLocaleDateString()}</em>
          </p>

          <p className="legal-link">
            {t.backToHome} <a href="/">{t.home}</a> | <a href="/impressum">{t.impressumLink}</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;
