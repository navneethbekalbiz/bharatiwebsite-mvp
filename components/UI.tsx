import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { LeadIntent } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-midnight/90 backdrop-blur-sm z-[60]"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 m-auto w-full max-w-md h-fit bg-white z-[70] p-12 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            {title && <h3 className="text-xl font-serif text-midnight">{title}</h3>}
            <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
              <X size={24} className="text-midnight" />
            </button>
          </div>
          {children}
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export const SiteVisitForm = ({ onClose }: { onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2000);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center">
             <Check size={32} className="text-gold" />
          </div>
        </motion.div>
        <h4 className="text-2xl font-serif mb-4">Request Received</h4>
        <p className="text-gray-500 font-light text-sm">Our concierge will contact you shortly to confirm your appointment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
         <div className="border-b border-gray-300 pb-2">
           <input type="text" placeholder="Full Name" required className="w-full outline-none text-midnight placeholder-gray-400 font-serif" />
         </div>
         <div className="border-b border-gray-300 pb-2">
           <input type="tel" placeholder="Phone Number" required className="w-full outline-none text-midnight placeholder-gray-400 font-serif" />
         </div>
         <div className="border-b border-gray-300 pb-2">
            <input type="date" required className="w-full outline-none text-gray-600 font-serif uppercase text-sm" />
         </div>
      </div>
      <button type="submit" className="w-full bg-midnight text-white py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold transition-colors duration-500">
        Confirm Request
      </button>
    </form>
  );
};

export const BrochureUnlockForm = ({ onUnlock }: { onUnlock: () => void }) => {
  const [intent, setIntent] = useState<LeadIntent>('Self-use');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUnlock();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-xs text-gray-500 font-light uppercase tracking-widest">Register to view exclusive content</p>
      </div>
      
      <div className="flex gap-4 mb-4">
        {['Self-use', 'Investment'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setIntent(type as LeadIntent)}
            className={`flex-1 py-3 text-xs uppercase tracking-widest transition-all ${intent === type ? 'bg-gold text-midnight font-bold' : 'border border-gray-200 text-gray-400 hover:border-gray-400'}`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div className="border-b border-gray-300 pb-2">
           <input type="text" placeholder="Full Name" required className="w-full outline-none text-midnight placeholder-gray-400 font-serif" />
        </div>
        <div className="border-b border-gray-300 pb-2">
           <input type="email" placeholder="Email Address" required className="w-full outline-none text-midnight placeholder-gray-400 font-serif" />
        </div>
      </div>
      
      <button type="submit" className="w-full bg-midnight text-white py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold transition-colors duration-500">
        Access Content
      </button>
    </form>
  );
};

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <Modal isOpen={isVisible} onClose={() => setIsVisible(false)} title="Investment Opportunities">
      <div className="text-center">
        <p className="text-gray-500 font-light mb-8 text-sm leading-relaxed">Download our 2025 Market Report and discover upcoming high-yield opportunities in Dubai and beyond.</p>
        <button className="w-full bg-gold text-midnight py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-midnight hover:text-white transition-colors duration-500 mb-4">
          Download Report
        </button>
        <button onClick={() => setIsVisible(false)} className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-midnight">
          Close
        </button>
      </div>
    </Modal>
  );
};