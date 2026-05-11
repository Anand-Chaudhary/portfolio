'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Home, FolderOpen, Terminal, ChevronRight, Code2, Braces, MousePointer2, ArrowUpRight } from "lucide-react";

// ─── Noise / grain overlay ───────────────────────────────────────────────────
const GrainSVG = () => (
  <svg className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.03] z-50" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

// ─── Animated blob shapes ────────────────────────────────────────────────────
const Blob = ({ className, delay = 0, duration = 8, path, color }: {className: string, delay: number, duration: number, path: string, color: string}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ y: [0, -18, 0], x: [0, 10, 0], rotate: [0, 6, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill={color} d={path} transform="translate(100 100)" />
    </svg>
  </motion.div>
);

// ─── Floating dev icon ───────────────────────────────────────────────────────
const FloatingIcon = ({ icon: Icon, className, delay, size = 20, rotate = 0 }: {icon: React.ComponentType<{ size?: number; strokeWidth?: number }>, className: string, delay: number, size: number, rotate: number}) => (
  <motion.div
    className={`absolute ${className} text-[#324E32]/20`}
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1, y: [0, -12, 0], rotate: [rotate, rotate + 5, rotate] }}
    transition={{ opacity: { duration: 0.8, delay }, scale: { duration: 0.8, delay }, y: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }, rotate: { duration: 7 + delay, repeat: Infinity, ease: "easeInOut", delay } }}
  >
    <Icon size={size} strokeWidth={1.2} />
  </motion.div>
);

// ─── Dotted grid background ───────────────────────────────────────────────────
const DottedGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#324E32" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dot-grid)" />
  </svg>
);

// ─── Cursor SVG illustration ─────────────────────────────────────────────────
const CursorIllustration = ({ className, delay = 0 }: {className: string, delay: number}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
    transition={{ opacity: { duration: 0.6, delay }, scale: { duration: 0.6, delay }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 } }}
  >
    <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 2L4 32L12 24L18 38L22 36L16 22H28L4 2Z" fill="#F5AA17" stroke="#324E32" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  </motion.div>
);

