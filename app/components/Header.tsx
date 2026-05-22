"use client";
import React, { useState } from 'react';
import { RotateCw, Search, X, Menu, Star } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: 'Dashboard', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Skills', path: '/skills' },
  ];

  return (
    <div className="z-[60] relative select-none">
      
      {/* --- UNIFIED SINGLE BROWSER BAR CONTAINER --- */}
      <div 
        className="bg-[#69021E] border-b-[3px] border-[#69021E] bg-cover bg-center relative overflow-hidden flex flex-col"
        style={{ 
          // Uses exactly one image for the entire top bar ecosystem
          backgroundImage: "url('/img/navbar.jpg')", 
        }}
      >
        
        {/* --- SECTION 1: TOP ROW (Brand Title & Global Controls) --- */}
        <header className="p-3 flex items-center justify-between relative z-10">
          {/* URL Branding Tag */}
          <div className="flex items-center gap-2 px-4 py-1.5 bg-[#030206]/60 rounded-full border border-[#AA0235]/40 backdrop-blur-sm shadow-inner relative z-10">
            <motion.div 
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-5 h-5 rounded-full bg-[#F6F3EE] flex items-center justify-center text-[10px] shadow-sm"
            >
              🌙
            </motion.div>
            <span className="text-[10px] md:text-xs font-black tracking-widest text-[#F6F3EE] uppercase truncate max-w-[150px] md:max-w-none font-mono">
              https://stΛrr0t.world
            </span>
          </div>

          <div className="flex gap-2 items-center relative z-10">
            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-[#F6F3EE] border-[3px] border-[#030206] flex items-center justify-center text-[#69021E] shadow-[3px_3px_0px_0px_#030206] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              {isOpen ? <X size={18} strokeWidth={3} /> : <Menu size={18} strokeWidth={3} />}
            </button>

            {/* Window Controls */}
            <div className="hidden sm:flex gap-1.5">
              <div className="w-6 h-6 rounded-md bg-[#F6F3EE]/10 border border-[#F6F3EE]/20 flex items-center justify-center text-[#F6F3EE]/60 text-[10px] font-bold cursor-default hover:text-[#F6F3EE] transition-colors">-</div>
              <div className="w-6 h-6 rounded-md bg-[#F6F3EE]/10 border border-[#F6F3EE]/20 flex items-center justify-center text-[#F6F3EE]/60 text-[9px] font-bold cursor-default hover:text-[#F6F3EE] transition-colors">▢</div>
              <div className="w-6 h-6 rounded-md bg-[#F6F3EE] border-2 border-[#030206] flex items-center justify-center text-[#69021E] text-xs shadow-sm cursor-pointer hover:bg-[#AA0235] hover:text-[#F6F3EE] transition-colors">
                <X size={12} strokeWidth={3}/>
              </div>
            </div>
          </div>
        </header>

        {/* --- SECTION 2: MIDDLE ROW (Integrated URL Search Utility Input) --- */}
        <div className="p-2 pt-0 flex items-center gap-3 bg-[#030206]/15 backdrop-blur-[1px] relative z-10">
          <div className="hidden sm:flex text-[#AA0235] ml-2 hover:text-[#F6F3EE] hover:rotate-180 transition-all duration-500 cursor-pointer">
            <RotateCw size={14} strokeWidth={3} />
          </div>
          <div className="flex-1 bg-[#F6F3EE]/90 border-2 border-[#69021E] rounded-md px-4 py-1.5 text-xs font-bold text-[#F6F3EE]/80 flex justify-between items-center shadow-inner group font-mono">
            <span className="truncate text-[#69021E] opacity-70 group-hover:opacity-100 transition-opacity tracking-wide">
              stΛrr0t.world{pathname === "/" ? "" : pathname}
            </span>
            <Search size={14} className="text-[#AA0235] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" strokeWidth={2.5} />
          </div>
        </div>

      </div>

      {/* --- 3. BOTTOM TAB WRAPPER BAR (IMAGEABLE BEIGE SECTOR) --- */}
      <nav 
        className="hidden md:flex bg-[#F6F3EE] px-8 border-b-[3px] border-[#69021E] items-end gap-1 h-14 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(105, 2, 30, 0.03) 1px, transparent 1px)',
          backgroundSize: '100% 8px'
        }}
      >
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <Link key={tab.path} href={tab.path} className="h-full flex items-end relative">
              <motion.div
                whileHover={isActive ? {} : { y: -1 }}
                className={`px-6 h-10 flex items-center justify-center text-xs font-black uppercase tracking-wider font-mono transition-all rounded-t-xl border-t-[3px] border-x-[3px] min-w-[130px] ${
                  isActive
                    ? 'bg-[#69021E] text-[#F6F3EE] border-[#69021E] z-10 -mb-[3px] h-[44px] shadow-[0px_-4px_8px_rgba(3,2,6,0.12)]'
                    : 'bg-[#EFECE6] text-[#69021E]/60 border-[#69021E]/30 hover:text-[#69021E] hover:bg-[#F6F3EE]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab.name}
                  {isActive && <Star size={10} fill="#F6F3EE" className="text-[#F6F3EE]" />}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="md:hidden bg-[#F6F3EE] border-b-[3px] border-[#69021E] overflow-hidden shadow-2xl relative z-50"
          >
            <div className="p-4 space-y-2 bg-[#021233]/5">
              {tabs.map((tab) => (
                <Link 
                  key={tab.path} 
                  href={tab.path}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    className={`px-5 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-between transition-all font-mono border-[3px] ${
                      pathname === tab.path 
                        ? 'bg-[#69021E] text-[#F6F3EE] border-[#030206] shadow-[4px_4px_0px_0px_#030206]' 
                        : 'text-[#69021E]/70 bg-[#EFECE6] border-transparent hover:text-[#69021E] hover:bg-[#E3DFD5]'
                    }`}
                  >
                    {tab.name}
                    {pathname === tab.path && <Star size={12} fill="#F6F3EE" className="text-[#F6F3EE]" />}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}