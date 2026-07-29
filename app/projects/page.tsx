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
  ImageIcon,
  AlertTriangle,
  Zap,
  Rocket
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDetails?: string;
  challenges?: string[];
  hardFeature?: string;
  futurePlans?: string[];
  tags: string[];
  link: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
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
      challenges: [
        "Handling high-resolution image rendering without page latency.",
        "Synchronizing dynamic gallery state across independent frontend & backend setups."
      ],
      hardFeature: "Dynamic Image Optimization Pipeline & Decoupled API Auth State",
      futurePlans: [
        "Interactive 3D Virtual Art Exhibition Room (Three.js / WebGL)",
        "Artist Commissions Booking System & Direct Payment Gateway Integration",
        "AI-Powered Artwork Tagging & Aesthetic Search Filters"
      ],
      tags: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
      link: "https://chitrabeethi-client-ten.vercel.app/",
      githubFrontend: "https://github.com/Mst-Gulnahar/chitrabeethi-client",
      githubBackend: "https://github.com/Mst-Gulnahar/chitrabeethi-server",
      accent: "#710755",
      items: ["Gallery Showcase - Live", "Backend API - Active", "Artwork Exhibits - Dynamic"],
      emoji: "🖼️",
      type: "Full-Stack Gallery"
    },
    {
      id: 7,
      title: "Cinnabloom Bakery",
      description: "A cozy bakery storefront and order management app serving sweet treats and handcrafted pastries.",
      fullDetails: "Cinnabloom Bakery features full dynamic menu listings, order handling state logic, and relational data architecture powered by MySQL to track bakery products and orders reliably.",
      challenges: [
        "Structuring complex relational database queries for real-time inventory management.",
        "Preventing dynamic order state mismatch during rapid item additions."
      ],
      hardFeature: "Relational MySQL Transaction Handlers for Live Order Management",
      futurePlans: [
        "Custom Cake Builder with Live Visual Decorator Preview",
        "SMS Order Status Notifications (Twilio / SMS Gateway)",
        "Subscription Box Service for Fresh Weekly Baked Goods"
      ],
      tags: ["Next.js", "TypeScript", "Tailwind", "MySQL"],
      link: "https://cinnabloom-bakery.vercel.app/",
      githubFrontend: "https://github.com/Mst-Gulnahar/cinnabloom-bakery",
      githubBackend: "https://github.com/Mst-Gulnahar/cinnabloom-bakery-server",
      accent: "#AA0235",
      items: ["Bakery Menu - Live", "Order API - Functional", "Product DB - Integrated"],
      emoji: "🥐",
      type: "Food Delivery App"
    },
    {
      id: 6,
      title: "Sun Cart Store",
      description: "A bright, high-performance e-commerce storefront currently under development. Focused on seamless transitions and a sun-kissed aesthetic.",
      fullDetails: "Sun Cart Store focuses on building an effortless shopping user experience. Built with Next.js App Router and Framer Motion for organic page transitions.",
      challenges: [
        "Ensuring smooth 60fps Framer Motion transitions across complex layout shifts.",
        "Optimizing multi-device responsiveness for dense card components."
      ],
      hardFeature: "Shared Layout Animations during Fast Route Navigation",
      futurePlans: [
        "Stripe & SSLCommerz Multi-Currency Checkout Integration",
        "User Wishlist & Saved Cart Syncing across Browsers",
        "AR Product Preview Mode for Mobile Users"
      ],
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      link: "https://suncart-store-wine.vercel.app/", 
      github: "https://github.com/PixelStudio330/suncart-store",
      accent: "#AA0235",
      items: ["Storefront - Ongoing", "Cart Logic - Pending", "Responsive Design - In Progress"],
      emoji: "☀️",
      type: "Ongoing Project"
    },
    {
      id: 5,
      title: "Chirp Heavens",
      description: "A professional bird shop template featuring a corporate-clean aesthetic. Built for high-conversion with a sophisticated product algorithm.",
      fullDetails: "Chirp Heavens bridges clean corporate structure with a playful product showcase. Includes specialized sorting algorithms for bird care packages and modular TypeScript architecture.",
      challenges: [
        "Writing type-safe filter criteria across deeply nested bird species traits.",
        "Creating custom interactive sorting triggers without sacrificing speed."
      ],
      hardFeature: "Multi-Filter Real-time Search Algorithm in Pure TypeScript",
      futurePlans: [
        "Interactive Bird Species Compatibility Quiz Tool",
        "Live Veterinary Q&A Consultation Booking System",
        "Automated Bird Seed Subscription Management Dashboard"
      ],
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      link: "https://chirp-heaven.vercel.app/",
      github: "https://github.com/PixelStudio330/chirp-heaven",
      accent: "#021233",
      items: ["Bird Discovery - Product Algorithm", "Order Logistics - Live Tracking", "Functional Nest - Smart Cart"],
      emoji: "🐦",
      type: "Bird Shop Template"
    },
    {
      id: 4,
      title: "The Dum Pot",
      description: "A premium Biryani delivery experience. Featuring a complex state-managed ordering system, persistent cart logic, and a slow-cooked aesthetic.",
      fullDetails: "Designed to make food ordering visually mouth-watering and technically seamless. Implements client-side state persistence to ensure user cart items remain saved.",
      challenges: [
        "Handling complex item customization modifiers (spiciness, portions, add-ons).",
        "Keeping cart state perfectly synchronized with localStorage across browser refreshes."
      ],
      hardFeature: "Persistent Local Storage State Manager with Custom Modifiers",
      futurePlans: [
        "Real-Time Delivery Driver GPS Tracking Integration",
        "Group Order Mode (Shareable Cart Link for Friends)",
        "Loyalty Rewards Program & Discount Coupon Engine"
      ],
      tags: ["Next.js", "Framer Motion", "Tailwind", "Lucide"],
      link: "https://the-dum-pot.vercel.app/",
      github: "https://github.com/PixelStudio330/the-dum-pot",
      accent: "#710755",
      items: ["Smart Order Blocker - Live State", "Dynamic Menu - Interactive", "Persistent Feast - Cart Logic"],
      emoji: "🍲",
      type: "E-commerce Experience"
    },
    {
      id: 2,
      title: "Pawsky Wawsky",
      description: "A documentary-style pet sanctuary template designed for emotional storytelling. Features high-end performance with a scrapbook aesthetic.",
      fullDetails: "Pawsky Wawsky is a sanctuary platform showcasing adoption profiles, care stories, and interactive pet logs built with robust frontend rendering optimization.",
      challenges: [
        "Maintaining a vintage scrapbook aesthetic using strict modern grid layouts.",
        "Handling multi-media modal views smoothly on small viewports."
      ],
      hardFeature: "Dynamic Scrapbook Micro-Animations & Responsive Dynamic Overlays",
      futurePlans: [
        "Pet Adoption Matching Questionnaire with AI Recommendation Engine",
        "Pet Health Record Tracker & Vaccine Reminder Calendar",
        "Community Pet Adoption Story Submissions & Forum"
      ],
      tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
      link: "https://pawsky-wawsky-client.vercel.app/",
      githubFrontend: "https://github.com/PixelStudio330/pawsky-wawsky-client",
      githubBackend: "https://github.com/PixelStudio330/pawsky-wawsky-server",
      accent: "#021233",
      items: ["Pet Profiles - Live Demo", "Modern Architecture - Optimized"],
      emoji: "🐾",
      type: "Pet Shop Template"
    },
    {
      id: 1,
      title: "Honey Haze",
      description: "A cozy bakery management system and storefront. Built with a full-stack approach to handle delicious treats and orders with a sweet touch.",
      fullDetails: "A full-stack bakery web app powered by PostgreSQL and Prisma ORM. Handles full data persistence for bakery items and dynamic order tracking.",
      challenges: [
        "Managing PostgreSQL schema migrations safely in development.",
        "Synchronizing live delivery status transitions dynamically."
      ],
      hardFeature: "Real-time Order Status Pipeline via Prisma ORM & PostgreSQL",
      futurePlans: [
        "WebSocket Integration for Instant Kitchen Order Alerts",
        "Multi-Branch Store Inventory Syncing",
        "Customer Review & Star Rating System with Photo Uploads"
      ],
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      link: "https://honey-haze.vercel.app/",
      github: "https://github.com/PixelStudio330/honey-haze",
      accent: "#AA0235",
      items: ["AI delivery man - Order tracker", "Interactive cart - Stunning UI"],
      emoji: "🍯",
      type: "Experimental Full-Stack Project"
    },
    {
      id: 3,
      title: "PixelStudio",
      description: "Our official creative agency HQ. A collaboration with Nova for building high-end, artsy digital solutions for global clients.",
      fullDetails: "The main studio landing page and agency site showcasing high-end portfolio work, client services, and custom design systems.",
      challenges: [
        "Crafting a cohesive agency brand identity using customized design tokens.",
        "Balancing heavy motion graphic design with optimal web core vitals."
      ],
      hardFeature: "Custom Motion Design System built with Reusable Framer Motion Wrappers",
      futurePlans: [
        "Interactive Project Cost Estimator & Quote Generator",
        "Client Portal for Real-time Project Progress Tracking",
        "Blog & Design System Case Study Hub"
      ],
      tags: ["Next.js", "TypeScript", "Tailwind", "React", "Vercel"],
      link: "https://pixel-studio-opal.vercel.app/",
      github: "https://github.com/PixelStudio330/pixel_studio",
      accent: "#710755",
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
              <div className="absolute inset-0 bg-[#69021E] rounded-[2.5rem] translate-x-3 translate-y-3 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform pointer-events-none" />
              
              <div className="relative bg-[#F6F3EE] border-[4px] border-[#69021E] rounded-[2.5rem] p-7 shadow-md overflow-hidden h-full flex flex-col justify-between">
                <div>
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

      {/* DETAILS MODAL OVERLAY - STRICT TOP PADDING TO PREVENT CUTOFF */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-[#030206]/75 backdrop-blur-sm z-50 p-4 sm:p-6 flex items-start justify-center overflow-y-auto pt-50 sm:pt-50 pb-10"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F6F3EE] border-[4px] border-[#69021E] rounded-[2rem] pt-5 pb-4 px-4 sm:px-6 max-w-lg w-full h-[60vh] max-h-[520px] shadow-[8px_8px_0px_0px_#69021E] relative flex flex-col overflow-hidden shrink-0"
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-1.5 bg-[#AA0235] text-[#F6F3EE] rounded-xl border-2 border-[#69021E] hover:bg-[#69021E] transition-colors cursor-pointer z-20 shadow-sm"
              >
                <X size={15} />
              </button>

              {/* MODAL HEADER */}
              <div className="pr-10 shrink-0 pb-2 border-b border-dashed border-[#69021E]/20">
                <div 
                  className="inline-flex items-center gap-1 text-[#F6F3EE] px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black uppercase mb-1 border border-[#69021E]/20"
                  style={{ backgroundColor: selectedProject.accent }}
                >
                  <Sparkles size={9} /> {selectedProject.type}
                </div>
                <h3 className="text-base sm:text-lg font-[1000] text-[#030206] uppercase tracking-tight leading-tight">
                  {selectedProject.title} {selectedProject.emoji}
                </h3>
              </div>

              {/* SCROLLABLE BODY CONTENT */}
              <div className="flex-1 min-h-0 overflow-y-auto space-y-3 py-3 pr-1 scrollbar-thin scrollbar-thumb-[#69021E]">
                {/* EXTENDED DESCRIPTION */}
                <div className="text-xs text-[#030206]/85 leading-relaxed bg-[#EFECE6] p-2.5 rounded-xl border-[2px] border-dashed border-[#69021E]/30 space-y-0.5">
                  <span className="font-black text-[#69021E] uppercase text-[9px] tracking-widest block">
                    📌 Project Overview
                  </span>
                  <p className="font-bold">{selectedProject.fullDetails || selectedProject.description}</p>
                </div>

                {/* HARD FEATURE HIGHLIGHT */}
                {selectedProject.hardFeature && (
                  <div className="bg-[#69021E]/10 p-2.5 rounded-xl border-[2px] border-[#69021E]/30 space-y-0.5">
                    <span className="font-black text-[#AA0235] uppercase text-[9px] tracking-widest flex items-center gap-1">
                      <Zap size={11} /> Key Technical Challenge / Hard Feature
                    </span>
                    <p className="text-xs font-black text-[#030206]">
                      {selectedProject.hardFeature}
                    </p>
                  </div>
                )}

                {/* CHALLENGES LIST */}
                {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-[9px] font-[1000] uppercase text-[#69021E]/80 flex items-center gap-1 tracking-[0.1em]">
                      <AlertTriangle size={10} /> Dev Challenges Faced
                    </span>
                    <ul className="space-y-1">
                      {selectedProject.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-[11px] font-extrabold text-[#030206] bg-white/70 p-1.5 rounded-lg border border-[#69021E]/15 shadow-sm flex items-start gap-1.5">
                          <span className="text-[#AA0235] font-black">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FUTURE PLANS & UPCOMING FEATURES */}
                {selectedProject.futurePlans && selectedProject.futurePlans.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-[9px] font-[1000] uppercase text-[#710755] flex items-center gap-1 tracking-[0.1em]">
                      <Rocket size={10} /> Future Roadmap & Upcoming Features
                    </span>
                    <ul className="space-y-1">
                      {selectedProject.futurePlans.map((plan, idx) => (
                        <li key={idx} className="text-[11px] font-extrabold text-[#030206] bg-[#710755]/5 p-1.5 rounded-lg border border-[#710755]/20 shadow-sm flex items-start gap-1.5">
                          <span className="text-[#710755] font-black">🚀</span>
                          <span>{plan}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* MANIFEST LIST */}
                <div className="space-y-1">
                  <span className="text-[9px] font-[1000] uppercase text-[#69021E]/80 block tracking-[0.1em]">
                    📁 Status Manifest
                  </span>
                  <ul className="space-y-1">
                    {selectedProject.items.map((item, idx) => (
                      <li key={idx} className="text-[11px] font-black text-[#030206] flex items-center justify-between gap-2 bg-white/70 p-1.5 rounded-lg border border-[#69021E]/15 shadow-sm">
                        <span className="flex items-center gap-1.5 min-w-0">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: selectedProject.accent }} />
                          <span className="truncate">{item.split(' - ')[0]}</span>
                        </span>
                        <span className="text-[#69021E] text-[8px] font-black uppercase bg-[#69021E]/10 px-1.5 py-0.5 rounded shrink-0 border border-[#69021E]/10">
                          {item.split(' - ')[1]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECH STACK TAGS */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-black bg-[#69021E] text-[#F6F3EE] px-1.5 py-0.5 rounded shadow-sm uppercase tracking-wide"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER ACTION BUTTONS */}
              <div className="pt-2 border-t border-dashed border-[#69021E]/20 shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {selectedProject.githubFrontend && (
                  <a
                    href={selectedProject.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#030206] text-[#F6F3EE] py-1.5 px-2 rounded-lg font-black text-[11px] uppercase tracking-wider border-b-[2px] border-[#69021E] shadow-sm hover:brightness-125 transition-all"
                  >
                    <Code2 size={13} />
                    <span>Frontend Repo</span>
                  </a>
                )}

                {selectedProject.githubBackend && (
                  <a
                    href={selectedProject.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#030206] text-[#F6F3EE] py-1.5 px-2 rounded-lg font-black text-[11px] uppercase tracking-wider border-b-[2px] border-[#69021E] shadow-sm hover:brightness-125 transition-all"
                  >
                    <Database size={13} />
                    <span>Backend Repo</span>
                  </a>
                )}

                {selectedProject.github && !selectedProject.githubFrontend && !selectedProject.githubBackend && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#030206] text-[#F6F3EE] py-1.5 px-2 rounded-lg font-black text-[11px] uppercase tracking-wider border-b-[2px] border-[#69021E] shadow-sm hover:brightness-125 transition-all"
                  >
                    <Github size={13} />
                    <span>Repository</span>
                  </a>
                )}
                
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#AA0235] text-[#F6F3EE] py-1.5 px-2 rounded-lg font-black text-[11px] uppercase tracking-wider border-b-[2px] border-[#69021E] shadow-sm hover:brightness-110 transition-all col-span-1 sm:col-span-1"
                >
                  <ExternalLink size={13} />
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