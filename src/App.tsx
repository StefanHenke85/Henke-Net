import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Landing from './components/Landing';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
            </Routes>
            <ScrollToTop />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
