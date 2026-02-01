import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const [index, setIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[800px] overflow-hidden bg-midnight group">
        <AnimatePresence mode="popLayout">
            <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
            >
                {/* Image with Ken Burns Effect */}
                <motion.img
                    src={images[index]}
                    alt={`Gallery view ${index + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1.15 }}
                    transition={{ duration: 10, ease: "linear" }}
                    loading="lazy"
                />
                
                {/* Subtle dark overlay for consistency */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" /> 
            </motion.div>
        </AnimatePresence>

        {/* Controls Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex justify-between items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             {/* Counter */}
             <div className="text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                {String(index + 1).padStart(2, '0')} <span className="text-white/40 mx-2">/</span> {String(images.length).padStart(2, '0')}
             </div>
             
             {/* Navigation */}
             <div className="flex gap-4">
                <button 
                    onClick={(e) => { e.preventDefault(); prevImage(); }}
                    className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-midnight transition-colors rounded-full backdrop-blur-sm group/btn"
                >
                    <ChevronLeft size={16} className="group-hover/btn:-translate-x-0.5 transition-transform" />
                </button>
                <button 
                    onClick={(e) => { e.preventDefault(); nextImage(); }}
                    className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-midnight transition-colors rounded-full backdrop-blur-sm group/btn"
                >
                    <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
             </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
            <motion.div 
                key={index}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-gold"
            />
        </div>
    </div>
  );
};