import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export const Reveal = ({ children, width = "100%", delay = 0, direction = "up", duration = 1 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
    },
  };

  return (
    <div ref={ref} style={{ width, position: 'relative' }}> 
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ParallaxImage = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.05]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img 
        style={{ y, scale }}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  );
};

export const StaggerContainer = ({ children, className = "", delay = 0, staggerChildren = 0.1 }: { children: React.ReactNode, className?: string, delay?: number, staggerChildren?: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInItem = ({ children, className = "", direction = "up" }: { children: React.ReactNode, className?: string, direction?: "up" | "down" | "left" | "right" }) => {
    const variants: Variants = {
        hidden: { 
            opacity: 0, 
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            x: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        },
    }
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// Text Split Animation (Letters revealing)
export const TextReveal = ({ text, className = "" }: { text: string, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      ref={ref}
      // Added paddingBottom to prevent clipping of descenders (g, y, j, p, q)
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", paddingBottom: "0.2em", marginBottom: "-0.2em" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text.split("").map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);