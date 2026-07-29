"use client";

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion'; 
import { 
  ExternalLink, 
  Star, 
  Heart, 
  MousePointer2, 
  Sparkles, 
  Users, 
  PawPrint, 
  ChefHat,
  ShoppingCart,
  Github,
  Info,
  X,
  Code2,
  Database,
  Image as ImageIcon
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDetails?: string;
  tags: string[];
  link: string;
  github?: string;         // Single fallback link
  githubFrontend?: string; // Dedicated Frontend Repo
  githubBackend?: string;  // Dedicated Backend Repo
  accent: string;
  items: string[];
  emoji: string;
  type: string;
}

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 8,
      title: "Chitrabeethi",
      description: "An online art gallery showcase featuring traditional and digital artwork exhibits with smooth dynamic curation.",
      fullDetails: "Chitrabeethi is a full-stack art curation platform. Built with Next.js App Router on the frontend and an independent backend service to handle gallery dynamics, artwork exhibits, and client communications seamlessly.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
      link: "https://chitrabeethi-client-ten.vercel.app/",
      githubFrontend: "https://github.com/Mst-Gulnahar/chitrabeethi-client",
      githubBackend: "https://github.com/Mst-Gulnahar/chitrabeethi-server",
      accent: "#710755", // French Plum
      items: ["Gallery Showcase - Live", "Backend API - Active", "Artwork Exhibits - Dynamic"],
      emoji: "🖼️",
      type: "Full-Stack Gallery"
    },
    {
      id: 7,
      title: "Cinnabloom Bakery",
      description: "A cozy bakery storefront and order management app serving sweet treats and handcrafted pastries.",
      fullDetails: "Cinnabloom Bakery features full dynamic menu listings, order handling state logic, and relational data architecture powered by MySQL to track bakery products and orders reliably.",
      tags: ["Next.js", "TypeScript", "Tailwind", "MySQL"],
      link: "https://cinnabloom-bakery.vercel.app/",
      githubFrontend: "https://github.com/Mst-Gulnahar/cinnabloom-bakery",
      githubBackend: "https://github.com/Mst-Gulnahar/cinnabloom-bakery-server",
      accent: "#AA0235", // Alabama Crimson
      items: ["Bakery Menu - Live", "Order API - Functional", "Product DB - Integrated"],
      emoji: "🥐",
      type: "Food Delivery App"
    },
    {
      id: 6,
      title: "Sun Cart Store",
      description: "A bright, high-performance e-commerce storefront currently under development. Focused on seamless transitions and a sun-kissed aesthetic.",
      fullDetails: "Sun Cart Store focuses on building an effortless shopping user experience. Built with Next.js App Router and Framer Motion for organic page transitions.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      link: "https://suncart-store-wine.vercel.app/", 
      github: "https://github.com/PixelStudio330/suncart-store",
      accent: "#AA0235", // Alabama Crimson
      items: ["Storefront - Ongoing", "Cart Logic - Pending", "Responsive Design - In Progress"],
      emoji: "☀️",
      type: "Ongoing Project"
    },
    {
      id: 5,
      title: "Chirp Heavens",
      description: "A professional bird shop template featuring a corporate-clean aesthetic. Built for high-conversion with a sophisticated product algorithm.",
      fullDetails: "Chirp Heavens bridges clean corporate structure with a playful product showcase. Includes specialized sorting algorithms for bird care packages and modular TypeScript architecture.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      link: "https://chirp-heaven.vercel.app/",
      github: "https://github.com/PixelStudio330/chirp-heaven",
      accent: "#021233", // Cetacean Blue
      items: ["Bird Discovery - Product Algorithm", "Order Logistics - Live Tracking", "Functional Nest - Smart Cart"],
      emoji: "🐦",
      type: "Bird Shop Template"
    },
    {
      id: 4,
      title: "The Dum Pot",
      description: "A premium Biryani delivery experience. Featuring a complex state-managed ordering system, persistent cart logic, and a slow-cooked aesthetic.",
      fullDetails: "Designed to make food ordering visually mouth-watering and technically seamless. Implements client-side state persistence to ensure user cart items remain saved.",
      tags: ["Next.js", "Framer Motion", "Tailwind", "Lucide"],
      link: "https://the-dum-pot.vercel.app/",
      github: "https://github.com/PixelStudio330/the-dum-pot",
      accent: "#710755", // French Plum
      items: ["Smart Order Blocker - Live State", "Dynamic Menu - Interactive", "Persistent Feast - Cart Logic"],
      emoji: "🍲",
      type: "E-commerce Experience"
    },
    {
      id: 2,
      title: "Pawsky Wawsky",
      description: "A documentary-style pet sanctuary template designed for emotional storytelling. Features high-end performance with a scrapbook aesthetic.",
      fullDetails: "Pawsky Wawsky is a sanctuary platform showcasing adoption profiles, care stories, and interactive pet logs built with robust frontend rendering optimization.",
      tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
      link: "https://pawsky-wawsky-client.vercel.app/",
      githubFrontend: "https://github.com/PixelStudio330/pawsky-wawsky-client",
      githubBackend: "https://github.com/PixelStudio330/pawsky-wawsky-server",
      accent: "#021233", // Cetacean Blue
      items: ["Pet Profiles - Live Demo", "Modern Architecture - Optimized"],
      emoji: "🐾",
      type: "Pet Shop Template"
    },
    {
      id: 1,
      title: "Honey Haze",
      description: "A cozy bakery management system and storefront. Built with a full-stack approach to handle delicious treats and orders with a sweet touch.",
      fullDetails: "A full-stack bakery web app powered by PostgreSQL and Prisma ORM. Handles full data persistence for bakery items and dynamic order tracking.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      link: "https://honey-haze.vercel.app/",
      github: "https://github.com/PixelStudio330/honey-haze",
      accent: "#AA0235", // Alabama Crimson
      items: ["AI delivery man - Order tracker", "Interactive cart - Stunning UI"],
      emoji: "🍯",
      type: "Experimental Full-Stack Project"
    },
    {
      id: 3,
      title: "PixelStudio",
      description: "Our official creative agency HQ. A collaboration with Nova for building high-end, artsy digital solutions for global clients.",
      fullDetails: "The main studio landing page and agency site showcasing high-end portfolio work, client services, and custom design systems.",
      tags: ["Next.js", "TypeScript", "Tailwind", "React", "Vercel"],
      link: "https://pixel-studio-opal.vercel.app/",
      github: "https://github.com/PixelStudio330/pixel_studio",
      accent: "#710755", // French Plum
      items: ["Custom Web Design - Inquire", "Full-Stack Dev - Official"],
      emoji: "🎨",
      type: "Agency / Collaboration"
    }
  ];

  return (
    <>
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
              className="relative group col-span-1 flex flex-col"
            >
              {/* Dark crisp drop shadow frame */}
              <div className="absolute inset-0 bg-[#69021E] rounded-[2.5rem] translate-x-3 translate-y-3 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform pointer-events-none" />
              
              {/* MAIN CARD BASE */}
              <div className="relative bg-[#F6F3EE] border-[4px] border-[#69021E] rounded-[2.5rem] p-7 shadow-md overflow-hidden h-full flex flex-col justify-between">
                
                <div>
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
                    
                    {/* GLASS SHINE */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <motion.div 
                        animate={{ x: ['-150%', '250%'] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2.5, 
                          ease: "easeInOut",
                          repeatDelay: 1 
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
                      {project.id === 8 ? <ImageIcon size={12} /> : project.id === 6 ? <ShoppingCart size={12} /> : project.id === 3 ? <Users size={12} /> : (project.id === 2 || project.id === 5) ? <PawPrint size={12} /> : (project.id === 4 || project.id === 7) ? <ChefHat size={12} /> : <Sparkles size={12} />}
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
                          className="text-[13px] font-black text-[#030206] flex justify-between items-center gap-2"
                        >
                          <span className="flex items-center gap-3 min-w-0">
                            <div className="w-2.5 h-2.5 rounded-full shadow-sm shrink-0" style={{ backgroundColor: project.accent }} />
                            <span className="truncate">{item.split(' - ')[0]}</span>
                          </span>
                          <span className="text-[#69021E] bg-[#69021E]/5 px-2.5 py-1 rounded-md border-2 border-[#69021E]/10 text-[11px] shrink-0 font-extrabold">
                            {item.split(' - ')[1]}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* FOOTER ACTIONS & VIEW DETAILS BUTTON */}
                <div className="space-y-4 pt-2">
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

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-dashed border-[#69021E]/20">
                    {/* VIEW DETAILS BUTTON */}
                    <motion.button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#AA0235] text-[#F6F3EE] py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider border-b-[3px] border-[#69021E] shadow-sm hover:brightness-110 transition-all cursor-pointer"
                    >
                      <Info size={15} />
                      <span>Details</span>
                    </motion.button>

                    {/* DUAL OR SINGLE GITHUB REPO LINKS */}
                    {project.githubFrontend && (
                      <motion.a 
                        href={project.githubFrontend} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.05, rotate: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-2.5 py-2.5 bg-[#030206] text-[#F6F3EE] rounded-xl shadow-md border-[2px] border-[#69021E] flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider"
                        title="Frontend Repo"
                      >
                        <Code2 size={14} />
                        <span className="hidden sm:inline">Frontend</span>
                      </motion.a>
                    )}

                    {project.githubBackend && (
                      <motion.a 
                        href={project.githubBackend} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-2.5 py-2.5 bg-[#030206] text-[#F6F3EE] rounded-xl shadow-md border-[2px] border-[#69021E] flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider"
                        title="Backend Repo"
                      >
                        <Database size={14} />
                        <span className="hidden sm:inline">Backend</span>
                      </motion.a>
                    )}

                    {project.github && !project.githubFrontend && !project.githubBackend && (
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 bg-[#030206] text-[#F6F3EE] rounded-xl shadow-md border-[2px] border-[#69021E]"
                        title="GitHub Repo"
                      >
                        <Github size={18} />
                      </motion.a>
                    )}

                    {/* LIVE LINK */}
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 bg-[#69021E] text-[#F6F3EE] rounded-xl shadow-md border-[2px] border-[#69021E]"
                      title="Live Site"
                    >
                      <ExternalLink size={18} strokeWidth={2.5} />
                    </motion.a>
                  </div>
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

      {/* DETAILS MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-[#030206]/75 backdrop-blur-sm z-50 p-4 sm:p-6 flex items-start justify-center pt-28 sm:pt-36"
          >
            <motion.div
              initial={{ scale: 0.92, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 15, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F6F3EE] border-[4px] border-[#69021E] rounded-[2.5rem] pt-4 pb-5 px-5 sm:px-7 max-w-lg w-full h-[60vh] mt-6 shadow-[8px_8px_0px_0px_#69021E] relative flex flex-col overflow-hidden"
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-1.5 bg-[#AA0235] text-[#F6F3EE] rounded-xl border-2 border-[#69021E] hover:bg-[#69021E] transition-colors cursor-pointer z-20 shadow-sm"
              >
                <X size={16} />
              </button>

              {/* MODAL HEADER */}
              <div className="pr-10 shrink-0 pb-2 border-b border-dashed border-[#69021E]/20">
                <div 
                  className="inline-flex items-center gap-1.5 text-[#F6F3EE] px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase mb-1 border border-[#69021E]/20"
                  style={{ backgroundColor: selectedProject.accent }}
                >
                  <Sparkles size={10} /> {selectedProject.type}
                </div>
                <h3 className="text-lg sm:text-xl font-[1000] text-[#030206] uppercase tracking-tight leading-tight">
                  {selectedProject.title} {selectedProject.emoji}
                </h3>
              </div>

              {/* SCROLLABLE BODY CONTENT */}
              <div className="flex-1 min-h-0 overflow-y-auto space-y-3.5 py-3 pr-1.5 scrollbar-thin scrollbar-thumb-[#69021E]">
                {/* EXTENDED DESCRIPTION */}
                <div className="text-xs sm:text-sm text-[#030206]/85 leading-relaxed bg-[#EFECE6] p-3 rounded-2xl border-[2px] border-dashed border-[#69021E]/30 space-y-1">
                  <span className="font-black text-[#69021E] uppercase text-[10px] tracking-widest block">
                    📌 Project Overview
                  </span>
                  <p className="font-bold">{selectedProject.fullDetails || selectedProject.description}</p>
                </div>

                {/* MANIFEST LIST */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-[1000] uppercase text-[#69021E]/80 block tracking-[0.1em]">
                    📁 Status Manifest
                  </span>
                  <ul className="space-y-1.5">
                    {selectedProject.items.map((item, idx) => (
                      <li key={idx} className="text-xs font-black text-[#030206] flex items-center justify-between gap-2 bg-white/70 p-2 rounded-xl border border-[#69021E]/15 shadow-sm">
                        <span className="flex items-center gap-2 min-w-0">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: selectedProject.accent }} />
                          <span className="truncate">{item.split(' - ')[0]}</span>
                        </span>
                        <span className="text-[#69021E] text-[9px] font-black uppercase bg-[#69021E]/10 px-2 py-0.5 rounded-md shrink-0 border border-[#69021E]/10">
                          {item.split(' - ')[1]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECH STACK TAGS */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-black bg-[#69021E] text-[#F6F3EE] px-2 py-0.5 rounded shadow-sm uppercase tracking-wide"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER ACTION BUTTONS */}
              <div className="pt-2.5 border-t border-dashed border-[#69021E]/20 shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.githubFrontend && (
                  <a
                    href={selectedProject.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#030206] text-[#F6F3EE] py-2 px-3 rounded-xl font-black text-xs uppercase tracking-wider border-b-[3px] border-[#69021E] shadow-sm hover:brightness-125 transition-all"
                  >
                    <Code2 size={14} />
                    <span>Frontend Repo</span>
                  </a>
                )}

                {selectedProject.githubBackend && (
                  <a
                    href={selectedProject.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#030206] text-[#F6F3EE] py-2 px-3 rounded-xl font-black text-xs uppercase tracking-wider border-b-[3px] border-[#69021E] shadow-sm hover:brightness-125 transition-all"
                  >
                    <Database size={14} />
                    <span>Backend Repo</span>
                  </a>
                )}

                {selectedProject.github && !selectedProject.githubFrontend && !selectedProject.githubBackend && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#030206] text-[#F6F3EE] py-2 px-3 rounded-xl font-black text-xs uppercase tracking-wider border-b-[3px] border-[#69021E] shadow-sm hover:brightness-125 transition-all"
                  >
                    <Github size={14} />
                    <span>Repository</span>
                  </a>
                )}
                
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#AA0235] text-[#F6F3EE] py-2 px-3 rounded-xl font-black text-xs uppercase tracking-wider border-b-[3px] border-[#69021E] shadow-sm hover:brightness-110 transition-all col-span-1 sm:col-span-1"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}