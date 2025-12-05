# 🚀 Henke-Net - Professional IT Portfolio & Consulting Website

<div align="center">

[![Website](https://img.shields.io/badge/Live-henke--net.com-blue?style=for-the-badge)](https://henke-net.com)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

Eine moderne, responsive Portfolio-Website für IT-Consulting & Development Services mit React, TypeScript und Framer Motion.

[Live Demo](https://henke-net.com) · [Report Bug](https://github.com/StefanHenke85/Henke-Net/issues) · [Request Feature](https://github.com/StefanHenke85/Henke-Net/issues)

</div>

---

## ✨ Features

### 🎨 Design & UX
- **Dark/Light Mode** - Persistente Theme-Auswahl mit localStorage
- **Mehrsprachigkeit** - Vollständige DE/EN Unterstützung mit Sprachpersistenz
- **Responsive Design** - Mobile-First mit Burger-Menü Navigation
- **Smooth Animations** - Framer Motion für elegante Übergänge und 3D-Effekte
- **Modern UI** - Gradient-Designs, Card-Layouts mit intensiven Schatten

### 📱 Mobile-Optimierung
- Adaptive Navigation mit animiertem Hamburger-Menü
- Touch-optimierte Interaktionen
- Responsive Breakpoints (968px, 480px)
- Mobile Overlay mit Backdrop-Blur

### 🌐 Internationalisierung
- Dynamischer Sprachwechsel ohne Reload
- Vollständig übersetzte Legal Pages (Impressum, Datenschutz)
- Persistente Sprachauswahl über Sessions hinweg

### ⚡ Performance
- Optimierte Production Builds
- Code-Splitting und Lazy Loading
- CSS-Optimierung mit Variablen
- Effiziente State-Management mit React Context

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI Framework
- **TypeScript 5.9** - Type Safety
- **Framer Motion** - Animations
- **React Router** - Client-Side Routing
- **CSS3** - Custom Properties, Grid, Flexbox

### Tools & Development
- **Create React App** - Build Setup
- **ESLint** - Code Linting
- **Git** - Version Control
- **Nginx** - Production Web Server

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ und npm
- Git

### Installation

```bash
# Repository klonen
git clone https://github.com/StefanHenke85/Henke-Net.git
cd Henke-Net/henke-net

# Dependencies installieren
npm install

# Development Server starten
npm start
```

Die App läuft auf [http://localhost:3001](http://localhost:3001)

### Build für Production

```bash
# Optimierten Build erstellen
npm run build

# Build testen (optional)
npm install -g serve
serve -s build
```

## 📁 Projekt-Struktur

```
henke-net/
├── public/
│   ├── index.html
│   ├── logo.svg
│   └── hero-banner.svg
├── src/
│   ├── components/
│   │   ├── Landing.tsx          # Hauptseite mit allen Sections
│   │   ├── Landing.css          # Styling mit Responsive Design
│   │   ├── LanguageToggle.tsx   # Sprachwechsel-Button
│   │   ├── ThemeToggle.tsx      # Dark/Light Mode Toggle
│   │   └── ScrollToTop.tsx      # Scroll-to-Top Button
│   ├── pages/
│   │   ├── Impressum.tsx        # Legal: Impressum (DE/EN)
│   │   └── Datenschutz.tsx      # Legal: Datenschutz (DE/EN)
│   ├── contexts/
│   │   ├── ThemeContext.tsx     # Theme State Management
│   │   └── LanguageContext.tsx  # Language State Management
│   ├── translations/
│   │   └── translations.ts      # DE/EN Übersetzungen
│   ├── styles/
│   │   └── Legal.css            # Legal Pages Styling
│   ├── App.tsx                  # Root Component mit Routing
│   └── index.tsx                # App Entry Point
└── package.json
```

## 🎯 Features im Detail

### Services Section
- **6 Service-Kategorien**: Cloud Infrastructure, Web Development, DevOps, Security, Consulting, Support
- Dynamisch generiert aus Translations
- 3D-Card-Effekte mit Hover-Animationen
- Feature-Listen für jeden Service

### About Section
- Professionelle Vorstellung
- Mission Statement
- Animierte Einblendungen

### Expertise/Skills Section
- **3 Skill-Kategorien**: Programmierung, Cloud & Infrastructure, DevOps & Tools
- Grid-Layout mit responsive Cards
- Hover-Effekte mit 3D-Rotationen

### Contact Section
- Direktlinks zu Email, Telefon, LinkedIn, GitHub
- Social Media Integration
- Professionelle Call-to-Action

### Legal Pages
- DSGVO-konforme Impressum & Datenschutz Seiten
- Vollständig übersetzt (DE/EN)
- Sticky Header mit Navigation
- Scroll-to-Top Funktionalität

## 🎨 Design System

### Color Scheme
```css
/* Dark Mode (Default) */
--bg-primary: #0a0e27;
--bg-secondary: #151b3d;
--text-primary: #e4e9f7;
--color-primary: #3b82f6;
--color-secondary: #8b5cf6;

/* Gradients */
--gradient-primary: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
```

### Typography
- Font Family: System UI Stack (optimierte Performance)
- Responsive Font Sizes mit clamp()
- Optimierte Line Heights für Lesbarkeit

### Shadows & Effects
- Layered Box Shadows für Tiefeneffekt
- Backdrop Filters für Glassmorphism
- Cubic-Bezier Easing für natürliche Animationen

## 🌍 Deployment

Die Website läuft produktiv auf einem VPS mit Nginx:

```bash
# Auf dem Server
cd /var/www/henke-net.com
git pull origin main
npm install --legacy-peer-deps
npm run build
cp -r build/* web/dist/
systemctl reload nginx
```

### Nginx Configuration
```nginx
server {
    listen 443 ssl http2;
    server_name henke-net.com www.henke-net.com;

    root /var/www/henke-net.com/web/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions sind willkommen! Bitte erstelle ein Issue oder Pull Request.

1. Fork das Projekt
2. Erstelle deinen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📝 License

Dieses Projekt ist unter der MIT License lizenziert - siehe [LICENSE](LICENSE) für Details.

## 👤 Author

**Stefan Henke**

- Website: [henke-net.com](https://henke-net.com)
- GitHub: [@StefanHenke85](https://github.com/StefanHenke85)
- LinkedIn: [Stefan Henke](https://www.linkedin.com/in/stefan-henke1985/)
- Email: info@henke-net.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library
- [shields.io](https://shields.io/) - Badges
- [GitHub README Stats](https://github.com/anuraghazra/github-readme-stats) - Stats Cards

---

<div align="center">

**⭐ Wenn dir dieses Projekt gefällt, gib ihm einen Star auf GitHub! ⭐**

Made with ❤️ by Stefan Henke

</div>
