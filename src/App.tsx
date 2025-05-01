import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import AiSolutions from './components/sections/AiSolutions';
import WebDevelopment from './components/sections/WebDevelopment';
import GraphicDesign from './components/sections/GraphicDesign';
import SeoStrategy from './components/sections/SeoStrategy';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Portfolio from './components/sections/Portfolio';
import TestimonialPage from './components/sections/TestimonialPage';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import CookiePolicy from './components/pages/CookiePolicy';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Services />
            <AiSolutions />
            <WebDevelopment />
            <GraphicDesign />
            <SeoStrategy />
            <About />
            <Stats />
            <Portfolio />
            <TestimonialPage />
            <Contact />
          </main>
        } />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-of-service" element={<TermsOfService />} />
<Route path="/cookie-policy" element={<CookiePolicy />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;