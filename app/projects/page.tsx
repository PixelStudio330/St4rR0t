"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import { 
  ExternalLink, 
  Star, 
  Heart, 
  MousePointer2, 
  Sparkles, 
  Users, 
  PawPrint, 
  ChefHat,
  ShoppingCart
} from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    }
  }
};

const tagVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1, 
    rotate: [0, -2, 2, 0], 
    transition: { duration: 0.2 } 
  }
};

export default function ProjectsPage() {
  const projects = [
    {
      id: 6,
      title: "Sun Cart Store",
      description: "A bright, high-performance e-commerce storefront currently under development. Focused on seamless transitions and a sun-kissed aesthetic.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      link: "https://suncart-store-wine.vercel.app/", 
      accent: "#AA0235", // Alabama Crimson
      items: ["Storefront - Ongoing", "Cart Logic - Pending", "Responsive Design - In Progress"],
      emoji: "☀️",
      type: "Ongoing Project"
    },
    {
      id: 5,
      title: "Chirp Heavens",
      description: "A professional bird shop template featuring a corporate-clean aesthetic. Built for high-conversion with a sophisticated product algorithm.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      link: "https://chirp-heaven.vercel.app/",
      accent: "#021233", // Cetacean Blue
      items: ["Bird Discovery - Product Algorithm", "Order Logistics - Live Tracking", "Functional Nest - Smart Cart"],
      emoji: "🐦",
      type: "Bird Shop Template"
    },
    {
      id: 4,
      title: "The Dum Pot",
      description: "A premium Biryani delivery experience. Featuring a complex state-managed ordering system, persistent cart logic, and a slow-cooked aesthetic.",
      tags: ["Next.js", "Framer Motion", "Tailwind", "Lucide"],
      link: "https://the-dum-pot.vercel.app/",
      accent: "#710755", // French Plum
      items: ["Smart Order Blocker - Live State", "Dynamic Menu - Interactive", "Persistent Feast - Cart Logic"],
      emoji: "🍲",
      type: "E-commerce Experience"
    },
    {
      id: 2,
      title: "Pawsky Wawsky",
      description: "A documentary-style pet sanctuary template designed for emotional storytelling. Features high-end performance with a scrapbook aesthetic.",
      tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
      link: "https://pawsky-wawsky-client.vercel.app/",
      accent: "#021233", // Cetacean Blue
      items: ["Pet Profiles - Live Demo", "Modern Architecture - Optimized"],
      emoji: "🐾",
      type: "Pet Shop Template"
    },
    {
      id: 1,
      title: "Honey Haze",
      description: "A cozy bakery management system and storefront. Built with a full-stack approach to handle delicious treats and orders with a sweet touch.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      link: "https://honey-haze.vercel.app/",
      accent: "#AA0235", // Alabama Crimson
      items: ["AI delivery man - Order tracker", "Interactive cart - Stunning UI"],
      emoji: "🍯",
      type: "Experimental Full-Stack Project"
    },
    {
      id: 3,
      title: "PixelStudio",
      description: "Our official creative agency HQ. A collaboration with Nova for building high-end, artsy digital solutions for global clients.",
      tags: ["Next.js", "TypeScript", "Tailwind", "React", "Vercel"],
      link: "https://pixel-studio-opal.vercel.app/",
      accent: "#710755", // French Plum
      items: ["Custom Web Design - Inquire", "Full-Stack Dev - Official"],
      emoji: "🎨",
      type: "Agency / Collaboration"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 md:p-10 space-y-12 selection:bg-[#AA0235] selection:text-[#F6F3EE]"
    >
      {/* HEADER SECTION */}
      <motion.div 
        variants={cardVariants}
        className="flex items-center gap-4 border-b-[3px] border-dashed border-[#F6F3EE]/60 pb-6"
      >
        <motion.div 
          animate={{ rotate: [3, -3, 3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="bg-[#69021E] text-[#F6F3EE] p-3 rounded-xl shadow-md border-2 border-[#69021E]"
        >
          <Star fill="currentColor" size={24} />
        </motion.div>
        <div>
          <h2 className="text-3xl font-[900] text-[#F6F3EE] uppercase tracking-tighter italic">The Archive</h2>
          <p className="text-sm font-black text-[#F6F3EE]/60 uppercase tracking-widest">Hand-crafted code & design</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={cardVariants}
            whileHover="hover"
            className="relative group col-span-1"
          >
            {/* Dark crisp drop shadow frame */}
            <div className="absolute inset-0 bg-[#69021E] rounded-[2.5rem] translate-x-3 translate-y-3 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
            
            {/* MAIN CARD BASE */}
            <div className="relative bg-[#F6F3EE] border-[4px] border-[#69021E] rounded-[2.5rem] p-7 shadow-md overflow-hidden h-full flex flex-col">
              
              {/* LIVE IFRAME CONTAINER */}
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full aspect-video bg-[#EFECE6] rounded-[1.5rem] border-[3px] border-dashed mb-6 overflow-hidden relative group/iframe shadow-inner"
                style={{ borderColor: project.accent }}
                whileHover={{ scale: 1.02 }}
              >
                <iframe 
                  src={project.link} 
                  title={`${project.title} Preview`}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] origin-top scale-[0.28] md:scale-[0.32] border-none pointer-events-none transition-all duration-300"
                  loading="lazy"
                />
                
                {/* INFINITE AUTOPLAYING GLASS SHINE EFFECT */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-150%', '250%'] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5, 
                      ease: "easeInOut",
                      repeatDelay: 1 // Pauses for a second before sweeping again
                    }}
                    className="w-1/2 h-full absolute top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg]"
                  />
                </div>

                <div 
                  className="absolute bottom-3 right-3 text-[#F6F3EE] text-[10px] px-3 py-1.5 rounded-lg font-black uppercase shadow-lg flex items-center gap-2 z-10 border border-white/10"
                  style={{ backgroundColor: project.accent }}
                >
                  <MousePointer2 size={10} /> Visit Live Site
                </div>
              </motion.a>

              {/* PROJECT INFO LABELS */}
              <div className="flex justify-between items-center mb-4">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-[#F6F3EE] px-4 py-1.5 rounded-full text-[10px] font-black border-[2.5px] border-[#69021E]/20 -rotate-1 shadow-md uppercase flex items-center gap-2"
                  style={{ backgroundColor: project.accent }}
                >
                  {project.id === 6 ? <ShoppingCart size={12} /> : project.id === 3 ? <Users size={12} /> : (project.id === 2 || project.id === 5) ? <PawPrint size={12} /> : project.id === 4 ? <ChefHat size={12} /> : <Sparkles size={12} />}
                  {project.type}
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Heart size={22} className="text-[#AA0235]" fill="#AA0235" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-[1000] text-[#030206] mb-2 uppercase tracking-tight">
                {project.title} {project.emoji}
              </h3>
              
              <p className="text-[15px] font-bold text-[#69021E]/70 leading-snug mb-6 italic">
                {project.description}
              </p>

              {/* PROJECT MANIFEST */}
              <div className="bg-[#EFECE6] border-[3px] border-[#69021E]/30 rounded-2xl p-5 mb-6 border-dashed">
                <span className="text-[11px] font-[1000] uppercase text-[#69021E]/70 block mb-3 tracking-[0.1em]">
                  📁 Project Manifest / Status:
                </span>
                <ul className="space-y-3">
                  {project.items?.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      whileHover={{ x: 5 }}
                      className="text-[13px] font-black text-[#030206] flex justify-between items-center"
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: project.accent }} />
                        {item.split(' - ')[0]}
                      </span>
                      <span className="text-[#69021E] bg-[#69021E]/5 px-2.5 py-1 rounded-md border-2 border-[#69021E]/10 text-[11px]">
                        {item.split(' - ')[1]}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* FOOTER ACTIONS */}
              <div className="mt-auto flex items-center justify-between pt-4 gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <motion.span 
                      key={tag} 
                      variants={tagVariants}
                      whileHover="hover"
                      className="text-[10px] font-black bg-[#69021E] text-[#F6F3EE] px-2.5 py-1 rounded shadow-sm uppercase border border-[#69021E]/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-[#69021E] text-[#F6F3EE] rounded-2xl shadow-lg border-[3px] border-[#69021E]"
                >
                  <ExternalLink size={20} strokeWidth={3} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER BANNER */}
<motion.div 
  variants={cardVariants}
  className="flex justify-center py-6 md:py-10 px-4 w-full"
>
  <motion.div 
    animate={{ y: [0, -5, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    className="bg-[#F6F3EE] px-6 py-3 md:px-10 md:py-4 rounded-2xl border-[3px] border-[#69021E] text-[10px] sm:text-xs md:text-sm font-[1000] text-[#69021E]/70 uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-xl rotate-1 whitespace-nowrap max-w-full text-center"
  >
    ⭐ More coming soon~ 🌙
  </motion.div>
</motion.div>
    </motion.div>
  );
}