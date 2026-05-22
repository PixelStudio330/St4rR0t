"use client";
import React, { useEffect, useState } from 'react';

interface FullscreenLoaderProps {
  /** Optional delay in ms to keep the splash visible for visual impact */
  minLoadingTime?: number;
}

export default function FullscreenLoader({ minLoadingTime = 1200 }: FullscreenLoaderProps) {
  const [mounted, setMounted] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Block scrolling on underlying application while loader is present
    document.body.style.overflow = 'hidden';

    const handlePageLoad = () => {
      // Smoothly transition into fade-out state
      setIsFadingOut(true);
      const unmountTimeout = setTimeout(() => {
        setMounted(false);
        document.body.style.overflow = '';
      }, 600); // Matches the tailwind duration-600 transition
      
      return () => clearTimeout(unmountTimeout);
    };

    // Strict safety check: Ensure screen clears even if lifecycle markers misfire
    if (document.readyState === 'complete') {
      const visualDelay = setTimeout(handlePageLoad, minLoadingTime);
      return () => clearTimeout(visualDelay);
    } else {
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, [minLoadingTime]);

  if (!mounted) return null;

  return (
    <>
      {/* Injecting specialized keyframes to handle the orbital blur logic seamlessly */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes cosmic-orbit {
          0% { transform: rotate(0deg); filter: blur(6px); }
          50% { transform: rotate(180deg); filter: blur(12px); opacity: 0.8; }
          100% { transform: rotate(360deg); filter: blur(6px); }
        }
        @keyframes core-pulse {
          0%, 100% { transform: scale(1); filter: blur(4px); opacity: 0.9; }
          50% { transform: scale(1.15); filter: blur(8px); opacity: 0.6; }
        }
      `}} />

      <div 
        className={`fixed inset-0 w-screen h-screen bg-[#110f0e] flex flex-col items-center justify-center z-[99999] transition-opacity duration-600 ease-out select-none pointer-events-auto ${
          isFadingOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative w-24 h-24 flex items-center justify-center">
          
          {/* Outermost Blurry Beige Ambient Ring */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-t-[#F6F3EE] border-r-transparent border-b-[#EADECA]/20 border-l-transparent"
            style={{
              animation: 'cosmic-orbit 3s infinite linear',
            }}
          />

          {/* Primary Terracotta Red Orbital Ring */}
          <div 
            className="absolute w-[80%] h-[80%] rounded-full border-[3px] border-t-transparent border-r-[#C2594E] border-b-transparent border-l-[#D3A297]/40"
            style={{
              animation: 'cosmic-orbit 1.8s infinite linear reverse',
            }}
          />

          {/* Core Pulsing Ember Glow */}
          <div 
            className="absolute w-4 h-4 bg-[#C2594E] rounded-full shadow-[0_0_20px_6px_#C2594E]"
            style={{
              animation: 'core-pulse 2s infinite ease-in-out',
            }}
          />
        </div>

        {/* Minimal Typographic Anchor */}
        <div className="mt-8 flex flex-col items-center gap-1">
          <span 
            className="text-[9px] font-black text-[#F6F3EE] tracking-[0.4em] uppercase font-mono opacity-80"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Securing Ledger Lines
          </span>
          <div className="w-12 h-[1px] bg-[#F6F3EE]/20 relative overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-[#C2594E] to-transparent animate-[shimmer_1.5s_infinite] translate-x-[-100%]" 
                 style={{ animation: 'shimmer 1.5s infinite linear' }}/>
            <style>{`
              @keyframes shimmer {
                100% { transform: translateX(200%); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </>
  );
}