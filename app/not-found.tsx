"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, HelpCircle, MoveLeft } from 'lucide-react';

export default function NotFound() {
  // Same bouncy logic as your footer, but randomized for more "cosmic" movement
  const starVariants: Variants = {
    bounce: (i: number) => ({
      y: [0, -12, 0],
      scale: [1, 1.2, 1],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  // Footer-style star variants for the top accent row
  const topRowStarVariants: Variants = {
    bounce: (i: number) => ({
      y: [0, -8, 0],
      scale: [1, 1.15, 1],
      transition: {
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3,
      },
    }),
  };

  return (
    <div className="min-h-[75vh] w-full flex flex-col items-center justify-center relative px-4 text-center py-12 overflow-hidden">
      
      {/* VINTAGE LEDGER GRID OVERLAY */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ 
          backgroundImage: 'linear-gradient(#F6F3EE 1px, transparent 1px), linear-gradient(90deg, #F6F3EE 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}
      />

      {/* AMBIENT BACKGROUND GLOW FOR VISUAL DEPTH */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#F6F3EE]/5 blur-[80px] rounded-full pointer-events-none z-0" />

      {/* BOUNCING STAR CLUSTER (BACKGROUND SPREAD) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={starVariants}
          animate="bounce"
          className="absolute text-[#F6F3EE] pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          style={{
            top: `${15 + (i * 10)}%`,
            left: `${8 + (i * 12)}%`,
          }}
        >
          <Sparkles size={i % 2 === 0 ? 12 : 18} strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* MAIN CONTENT BLOCK */}
      <div className="relative z-10 flex flex-col items-center max-w-lg">
        
        {/* TOP ACCENT STAR ROW (From your Footer layout, dropped flawlessly over the top) */}
        <div className="flex gap-6 mb-4 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`top-star-${i}`}
              custom={i}
              variants={topRowStarVariants}
              animate="bounce"
              whileHover={{ scale: 1.3, color: "#eadeca", opacity: 1 }}
              className="text-[#F6F3EE] opacity-80 cursor-default transition-colors duration-300"
            >
              <Sparkles size={14} strokeWidth={2} />
            </motion.div>
          ))}
        </div>

        {/* BIG DESIGNER 404 GLYPH */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6"
        >
          <h1 
            className="text-[120px] md:text-[180px] font-black text-[#F6F3EE] tracking-tighter leading-none select-none"
            style={{ textShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)' }}
          >
            404
          </h1>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-[#F6F3EE] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            <HelpCircle size={40} strokeWidth={1} />
          </motion.div>
        </motion.div>

        {/* TYPOGRAPHY AND DESCRIPTION */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-[#F6F3EE]/70 font-mono leading-relaxed max-w-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            The coordinates you requested lead into an empty sector of the ledger. 
            The ink has faded, and this page has drifted beyond the borders.
          </p>
        </div>

        {/* BACK TO DASHBOARD ACTION */}
        <motion.div 
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10"
        >
          <Link href="/">
            <div className="px-8 py-3 rounded-full border-[1px] border-[#F6F3EE]/30 text-[#F6F3EE] font-black text-[10px] tracking-[0.2em] uppercase flex items-center gap-3 bg-[#F6F3EE]/5 hover:bg-[#F6F3EE]/15 hover:border-[#F6F3EE]/60 transition-all duration-300 shadow-md backdrop-blur-sm">
              <MoveLeft size={12} className="transition-transform group-hover:-translate-x-1" />
              Return to Safe Harbor
            </div>
          </Link>
        </motion.div>
      </div>

      {/* SOFT AMBIENT BOTTOM BORDER GLOW (Ties back into the architecture styling) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-[#F6F3EE]/20 blur-[1px] z-10" />
    </div>
  );
}