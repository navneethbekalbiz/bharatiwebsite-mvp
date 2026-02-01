import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Reveal } from './Animations';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Us', path: '/contact' },
];

export const Navbar = ({ onOpenBook }: { onOpenBook: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${isScrolled ? 'bg-midnight/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' : 'bg-gradient-to-b from-black/80 to-transparent py-6 border-b border-transparent'}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="z-50 group">
             <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-serif font-medium tracking-[0.15em] text-white group-hover:text-gold transition-colors duration-500">BHARATHI</span>
                <span className="text-xs font-sans font-medium uppercase tracking-[0.4em] text-gold/80 mt-1">Properties</span>
             </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {links.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => `text-[10px] xl:text-[11px] font-sans font-bold uppercase tracking-[0.15em] transition-all duration-500 relative group ${isActive ? 'text-gold' : 'text-white hover:text-gold'}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={onOpenBook}
              className="group relative px-6 py-3 overflow-hidden rounded-full bg-white text-midnight text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-gold hover:text-white transition-all duration-300 shadow-md"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} className="text-gold" /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-midnight z-[70] flex flex-col items-center justify-center pt-10"
          >
            <div className="flex flex-col space-y-6 text-center">
              {links.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  className="text-3xl md:text-4xl font-serif font-light text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="w-12 h-[1px] bg-gold/30 mx-auto my-6"></div>
              <button 
                onClick={onOpenBook}
                className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-gold border border-gold px-10 py-4 hover:bg-gold hover:text-midnight transition-colors"
              >
                Book a Viewing
              </button>
            </div>
            
            <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-8 right-8 text-white p-2"
            >
                <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const CTASection = ({ onOpenBook }: { onOpenBook: () => void }) => {
  return (
    <section className="relative py-32 bg-midnight overflow-hidden border-t border-white/5">
       <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2500" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight"></div>
       </div>

       <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <Reveal>
             <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Your New Beginning Awaits</span>
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-8 tracking-tight">
                Ready to Elevate <br className="hidden md:block"/> Your Lifestyle?
             </h2>
             <p className="text-gray-400 font-light text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                Whether you're seeking a private sanctuary or a high-yield investment, our concierge team is dedicated to finding your perfect match in Mangalore's most prestigious locales.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <button 
                  onClick={onOpenBook}
                  className="w-full sm:w-auto bg-white text-midnight px-10 py-5 text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-gold hover:text-white transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                >
                   Schedule Private Viewing
                </button>
                <Link 
                  to="/projects"
                  className="w-full sm:w-auto px-10 py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white border border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                   Explore Collection <ArrowRight size={16} />
                </Link>
             </div>
          </Reveal>
       </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="bg-midnight text-white pt-24 pb-8 border-t border-white/5 font-sans relative z-10">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif font-medium tracking-wide mb-6">BHARATHI<span className="text-gold">.</span></h2>
          <div className="space-y-4">
             <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light">
               Redefining skylines and lifestyles since 1998. Experience the pinnacle of architectural excellence in Mangalore.
             </p>
             <div className="flex gap-4 pt-4">
               <a href="https://www.facebook.com/p/Bharathi-Builders-and-Developers-61559742324999/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-midnight transition-colors cursor-pointer">
                  <Facebook size={14} />
               </a>
               <a href="https://www.instagram.com/bharathibuildersanddevelopers/?hl=en" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-midnight transition-colors cursor-pointer">
                  <Instagram size={14} />
               </a>
               <a href="https://www.linkedin.com/company/bharathi-builders-&-developers/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-midnight transition-colors cursor-pointer">
                  <Linkedin size={14} />
               </a>
             </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
           <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-6">Quick Links</h4>
           <ul className="space-y-3 text-xs font-light text-gray-400">
             <li><NavLink to="/" className="hover:text-gold transition-colors">Home</NavLink></li>
             <li><NavLink to="/about" className="hover:text-gold transition-colors">About Us</NavLink></li>
             <li><NavLink to="/projects" className="hover:text-gold transition-colors">Projects</NavLink></li>
             <li><NavLink to="/contact" className="hover:text-gold transition-colors">Contact Us</NavLink></li>
           </ul>
        </div>

        {/* Legal / Corporate */}
        <div>
           <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-6">Corporate</h4>
           <ul className="space-y-3 text-xs font-light text-gray-400">
             <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
             <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
             <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
             <li><a href="#" className="hover:text-gold transition-colors">Sitemap</a></li>
           </ul>
        </div>

        {/* Contact & Credai */}
        <div>
           <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-6">Get in Touch</h4>
           <ul className="space-y-3 text-xs font-light text-gray-400 mb-8">
             <li>info@bharathibuilders.com</li>
             <li>+91 98765 43210</li>
             <li>Mangalore, Karnataka, India</li>
           </ul>
           
           <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-4">Member Of</h4>
           <div className="flex flex-col gap-2">
             <div className="w-32 bg-white/10 p-2 rounded flex items-center justify-center">
                 <img src="https://placehold.co/120x40/0B0D10/ffffff?text=CREDAI" alt="Credai Mangalore" className="w-full opacity-80" />
             </div>
             <span className="text-[9px] uppercase tracking-wider text-gray-500">Mangalore Chapter</span>
           </div>
        </div>
      </div>
      
      {/* Disclaimer / Bottom */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 uppercase tracking-[0.1em] gap-4">
        <p>© 2025 Bharathi Builders. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center space-x-6">
          <span>Crafted By NotYourAverage</span>
        </div>
      </div>
    </div>
  </footer>
);