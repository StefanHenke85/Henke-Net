# Henke-Net - IT-Dienstleistungen Portfolio

Eine moderne Portfolio-Seite für IT-Dienstleistungen mit React Frontend und Express Backend.

## Features

- Modernes, responsives Design (Gradient, Card-Layout, Hover-Effekte)
- Service-Übersicht mit 6 IT-Dienstleistungen
- Fachkompetenz-Bereich (Programmierung, Cloud, DevOps)
- Contact-Section mit direkten Kontaktmöglichkeiten
- API Backend für zukünftige Erweiterungen
- Local Development Setup ready

## Quick Start

### 1. Frontend starten (React)

```bash
cd henke-net
npm start
```

Frontend läuft dann auf: http://localhost:3000

### 2. Backend starten (Express) - in neuem Terminal

```bash
cd henke-net/backend
npm start
```

Backend läuft dann auf: http://localhost:5000

## API Endpoints

- `GET /api/health` - Health Check des Servers
- `GET /api/services` - Alle 6 Services abrufen
- `POST /api/contact` - Kontakt-Formular submitten

## Projekt-Struktur

```
henke-net/
├── src/
│   ├── components/
│   │   ├── Landing.js       # Hauptkomponente mit allen Seiten
│   │   └── Landing.css      # Modernes Styling
│   ├── App.js               # Root-Komponente
│   ├── App.css              # Global Styles
│   ├── index.js
│   └── index.css
├── public/
│   ├── index.html
│   └── img/
│       └── headerhenke-net.jpg
├── backend/
│   ├── server.js            # Express Server mit API Routes
│   ├── package.json
│   └── .env                 # Environment Variablen
└── README.md
```

## Technologien

- **Frontend**: React 19, CSS3 (Grid, Flexbox, Gradients)
- **Backend**: Node.js, Express 4.21.2
- **Tools**: CORS, Dotenv

## Features im Detail

### Landing Page
- Header mit Navigation (sticky)
- Intro Section mit Gradient-Hintergrund
- Service Cards (6 Services mit Hover-Effekten)
- About Section
- Expertise/Skills (3 Kategorien in Grid)
- Contact Section mit Links
- Footer

### Design
- Modernes Gradient: #667eea → #764ba2
- Responsive Grid-Layout
- Card-basiertes Design
- Smooth Transitions & Hover-States
- Mobile-first Responsive Design

## Nächste Schritte / TODOs

- [ ] LinkedIn URL aktualisieren
- [ ] Contact Form mit Email-Versand konfigurieren
- [ ] Projekt-Portfolio hinzufügen
- [ ] Admin-Panel für Content-Verwaltung
- [ ] Datenbankanbindung (für Kontakt-Anfragen)
- [ ] Production Deployment (Heroku, AWS, Vercel)
- [ ] SEO-Optimierung
- [ ] Analytics integrieren

## Tipps

- Die Frontend läuft auf Port 3000 und hat einen Proxy zu Port 5000 (backend) konfiguriert
- API-Anfragen können einfach mit `fetch('/api/...')` gemacht werden
- Beide Services müssen laufen für volle Funktionalität

## Scripts

**Frontend:**
- `npm start` - Development Server starten
- `npm run build` - Production Build
- `npm test` - Tests starten

**Backend:**
- `npm start` - Server starten
- `npm dev` - Development (aktuell identisch mit start)
