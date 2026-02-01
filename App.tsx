import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, CTASection } from './components/Layout';
import { HomePage } from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { Modal, SiteVisitForm } from './components/UI';
import { AnimatePresence } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Custom Cursor Component
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      
      // Add slight delay to outline for fluid feel
      if (outlineRef.current) {
        outlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 500, fill: 'forwards' });
      }
    };

    const handleHoverEvents = () => {
      const hoverables = document.querySelectorAll('a, button, input, select, textarea, .cursor-hover');
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    handleHoverEvents();

    // Re-bind hover events on DOM changes (simple MutationObserver could be better but this works for route changes mostly)
    const observer = new MutationObserver(handleHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </div>
  );
};

const AppContent = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="font-sans antialiased text-white selection:bg-gold selection:text-midnight bg-midnight">
      <CustomCursor />
      <ScrollToTop />
      <Navbar onOpenBook={() => setIsBookModalOpen(true)} />
      
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Show CTA Section everywhere except Contact page where it might be redundant with the form */}
      {location.pathname !== '/contact' && (
        <CTASection onOpenBook={() => setIsBookModalOpen(true)} />
      )}
      
      <Footer />

      <Modal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} title="Private Consultation">
        <SiteVisitForm onClose={() => setIsBookModalOpen(false)} />
      </Modal>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;