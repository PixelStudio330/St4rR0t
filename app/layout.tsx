"use client";
import "./globals.css";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import SparkleTrail from './components/SparkleTrail'; 
import { X, Music, Play, Pause, SkipForward, SkipBack, Disc, ListMusic, Heart } from 'lucide-react';
import Lenis from 'lenis';

const tracks = [
  { id: 1, title: "Touch", artist: "KATSEYE", src: "/musics/touch.mp4" },
  { id: 2, title: "Soda Pop", artist: "Saja Boys", src: "/musics/soda-pop.mp4" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const tabs = [
    { name: 'Dashboard', path: '/' },
    { name: 'More Projects', path: '/projects' },
    { name: 'Contact Me', path: '/contact' },
    { name: 'Skill Archive', path: '/skills' },
  ];

  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showLibrary, setShowLibrary] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const libraryRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentTrack = tracks[trackIndex];

  // Muted Antique Beige (Golden-ish Theme Color)
  const antiqueBeige = "#eadeca";
  const Beige = "#F6F3EE";

  // Initialize Smooth Scroll (Lenis)
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollContainerRef.current, 
      content: scrollContainerRef.current.firstElementChild as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Scroll Animations
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const waveEffect = useTransform(smoothY, [0, 1], [0, -20]);

  // Close Library on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (libraryRef.current && !libraryRef.current.contains(event.target as Node)) {
        setShowLibrary(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Audio Logic
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  return (
    <html lang="en">
      <head>
        <style>{`
          body, html { overflow: hidden !important; height: 100% !important; margin: 0; padding: 0; position: fixed; width: 100%; }
          .custom-scrollbar::-webkit-scrollbar { width: 8px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(105,2,30,0.05); }
          /* Updated scrollbar thumb to match the beautiful layout theme beige (#F6F3EE) */
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #F6F3EE; border-radius: 4px; border: 2px solid ${antiqueBeige}; }
          .lenis-container { touch-action: pan-y; -webkit-overflow-scrolling: touch; }
          .nav-link-fix { position: relative; z-index: 9999 !important; pointer-events: auto !important; }
        `}</style>
      </head>
      
      <body 
        className="h-full flex items-center justify-center font-mono selection:bg-[#005F73] selection:text-[#F6F3EE] text-[#AA0235] relative"
        style={{ backgroundColor: antiqueBeige }}
      >
        
        <SparkleTrail />

        {/* EXTERNAL DESK BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div 
            className="w-full h-full"
            style={{ 
              backgroundImage: "url('/img/bg1.png')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }} 
          />
        </div>
        
        {/* MAIN WINDOW */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ y: waveEffect }}
          className="relative z-30 w-[95%] md:w-full max-w-5xl h-[88vh] border-[6px] border-[#F6F3EE] rounded-[1.5rem] md:rounded-[2rem] shadow-[0px_10px_0px_0px_rgba(105,2,30,0.15)] bg-transparent flex flex-col overflow-hidden"
        >
          {/* STUNNING IMAGE BACKGROUND */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div 
              className="w-full h-full" 
              style={{ 
                backgroundImage: "url('/img/body3.png')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
              }} 
            />
          </div>

          <div className="relative z-10 flex flex-col w-full h-full overflow-hidden">
            <Header />
            {/* SCROLLABLE AREA */}
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto custom-scrollbar relative z-20 lenis-container">
                <div className="relative z-10 min-h-full">
                  {children}
                  <Footer />
                </div>
            </div>
          </div>
        </motion.div>

        {/* MUSIC PLAYER INTERFACE */}
        <div ref={libraryRef} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end gap-3 scale-75 md:scale-100 origin-bottom-right">
          <audio 
            ref={audioRef} 
            key={currentTrack.id}
            src={currentTrack.src} 
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setTrackIndex((prev) => (prev + 1) % tracks.length)}
          />

          {/* PLAYLIST PANEL */}
          <AnimatePresence>
            {showLibrary && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="border-[3px] border-[#69021E] rounded-2xl p-4 shadow-[6px_6px_0px_0px_#69021E] w-64 md:w-72 mb-2"
                style={{ backgroundColor: Beige }}
              >
                <div className="flex items-center justify-between mb-3 border-b-2 border-[#69021E]/10 pb-2">
                  <h3 className="text-[10px] font-black text-[#69021E] uppercase tracking-widest flex items-center gap-2">
                    <Music size={12} /> Music Library
                  </h3>
                  <button onClick={() => setShowLibrary(false)} className="text-[#69021E] hover:text-[#AA0235] transition-colors"><X size={14} /></button>
                </div>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
                  {tracks.map((track, index) => (
                    <button 
                      key={track.id}
                      onClick={() => { setTrackIndex(index); setIsPlaying(true); }}
                      className={`w-full text-left p-2 rounded-xl border flex items-center justify-between transition-all ${
                        trackIndex === index ? "bg-[#69021E] text-[#F6F3EE] border-[#69021E]" : "text-slate-900 hover:bg-[#69021E]/10 border-transparent"
                      }`}
                    >
                      <span className="text-[10px] font-black truncate">{track.title}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* MAIN PLAYER CONTROLLER CARD */}
          <div 
            className="border-[3px] border-[#69021E] rounded-2xl p-3 shadow-[6px_6px_0px_0px_#69021E] flex items-center gap-4 relative"
            style={{ backgroundColor: Beige }}
          >
            <button 
              onClick={() => setShowLibrary(!showLibrary)}
              className={`absolute -top-3 -left-3 p-2.5 rounded-full border-[3px] border-[#69021E] shadow-md transition-all ${showLibrary ? 'bg-[#005F73] text-[#F6F3EE] border-[#0A9396]' : 'bg-[#69021E] text-[#F6F3EE]'}`}
            >
              <ListMusic size={14} strokeWidth={3} />
            </button>

            <div className={`w-10 h-10 bg-[#69021E] rounded-full flex items-center justify-center border-2 ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: '4s', borderColor: Beige }}>
              <Disc size={18} className="text-[#F6F3EE]/30" />
            </div>

            <div className="flex flex-col min-w-[130px]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-slate-900 truncate tracking-wide">{currentTrack.title}</span>
                {isPlaying && <Heart size={8} fill="#0A9396" className="text-[#0A9396]" />}
              </div>
              <span className="text-[9px] font-bold text-[#69021E] uppercase tracking-wider">{currentTrack.artist}</span>
              <div className="flex items-center gap-2 mt-1 text-[#69021E]">
                <button className="hover:text-[#0A9396] transition-colors" onClick={() => setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)}><SkipBack size={13} fill="currentColor" /></button>
                <button className="hover:text-[#0A9396] transition-colors" onClick={togglePlay}>{isPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}</button>
                <button className="hover:text-[#0A9396] transition-colors" onClick={() => setTrackIndex((prev) => (prev + 1) % tracks.length)}><SkipForward size={13} fill="currentColor" /></button>
              </div>
            </div>

            {/* TIMELINE PROGRESS */}
            <div className="w-1.5 h-10 bg-[#69021E]/10 rounded-full overflow-hidden flex flex-col-reverse">
              <motion.div animate={{ height: `${progress}%` }} className="w-full bg-[#005F73]" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}