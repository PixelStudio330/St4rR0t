"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link"; 
import {
  Heart,
  Star,
  Cherry,
  Apple,
  Sparkles,
  Cloud,
  Sun,
  MousePointer2,
  FileDown,
  GraduationCap,
  Briefcase,
  BookOpen,
  X
} from "lucide-react";

export default function Dashboard() {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const floating: Variants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -10, 0],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const wobbleHover: Variants = {
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, -2, 0],
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 sm:px-6 md:px-10 py-8 md:py-10 space-y-6 md:space-y-12 max-w-7xl mx-auto relative overflow-hidden selection:bg-[#AA0235] selection:text-[#F6F3EE]"
      >
        {/* Structural Atmospheric Accents */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-10 left-10 opacity-10 text-[#69021E] hidden lg:block pointer-events-none -z-10"
        >
          <Cloud size={60} />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute bottom-20 right-10 opacity-10 text-[#AA0235] hidden lg:block pointer-events-none -z-10"
        >
          <Sun size={80} />
        </motion.div>

        {/* TOP SECTION: BIO, HERO, LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-center">
          {/* BIO */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-6">
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -2 }}
                className="flex items-center gap-3 cursor-default w-fit"
              >
                <span className="bg-[#AA0235] text-[#F6F3EE] px-4 py-1.5 rounded-xl font-black text-base uppercase shadow-[4px_4px_0px_0px_#69021E] border border-white/10">
                  Nahar
                </span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-xl sm:text-2xl"
                >
                  ⭐
                </motion.span>
              </motion.div>

              <motion.div
                animate={{ x: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-[#69021E] text-[#F6F3EE]/90 text-[10px] px-3 py-1 inline-block font-black rounded-md tracking-[0.2em] uppercase border border-[#AA0235]/40"
              >
                Whimsy | Full-Stack Dev
              </motion.div>
            </div>

            <div className="text-sm sm:text-[15px] leading-relaxed font-bold text-[#F6F3EE]/80 space-y-4">
              <div className="flex items-center gap-2">
                <motion.span
                  whileHover={{ scale: 1.5, rotate: 20 }}
                  className="text-lg sm:text-xl cursor-pointer"
                >
                  🌙
                </motion.span>
                <span>
                  Site by{" "}
                  <span className="underline decoration-[#4d1643] decoration-[3px] underline-offset-4 text-[#F6F3EE] transition-colors hover:decoration-[#69021E]">
                    Nahar
                  </span>
                  !
                </span>
              </div>

              {/* MAIN BIO CARD (SHORTENED FOR BALANCE) */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[#F6F3EE] p-5 sm:p-6 rounded-[2rem] border-[3px] border-[#69021E] border-l-[7px] border-l-[#AA0235] shadow-2xl text-[#030206] relative overflow-hidden group space-y-4"
              >
                <div className="absolute inset-0 bg-[#AA0235]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
                
                <div className="relative z-10 font-bold font-mono text-xs leading-relaxed text-[#0d0a0b]">
                  <p>
                    Bangladesh-based Full-Stack Developer blending creative folk-art aesthetics with modern web tech. Passionate about interactive design, storytelling, and joyful user experiences.
                  </p>
                </div>

                {/* ACTION BUTTONS: READ BIO + DOWNLOAD RESUME */}
                <div className="relative z-10 flex flex-col sm:flex-row gap-2 pt-1">
                  <motion.button
                    type="button"
                    onClick={() => setIsBioModalOpen(true)}
                    variants={wobbleHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#AA0235] text-[#F6F3EE] py-2.5 px-3 rounded-xl font-mono font-black text-xs uppercase tracking-wider border-b-[3px] border-[#69021E] shadow-[0_3px_0_0_#69021E] hover:shadow-[0_1px_0_0_#69021E] hover:translate-y-[2px] transition-all duration-200"
                  >
                    <BookOpen size={15} />
                    <span>Read Bio</span>
                  </motion.button>

                  <motion.a
                    href="/my-resume.pdf"
                    download="Nahar_Resume.pdf"
                    variants={wobbleHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#69021E] text-[#F6F3EE] py-2.5 px-3 rounded-xl font-mono font-black text-xs uppercase tracking-wider border-b-[3px] border-[#AA0235] shadow-[0_3px_0_0_#AA0235] hover:shadow-[0_1px_0_0_#AA0235] hover:translate-y-[2px] transition-all duration-200"
                  >
                    <FileDown size={15} />
                    <span>Resume</span>
                  </motion.a>
                </div>

                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute -bottom-1 -right-1 pointer-events-none"
                >
                  <Sparkles size={24} className="text-[#69021E]/20" fill="currentColor" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div variants={itemVariants} className="md:col-span-4 flex justify-center">
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="relative group w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] cursor-pointer"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-8 bg-[#69021E]/60 -rotate-2 z-30 shadow-sm mix-blend-screen border-x border-white/10" />
              <div className="absolute inset-0 bg-[#AA0235] rounded-[3rem] translate-x-3 translate-y-3 opacity-20" />
              <div className="relative aspect-square bg-[#F6F3EE] border-[4px] border-[#69021E] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/img/profile.png"
                  alt="Nahar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9] contrast-105"
                />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  className="absolute top-4 right-4 bg-[#030206] text-[#F6F3EE] p-2.5 rounded-full border-2 border-[#69021E] shadow-lg"
                >
                  <Star size={16} fill="currentColor" className="text-[#AA0235]" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* LINKS PANEL */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-8">
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              className="bg-[#AA0235] text-[#F6F3EE] px-6 py-3 rounded-xl text-center font-black border-b-[5px] border-[#69021E] uppercase tracking-widest shadow-lg font-mono text-xs"
            >
              Find Me Here ~
            </motion.div>

            <ul className="space-y-5 px-2 sm:px-4">
              {[
                { icon: <Apple size={20} />, label: "GitHub", color: "#030206", url: "https://github.com/Mst-Gulnahar" },
                { icon: <Cherry size={20} />, label: "PixelStudio", color: "#69021E", url: "https://pixel-studio-opal.vercel.app/" },
                { icon: <Heart size={20} />, label: "Instagram", color: "#AA0235", url: "https://www.instagram.com/n._.zaman/" },
              ].map((link, i) => (
                <motion.li key={i} variants={wobbleHover} whileHover="hover" whileTap="tap">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-sm font-black group font-mono"
                  >
                    <motion.span
                      style={{ color: link.color }}
                      className="p-3 bg-[#F6F3EE] rounded-xl shadow-md border border-[#FFFFFF] group-hover:border-[#FFFFFF] group-hover:shadow-[#FFFFFF]/10 transition-all"
                    >
                      {link.icon}
                    </motion.span>
                    <span className="text-[#F6F3EE]/80 border-b border-dashed border-[#FFFFFF] group-hover:text-[#FFFFFF] group-hover:border-[#FFFFF] transition-colors tracking-wider">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* EDUCATION & ROLE SECTION */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* EDUCATION CARD */}
          <motion.div
            whileHover={{ y: -4, rotate: -0.5 }}
            className="bg-[#F6F3EE] border-[3px] border-[#69021E] p-6 rounded-[2.5rem] shadow-[6px_6px_0px_0px_#69021E] relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-[#AA0235] text-[#F6F3EE] p-2.5 rounded-xl border border-[#69021E] inline-block">
                  <GraduationCap size={20} />
                </span>
                <span className="text-[10px] font-mono font-black uppercase text-[#69021E] tracking-wider bg-[#AA0235]/10 px-3 py-1 rounded-full">
                  Education
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black font-mono text-[#69021E] uppercase tracking-tight">
                  Rajshahi University
                </h3>
                <p className="text-xs font-mono font-bold text-[#030206]/80 mt-1">
                  Subject: History
                </p>
              </div>
              <p className="text-xs font-mono text-[#030206]/70 leading-relaxed">
                Studied History at Rajshahi University, building strong analytical skills, critical research frameworks, and methodical problem-solving abilities.
              </p>
            </div>
          </motion.div>

          {/* CURRENT ROLE & GOALS CARD */}
          <motion.div
            whileHover={{ y: -4, rotate: 0.5 }}
            className="bg-[#F6F3EE] border-[3px] border-[#69021E] p-6 rounded-[2.5rem] shadow-[6px_6px_0px_0px_#AA0235] relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-[#69021E] text-[#F6F3EE] p-2.5 rounded-xl border border-[#AA0235]/30 inline-block">
                  <Briefcase size={20} />
                </span>
                <span className="text-[10px] font-mono font-black uppercase text-[#69021E] tracking-wider bg-[#69021E]/10 px-3 py-1 rounded-full">
                  Current Role
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black font-mono text-[#69021E] uppercase tracking-tight">
                  Primary School Educator
                </h3>
                <p className="text-xs font-mono font-bold text-[#AA0235] mt-1">
                  Aspiring Software Engineering Intern
                </p>
              </div>
              <p className="text-xs font-mono text-[#030206]/70 leading-relaxed">
                Currently working as a primary school educator while actively seeking frontend and full-stack software development internships to build impactful, user-centered web applications.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* PROJECT PREVIEW SECTION */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center pt-2">
          {/* LEFT: LIVE IFRAME CARD */}
          <motion.a
            href="https://pawsky-wawsky-client.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="md:col-span-7 relative block group/card"
          >
            <div className="absolute inset-0 bg-[#69021E] rounded-[2.5rem] translate-x-2 translate-y-2 opacity-20 group-hover/card:translate-x-3 group-hover/card:translate-y-3 transition-transform" />
            
            <div className="relative bg-[#F6F3EE] border-[3px] border-[#69021E] rounded-[2.5rem] p-4 shadow-xl overflow-hidden">
              <div 
                className="w-full aspect-video bg-[#EFECE6] rounded-[1.5rem] border-[3px] border-dashed overflow-hidden relative group/iframe shadow-inner transition-all"
                style={{ borderColor: "#021233" }}
              >
                <iframe
                  src="https://pawsky-wawsky-client.vercel.app/"
                  title="Pawsky Wawsky Live Preview"
                  loading="lazy"
                  className="absolute top-0 left-0 w-[312.5%] h-[312.5%] md:w-[416.6%] md:h-[416.6%] origin-top-left scale-[0.32] md:scale-[0.24] border-none pointer-events-none transition-all duration-300"
                />

                {/* INFINITE AUTOPLAYING GLASS SHINE EFFECT */}
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
                  style={{ backgroundColor: "#021233" }}
                >
                  <MousePointer2 size={10} /> Visit Live Site
                </div>
              </div>
            </div>
          </motion.a>

          {/* RIGHT: PROJECT INFO CARD */}
          <motion.div variants={floating} initial="initial" animate="animate" className="md:col-span-5">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.01 }}
              className="bg-[#F6F3EE] border-[4px] border-[#69021E] p-6 sm:p-8 md:p-9 rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(105,2,30,0.3)] -rotate-1 relative overflow-hidden flex flex-col gap-5"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#AA0235]/5 rounded-bl-full" />
              
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-[#69021E] uppercase mb-3 italic flex items-center gap-3 font-mono tracking-wide">
                  Pawsky Wawsky <Cherry className="text-[#AA0235]" size={20} />
                </h4>
                <p className="text-xs sm:text-[13px] font-bold text-[#030206]/80 leading-relaxed font-mono">
                  My first website testing backend skills and deploying a full-stack project!
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {["Next.js", "Tailwind", "React"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-black text-[#F6F3EE] bg-[#69021E] px-3 py-1.5 rounded-lg border border-[#AA0235]/20 cursor-default font-mono"
                  >
                    #{tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <Link 
                href="/projects" 
                className="relative flex items-center justify-center gap-3 w-full pt-1"
              >
                <motion.div
                  variants={wobbleHover}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative flex items-center justify-center gap-3 w-full bg-[#AA0235] text-[#F6F3EE] py-3 rounded-xl font-black border-b-[4px] border-[#69021E] uppercase tracking-widest overflow-hidden group/btn transition-all duration-300 font-mono text-xs shadow-[0_4px_0_0_#69021E] hover:shadow-[0_1px_0_0_#69021E] hover:translate-y-[3px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-center">
                    View More Projects? 
                    <motion.div
                      animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                    >
                      <Sparkles size={14} className="text-[#69021E]" fill="currentColor" />
                    </motion.div>
                  </span>
                  <div className="absolute inset-[2px] rounded-lg border border-white/10 pointer-events-none z-0" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* FULL BIO MODAL */}
      <AnimatePresence>
        {isBioModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBioModalOpen(false)}
            className="fixed inset-0 bg-[#030206]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F6F3EE] border-[4px] border-[#69021E] rounded-[2.5rem] p-6 sm:p-8 max-w-lg w-full shadow-[8px_8px_0px_0px_#69021E] relative space-y-4"
            >
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="absolute top-5 right-5 p-2 bg-[#AA0235] text-[#F6F3EE] rounded-xl border border-[#69021E] hover:bg-[#69021E] transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-[#69021E] font-mono font-black text-sm uppercase">
                <Sparkles size={18} fill="currentColor" />
                <span>About Nahar</span>
              </div>

              <div className="font-mono text-xs sm:text-sm leading-relaxed text-[#0d0a0b] space-y-3 pt-2">
                <p>
                  I am a Bangladesh-based student and aspiring Full-Stack Developer with a passion for building creative, interactive web experiences. My programming journey began with curiosity about how websites work, evolving into crafting full-stack web applications with modern tech.
                </p>
                <p>
                  I love turning ideas into functional products, experimenting with unique interfaces, and bridging aesthetics with technology. Outside coding, I enjoy creative writing, digital art, storytelling, content creation, and exploring game development ideas—believing software should be both useful and joyful to use!
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setIsBioModalOpen(false)}
                  className="bg-[#69021E] text-[#F6F3EE] px-5 py-2 rounded-xl font-mono text-xs font-black uppercase tracking-wider border-b-[3px] border-[#AA0235]"
                >
                  Close ✨
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}