// ─── Terminal window decoration ───────────────────────────────────────────────
const TerminalCard = () => (
  <motion.div
    className="absolute bottom-[14%] left-[5%] hidden lg:block"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
    transition={{ opacity: { duration: 0.8, delay: 1.2 }, x: { duration: 0.8, delay: 1.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
  >
    <div style={{ background: "rgba(50,78,50,0.08)", border: "1px solid rgba(50,78,50,0.12)", backdropFilter: "blur(8px)" }} className="rounded-2xl p-4 w-52 shadow-sm">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-300/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-300/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-300/60" />
      </div>
      <div className="font-mono text-[10px] space-y-1 text-[#324E32]/50">
        <div><span className="text-[#F5AA17]/80">~</span> cd /page</div>
        <div className="text-red-400/70">Error: 404 Not Found</div>
        <div className="flex items-center gap-1"><span className="text-[#F5AA17]/80">~</span> <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>▌</motion.span></div>
      </div>
    </div>
  </motion.div>
);

// ─── Code snippet decoration ─────────────────────────────────────────────────
const CodeCard = () => (
  <motion.div
    className="absolute top-[18%] right-[4%] hidden lg:block"
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
    transition={{ opacity: { duration: 0.8, delay: 1.4 }, x: { duration: 0.8, delay: 1.4 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.8 } }}
  >
    <div style={{ background: "rgba(245,170,23,0.07)", border: "1px solid rgba(245,170,23,0.18)", backdropFilter: "blur(8px)" }} className="rounded-2xl p-4 w-48 shadow-sm">
      <div className="font-mono text-[10px] space-y-0.5 text-[#324E32]/50 leading-relaxed">
        <div><span className="text-[#F5AA17]/90">const</span> page = <span className="text-red-400/70">null</span>;</div>
        <div><span className="text-[#F5AA17]/90">if</span> (!page) {'{'}</div>
        <div className="pl-3">throw <span className="text-[#324E32]/70">404</span>;</div>
        <div>{'}'}</div>
      </div>
    </div>
  </motion.div>
);

// ─── Main component ──────────────────────────────────────────────────────────
export default function NotFound404() {
  const [mounted, setMounted] = useState(true);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useTransform(mouseX, [0, 1], [-8, 8]);
  const parallaxY = useTransform(mouseY, [0, 1], [-6, 6]);
  const parallaxXSlow = useTransform(mouseX, [0, 1], [-4, 4]);
  const parallaxYSlow = useTransform(mouseY, [0, 1], [-3, 3]);

  useEffect(() => {
    const handleMouse = (e: any) => { //eslint-disable-line
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouse);
    
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen overflow-hidden flex items-center justify-center z-0"
      style={{ background: "#FDFBDE", fontFamily: "'DM Sans', 'Sora', system-ui, sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900&family=DM+Serif+Display:ital@0;1&display=swap');
        .btn-primary { transition: all 0.25s cubic-bezier(0.4,0,0.2,1); }
        .btn-secondary { transition: all 0.25s cubic-bezier(0.4,0,0.2,1); }
        .btn-secondary:hover { transform: translateY(-2px); background: rgba(50,78,50,0.06); }
        .text-404 { font-family: 'DM Serif Display', Georgia, serif; }
      `}</style>

      {/* Grain overlay */}
      <GrainSVG />

      {/* Dotted grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <DottedGrid />
      </div>

      {/* Blobs */}
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute inset-0 z-0 pointer-events-none">
        <Blob
          className="w-105 h-105 -top-20 -left-25 opacity-30"
          delay={0} duration={10}
          color="#324E32"
          path="M47.6,-56.2C59.3,-45.7,64.8,-28.6,67.3,-10.8C69.9,7,69.4,25.5,61.2,40.3C53.1,55.1,37.2,66.2,19.7,70.2C2.2,74.2,-16.9,71.1,-33.3,62.5C-49.7,53.9,-63.5,39.8,-69.3,23C-75.1,6.2,-72.9,-13.2,-64.6,-29.2C-56.2,-45.2,-41.8,-57.7,-26.5,-67.2C-11.3,-76.7,4.9,-83.2,19.5,-78.5C34.1,-73.8,47.6,-56.2,47.6,-56.2Z"
        />
        <Blob
          className="w-85 h-85 -bottom-15 -right-15 opacity-20"
          delay={2} duration={12}
          color="#F5AA17"
          path="M40.8,-52.6C53.2,-41.4,63.5,-29.2,68.1,-14.5C72.7,0.2,71.6,17.5,63.9,31.2C56.2,44.9,41.8,55,26.3,61.4C10.8,67.8,-5.9,70.6,-20.8,66.2C-35.7,61.8,-48.8,50.3,-57.2,36.2C-65.7,22,-69.5,5.2,-66.8,-10.4C-64,-26,-54.7,-40.4,-42.6,-51.5C-30.5,-62.6,-15.2,-70.3,0.4,-70.8C16.1,-71.3,28.4,-63.8,40.8,-52.6Z"
        />
        <Blob
          className="w-55 h-55 top-[40%] right-[15%] opacity-15"
          delay={4} duration={9}
          color="#C4A96B"
          path="M38.5,-47.3C49.4,-37.2,57.3,-24.2,59.5,-10C61.7,4.2,58.3,19.5,50.6,32.8C43,46,31,57.3,16.7,62.7C2.4,68,-14.2,67.5,-27.4,61.1C-40.6,54.7,-50.5,42.4,-57,28.2C-63.6,14,-66.9,-2,-63.5,-16.2C-60.2,-30.4,-50.2,-42.7,-38.1,-52.7C-26,-62.7,-11.8,-70.3,1.7,-72.2C15.2,-74.1,27.6,-57.4,38.5,-47.3Z"
        />
      </motion.div>

      {/* Floating dev icons */}
      <FloatingIcon icon={Braces} className="top-[22%] left-[8%] hidden md:block" delay={0.8} size={28} rotate={-10} />
      <FloatingIcon icon={Code2} className="top-[65%] left-[12%] hidden md:block" delay={1.0} size={22} rotate={5} />
      <FloatingIcon icon={FolderOpen} className="top-[30%] right-[10%] hidden lg:block" delay={1.2} size={24} rotate={8} />
      <FloatingIcon icon={Terminal} className="bottom-[22%] right-[8%] hidden md:block" delay={0.6} size={26} rotate={-5} />

      {/* Cursor illustrations */}
      <motion.div style={{ x: parallaxXSlow, y: parallaxYSlow }} className="absolute inset-0 pointer-events-none z-10">
        <CursorIllustration className="top-[20%] right-[22%] opacity-60" delay={1.6} />
        <CursorIllustration className="bottom-[28%] left-[18%] opacity-40 scale-75" delay={2.0} />
      </motion.div>

      {/* Terminal & code decorations */}
      <TerminalCard />
      <CodeCard />

      {/* ── MAIN CONTENT ── */}
      <AnimatePresence>
        {mounted && (
          <motion.div
            className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow behind 404 */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-65 rounded-full blur-[80px] opacity-25 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #F5AA17 0%, #324E32 60%, transparent 100%)" }}
            />

            {/* 404 heading */}
            <motion.h1
              className="text-404 relative leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(6rem, 22vw, 14rem)", color: "#324E32", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ WebkitTextStroke: "2px #324E32", color: "transparent" }}>4</span>
              <span style={{ color: "#F5AA17" }}>0</span>
              <span style={{ WebkitTextStroke: "2px #324E32", color: "transparent" }}>4</span>
            </motion.h1>

            {/* Headline */}
            <motion.h2
              className="mt-2 mb-4 font-light"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.35rem, 3.5vw, 2rem)", color: "#324E32", letterSpacing: "-0.01em", fontStyle: "italic" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Looks like this page wandered off.
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "rgba(50,78,50,0.55)", fontWeight: 400 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              It might&apos;ve been moved, deleted, or maybe it never existed to begin with.
              Either way — you&apos;re lost in the stack. Let&apos;s get you back.
            </motion.p>

            {/* Divider with icon */}
            <motion.div
              className="my-8 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="h-px w-16" style={{ background: "rgba(50,78,50,0.15)" }} />
              <MousePointer2 size={14} style={{ color: "rgba(50,78,50,0.3)" }} />
              <div className="h-px w-16" style={{ background: "rgba(50,78,50,0.15)" }} />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {/* Go Home */}
              <button
                className="btn-primary cursor-pointer flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-medium text-sm"
                style={{ background: "#324E32", color: "#FDFBDE", boxShadow: "0 4px 20px rgba(50,78,50,0.25)", letterSpacing: "0.01em" }}
                onClick={() => alert("Navigate to /")}
              >
                <Home size={16} strokeWidth={2} />
                Go Home
              </button>

              {/* View Projects */}
              <button
                className="btn-secondary cursor-pointer flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-medium text-sm"
                style={{ background: "rgba(50,78,50,0.05)", border: "1.5px solid rgba(50,78,50,0.18)", color: "#324E32", letterSpacing: "0.01em" }}
                onClick={() => alert("Navigate to /projects")}
              >
                <FolderOpen size={16} strokeWidth={2} />
                View Projects
                <ArrowUpRight size={14} strokeWidth={2} style={{ color: "#F5AA17" }} />
              </button>
            </motion.div>

            {/* Bottom hint */}
            <motion.div
              className="mt-10 flex items-center gap-2 text-xs"
              style={{ color: "rgba(50,78,50,0.3)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <ChevronRight size={12} />
              <span>Press <kbd style={{ background: "rgba(50,78,50,0.08)", border: "1px solid rgba(50,78,50,0.12)", borderRadius: "4px", padding: "1px 5px", fontFamily: "monospace", fontSize: "10px" }}>Alt + ←</kbd> to go back</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}