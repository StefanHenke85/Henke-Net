import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaRocket, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import SimpleToggle from './SimpleToggle';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import './Landing.css';

const Landing: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderShrunk(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Tawk Live Chat Widget
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/676f2b6049e06e12b224f0c4/1iiq74p34';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.body.appendChild(s1);

    return () => {
      if (document.body.contains(s1)) {
        document.body.removeChild(s1);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // 3D Card variants with perspective
  const card3DVariants = {
    hidden: { opacity: 0, rotateY: -90, z: -100 },
    visible: (i: number) => ({
      opacity: 1,
      rotateY: 0,
      z: 0,
      transition: { delay: i * 0.12, duration: 0.7 },
    }),
  };

  const serviceIcons = ['🚀', '💻', '⚙️', '🔒', '📊', '🛠️'];
  const serviceKeys = ['cloudInfra', 'webDev', 'devops', 'security', 'consulting', 'support'] as const;

  const services = serviceKeys.map((key, i) => ({
    id: i + 1,
    icon: serviceIcons[i],
    title: t.services.items[key].title,
    desc: t.services.items[key].desc,
    features: t.services.items[key].features,
  }));

  const skills = t.skills || [
    {
      category: 'Programmierung',
      items: ['JavaScript / TypeScript', 'React & Vue.js', 'Node.js & Express', 'Python', 'SQL & NoSQL', 'HTML5 & CSS3'],
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['AWS (EC2, RDS, S3, Lambda)', 'Microsoft Azure', 'Docker & Kubernetes', 'Linux Administration', 'Terraform & IaC'],
    },
    {
      category: 'DevOps & Tools',
      items: ['CI/CD Pipelines', 'GitHub Actions', 'Monitoring (Prometheus, ELK)', 'Git', 'Test Automation', 'Ansible'],
    },
  ];

  return (
    <div className="landing-container">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className={`header ${isHeaderShrunk ? 'shrunk' : ''}`}>
        <div className="header-content">
          <div className="logo-container">
            <img src="/logo.svg" alt="Henke-Net Logo" className="logo-image" />
            <div className="logo-text">
              <h1 className="brand-name">HENKE-NET</h1>
              <p className="company-line">IT-Solutions & Consulting</p>
              <p className="tagline">by Stefan Henke</p>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </button>

          <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.services}</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.about}</a>
            <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.expertise}</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.contact}</a>
            <a href="#contact" className="cta-button" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.startProject}</a>
            <div className="mobile-toggles">
              <LanguageToggle />
              <SimpleToggle />
              <ThemeToggle />
            </div>
          </nav>
          <div className="header-toggles">
            <LanguageToggle />
            <SimpleToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-banner">
            <img src="/hero-banner.svg" alt="Hero Banner Background" className="banner-image" />
          </div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="#contact"
                className="primary-button"
                whileHover={{ scale: 1.1, rotateZ: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket /> {t.hero.startProject}
              </motion.a>
              <motion.a
                href="#services"
                className="secondary-button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.learnMore}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-decoration"
            animate={{ y: [0, 25, 0], rotateZ: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <FaArrowDown size={32} />
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t.services.title}</h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className="service-card"
                custom={i}
                variants={card3DVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.6 }
                }}
              >
                <motion.div
                  className="service-icon"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                >
                  {service.icon}
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul>
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>{t.about.title}</h2>
            <div className="about-text">
              <p>{t.about.intro}</p>
              <p>{t.about.experience}</p>
              <p>
                <strong>{t.about.missionLabel}</strong> {t.about.mission}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="expertise-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t.expertise.title}</h2>
            <p className="section-subtitle">{t.expertise.subtitle}</p>
          </motion.div>

          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skillGroup: any, i: number) => (
              <motion.div
                key={i}
                className="skill-card"
                variants={card3DVariants}
                custom={i}
                whileHover={{
                  y: -12,
                  rotateX: 8,
                  rotateY: -5,
                  scale: 1.05,
                  transition: { duration: 0.6 }
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut'
                  }
                }}
              >
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill: string, idx: number) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t.contact.title}</h2>
            <p className="contact-intro">{t.contact.intro}</p>

            <div className="contact-methods">
              <motion.a
                href="mailto:info@henke-net.com"
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <FaEnvelope size={32} />
                <h3>{t.contact.email}</h3>
                <p>info@henke-net.com</p>
              </motion.a>

              <motion.a
                href="tel:+4915565612722"
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <FaPhone size={32} />
                <h3>{t.contact.phone}</h3>
                <p>+49 1556 / 5612722</p>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/stefan-henke1985/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <FaLinkedin size={32} />
                <h3>LinkedIn</h3>
                <p>{t.contact.myProfile}</p>
              </motion.a>

              <motion.a
                href="https://github.com/StefanHenke85"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <FaGithub size={32} />
                <h3>GitHub</h3>
                <p>{t.contact.myProjects}</p>
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Stefan Henke - {t.footer.copyright}</p>
          <div className="footer-links">
            <a href="#services">{t.nav.services}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#expertise">{t.nav.expertise}</a>
            <a href="#contact">{t.nav.contact}</a>
            <a href="/impressum">{t.footer.impressum}</a>
            <a href="/datenschutz">{t.footer.privacy}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
