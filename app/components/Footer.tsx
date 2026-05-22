"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const starVariants: Variants = {
    bounce: (i: number) => ({
      y: [0, -8, 0], // Cozy, floating vertical movement
      scale: [1, 1.15, 1], // Gives them a subtle twinkling pulse
      transition: {
        duration: 2.2, // Slightly slowed down for a smoother cosmic feel
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3, // Staggered ripple effect across the row
      },
    }),
  };

  return (
    <footer 
      className="relative py-12 border-t-[3px] border-[#F6F3EE] flex flex-col items-center justify-center gap-4 overflow-hidden"
      style={{ 
        /* The full-bleed background image setup without any blocking tints */
        backgroundImage: "url('/img/footer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated Star Row: Drop shadow added to pop flawlessly over raw background details */}
      <div className="flex gap-8 mb-1 relative z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={starVariants}
            animate="bounce"
            whileHover={{ scale: 1.3, color: "#eadeca", opacity: 1 }}
            className="text-[#F6F3EE] opacity-80 cursor-default transition-colors duration-300"
          >
            <Sparkles size={14} strokeWidth={2} />
          </motion.div>
        ))}
      </div>

      {/* Main Text Content */}
      <div className="flex flex-col items-center gap-1.5 z-10 text-center">
        {/* Crisp text shadow applied to combat busy image details */}
        <div 
          className="text-[9px] font-black text-[#F6F3EE] tracking-[0.4em] uppercase italic"
          style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 10px rgba(0, 0, 0, 0.5)' }}
        >
          Made with Art // StΛrR0t
        </div>
        
        <div 
          className="text-[9px] font-black text-[#F6F3EE] tracking-widest uppercase font-mono"
          style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.9), 0px 0px 8px rgba(0, 0, 0, 0.6)' }}
        >
          © {currentYear} StΛrR0t Architecture. All Rights Reserved.
        </div>
      </div>

      {/* Warm, soft ambient top border glow in theme Beige */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-[#F6F3EE]/40 blur-[1px] z-10" />
    </footer>
  );
}