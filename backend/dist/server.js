"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || '5000', 10);
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Health Check
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        message: 'Henke-Net Backend läuft',
        timestamp: new Date().toISOString()
    });
});
// Services Endpoint
app.get('/api/services', (_req, res) => {
    const services = [
        {
            id: 1,
            title: 'Cloud-Infrastruktur',
            icon: '🚀',
            description: 'Design, Aufbau und Verwaltung von Cloud-Lösungen auf AWS, Azure und anderen Plattformen.',
            features: ['Architekturdesign', 'Migration zu Cloud', 'Infrastructure-as-Code', 'Kostenoptimierung']
        },
        {
            id: 2,
            title: 'Webentwicklung',
            icon: '💻',
            description: 'Moderne, skalierbare Web-Anwendungen mit aktuellen Technologien.',
            features: ['React & TypeScript', 'Node.js Backend', 'Responsive Design', 'Progressive Web Apps']
        },
        {
            id: 3,
            title: 'DevOps & CI/CD',
            icon: '⚙️',
            description: 'Automatisierung und Optimierung deiner Development & Deployment Prozesse.',
            features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure Management', 'Monitoring & Logging']
        },
        {
            id: 4,
            title: 'IT-Sicherheit',
            icon: '🔒',
            description: 'Sichere und robuste Systeme mit Best-Practices und Standards.',
            features: ['Security Audits', 'Access Management', 'Compliance & Standards', 'Incident Response']
        },
        {
            id: 5,
            title: 'Beratung',
            icon: '📊',
            description: 'Strategische IT-Beratung für deine digitale Transformation.',
            features: ['Technology Stack', 'Architecture Reviews', 'Best Practices', 'Team Development']
        },
        {
            id: 6,
            title: 'Wartung & Support',
            icon: '🛠️',
            description: 'Zuverlässiger technischer Support und Systemverwaltung.',
            features: ['24/7 Monitoring', 'Incident Management', 'Updates & Patches', 'Performance Tuning']
        }
    ];
    res.json(services);
});
// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        res.status(400).json({ error: 'Alle Felder sind erforderlich' });
        return;
    }
    // In Production würde hier eine Email versendet oder in DB gespeichert
    console.log('Neue Anfrage von:', { name, email, message });
    res.json({
        success: true,
        message: 'Danke für deine Anfrage! Ich werde mich bald mit dir in Verbindung setzen.'
    });
});
// Error Handler
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
});
// 404 Handler
app.use((_req, res) => {
    res.status(404).json({ error: 'Endpoint nicht gefunden' });
});
const server = app.listen(port, () => {
    console.log(`🚀 Henke-Net Backend läuft auf Port ${port}`);
    console.log(`   http://localhost:${port}/api/health`);
});
exports.default = server;
//# sourceMappingURL=server.js.map