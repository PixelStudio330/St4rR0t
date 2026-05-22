"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, Star, Globe, ShieldCheck, Hammer, Activity, Heart, Sparkles 
} from "lucide-react";

const SkillShard = ({ name, level, index }: { name: string; level: string; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const [isBeigeTheme, setIsBeigeTheme] = useState(false);

  // Safely assign alternating/random theme elements on mount to prevent hydration issues
  useEffect(() => {
    setIsBeigeTheme(Math.random() > 0.5);
  }, []);

  // Theme Palette Definitions
  const themeCrimson = "#AA0235";   // Deep Alabama Crimson accent
  const themeGold = "#8b5a2b";      // Muted Gold/Bronze outline
  
  // Dynamic card styling based on generated state
  const bgStyle = isBeigeTheme ? "#eadeca" : "#0c0a12"; // Antique Beige vs Velvet Obsidian
  const textPrimary = isBeigeTheme ? "text-slate-900" : "text-slate-100";
  const textSecondary = isBeigeTheme ? "text-slate-700" : "text-slate-400";

  const getContextualInsight = (techName: string): string => {
    const insights: Record<string, string> = {
      "TypeScript": "Strictly typed architecture",
      "JavaScript": "Asynchronous engine mastery",
      "React": "Component lifecycles & custom hooks",
      "Next.js": "App router & SSR optimization",
      "Tailwind CSS": "Utility-first design precision",
      "Vite": "Blazing fast bundle optimization",
      "HTML5 / CSS3": "Semantic layouts & fluid curves",
      "Node.js": "Scalable runtime server execution",
      "MongoDB": "Flexible non-relational modeling",
      "MySQL": "Relational queries & structured data",
      "Prisma": "Type-safe database transactions",
      "HeidiSQL": "Database management & GUI control",
      "BetterAuth": "Modern type-safe authentication",
      "NextAuth": "Secure JWT session protocols",
      "Sequel Ace": "Relational schema administration",
      "NeonDB": "Serverless edge database structures",
      "Framer Motion": "Complex interactive fluid states",
      "VS Code": "Highly customized IDE workstation",
      "Vercel": "Edge deployment & pipeline control",
      "Render": "Cloud hosting instance deployment",
      "Git & GitHub": "Version control & trunk workflows",
      "Daisy UI": "Tailwind component acceleration",
      "Figma conversion": "Pixel-perfect mock to responsive code"
    };
    return insights[techName] || "Engineered with modern best practices";
  };

  const getLayout = (i: number) => {
    const layouts = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-1"];
    return layouts[i % layouts.length];
  };

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, rotate: index % 2 === 0 ? 1 : -1 }}
      transition={{ delay: index * 0.03, type: "spring", stiffness: 300 }}
      className={`${getLayout(index)} relative group overflow-hidden border-2 border-${themeGold}/40 rounded-[2rem] shadow-lg isolation-isolate`}
      style={{ backgroundColor: bgStyle }}
    >
      <div className="p-5 h-full flex flex-col justify-between min-h-[150px] relative overflow-hidden rounded-[2rem]">
        <Sparkles 
          size={14} 
          className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity" 
          style={{ color: isBeigeTheme ? "#69021E" : themeCrimson }} 
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
             <Heart 
              size={10} 
              fill={isBeigeTheme ? "#69021E" : themeCrimson} 
              style={{ color: isBeigeTheme ? "#69021E" : themeCrimson }} 
              className="opacity-40" 
             />
             <span className={`text-[10px] font-bold uppercase tracking-widest ${textSecondary}`}>
               Skill_{index + 1}
             </span>
          </div>
          <h3 className={`text-xl font-black uppercase tracking-tighter leading-tight drop-shadow-sm ${textPrimary}`}>
            {name}
          </h3>
        </div>

        <div className="relative z-10 mt-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                animate={hovered ? { scale: [1, 1.2, 1] } : {}}
                transition={{ delay: i * 0.1 }}
                className="w-2.5 h-2.5 rounded-full shadow-inner" 
                style={{ 
                  backgroundColor: i < 4 
                    ? (isBeigeTheme ? "#69021E" : themeCrimson) 
                    : (isBeigeTheme ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)'), 
                  border: `1px solid ${isBeigeTheme ? '#69021E40' : themeCrimson + '60'}` 
                }} 
              />
            ))}
          </div>
          <span className={`text-[10px] font-black italic ${textSecondary}`}>{level}</span>
        </div>

        {/* INFORMATIVE HOVER OVERLAY */}
        <AnimatePresence>
          {hovered && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 p-5 flex flex-col justify-center items-center text-center backdrop-blur-md overflow-hidden rounded-[1.85rem] will-change-transform"
              style={{ 
                backgroundColor: isBeigeTheme ? "#69021Ee8" : `${themeCrimson}e0`, 
                isolation: 'isolate' 
              }}
            >
              <div className="bg-white/20 p-2.5 rounded-full mb-2">
                <Activity size={20} className="text-white animate-pulse" />
              </div>
              <p className="text-[14px] font-black text-white uppercase tracking-tight mb-1">{name}</p>
              <p className="text-[10px] tracking-wide font-medium text-white/90 max-w-[90%] leading-snug italic">
                {getContextualInsight(name)}
              </p>
              <div className="mt-3.5 w-16 h-1 bg-white/30 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }} 
                  animate={{ x: "0%" }} 
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  className="h-full bg-white" 
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function SkillsPage() {
  const categories = [
    { 
      title: "Frontend Meadow", 
      icon: <Globe />, 
      skills: [
        { name: "TypeScript", level: "Expert" }, 
        { name: "JavaScript", level: "Expert" }, 
        { name: "React", level: "Expert" }, 
        { name: "Next.js", level: "Advanced" }, 
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Vite", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Expert" }
      ] 
    },
    { 
      title: "Backend Garden", 
      icon: <ShieldCheck />, 
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Advanced" }, 
        { name: "Prisma", level: "Expert" }, 
        { name: "HeidiSQL", level: "Power User" }, 
        { name: "BetterAuth", level: "Specialist" }, 
        { name: "NextAuth", level: "Advanced" }, 
        { name: "Sequel Ace", level: "Advanced" }, 
        { name: "NeonDB", level: "Proficient" }
      ] 
    },
    { 
      title: "Tool Shed", 
      icon: <Hammer />, 
      skills: [
        { name: "Framer Motion", level: "Expert" }, 
        { name: "VS Code", level: "Power User" },
        { name: "Vercel", level: "Expert" }, 
        { name: "Render", level: "Advanced" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Daisy UI", level: "Expert" },
        { name: "Figma conversion", level: "Expert" }
      ] 
    }
  ];

  return (
    <div className="p-6 md:p-10 space-y-12 selection:bg-[#AA0235] selection:text-white pb-20">
      
      {/* HEADER SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 border-b-[3px] border-dashed border-[#F6F3EE]/60 pb-6"
      >
        <motion.div 
          animate={{ rotate: [3, -3, 3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="bg-[#69021E] text-white p-3 rounded-xl shadow-md border-2 border-[#8b5a2b]/40"
        >
          <Star fill="currentColor" size={24} />
        </motion.div>
        <div>
          <h2 className="text-3xl font-[900] text-[#F6F3EE] uppercase tracking-tighter italic">The Skills Library</h2>
          <p className="text-sm font-black text-[#F6F3EE]/60 uppercase tracking-widest">Skill Meadow & Tech Stack</p>
        </div>
      </motion.div>

      {/* SKILLS CATEGORIES CONTAINER */}
      <div className="space-y-24 pt-10">
        {categories.map((cat) => (
          <section key={cat.title}>
            <div className="flex items-center gap-4 mb-10 group">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="p-3 rounded-2xl shadow-sm border-2 border-[#8b5a2b]/40 bg-[#0c0a12]" 
                style={{ color: "#AA0235" }}
              >
                 {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-100">
                {cat.title}
              </h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#8b5a2b]/30 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {cat.skills.map((skill, idx) => (
                <SkillShard 
                  key={skill.name} 
                  {...skill} 
                  index={idx} 
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* FOOTER TRANSMISSION */}
      <footer className="mt-40 pt-16 flex flex-col items-center gap-6">
        <div className="flex gap-4">
           <div className="w-3 h-3 rounded-full bg-[#69021E]/60" />
           <div className="w-3 h-3 rounded-full bg-[#AA0235]/60" />
           <div className="w-3 h-3 rounded-full bg-[#710755]/60" />
        </div>
        <div className="flex items-center gap-3 opacity-60">
          <Cpu size={20} className="text-slate-400" />
          <span className="text-[10px] font-black text-[#F6F3EE] tracking-[0.3em] uppercase">
            End of Transmission // Hand-forged with love
          </span>
        </div>
      </footer>
    </div>
  );
}