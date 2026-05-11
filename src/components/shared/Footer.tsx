"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Ballpit from "../Ballpit";



const Marquee = () => {
    const text = "LET'S WORK TOGETHER * START A PROJECT * SAY HELLO * ";
    return (
        <div className="overflow-hidden bg-[#F5AA17] py-4 sm:py-6 select-none border-b border-[#324E32]/10">
            <motion.div
                className="flex items-center whitespace-nowrap"
                animate={{
                    x: [0, "-50%"],
                }}
                transition={{
                    duration: 70,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ width: "fit-content" }}
            >
                <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#324E32] px-4 tracking-tighter italic">
                    {text.repeat(6)}
                </span>
                <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#324E32] px-4 tracking-tighter italic">
                    {text.repeat(6)}
                </span>
            </motion.div>
        </div>
    );
};

// ─── Social icon pill ─────────────────────────────────────────────────────────
const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        target="_blank"
        className="w-8 h-8 rounded-full border border-[#324E32]/20 flex items-center justify-center text-[#324E32]/60 hover:bg-[#F5AA17] hover:border-[#F5AA17] hover:text-white transition-all duration-200"
    >
        {children}
    </Link>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => {
    return (
        <footer className="relative bg-white overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {/* Ballpit Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <Ballpit
                    colors={[0xF5AA17, 0x324E32, 0xF5AA17]}
                    count={100}
                    gravity={0.4}
                    friction={0.997}
                    wallBounce={0.95}
                    followCursor={true}
                    ambientIntensity={2}
                />
            </div>

            {/* Content overlay - ensures background doesn't interfere with interaction if needed, 
                though we used pointer-events-none on the bg div */}
            <div className="relative z-10">

            {/* Marquee strip */}
            <Marquee />

            {/* Main footer body */}
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1.4fr] gap-12">

                    {/* Col 1 — Brand */}
                    <div className="flex flex-col gap-5">
                        {/* Avatar + name */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#F5AA17] flex items-center justify-center text-[#324E32] font-bold text-lg flex-shrink-0">
                                A
                            </div>
                            <span className="font-bold text-xl text-[#324E32] tracking-tight">Anand Chaudhary</span>
                        </div>

                        <p className="text-sm text-[#324E32]/55 leading-relaxed max-w-[280px]">
                            Passionate Full Stack Developer and DevOps enthusiast building scalable, high-performance digital experiences with a focus on modern web architecture.
                        </p>

                        {/* Socials */}
                        <div className="flex items-center gap-2 mt-1">
                            {/* Instagram */}
                            <SocialIcon href="https://instagram.com/aahhhkaash">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                            </SocialIcon>
                            {/* GitHub */}
                            <SocialIcon href="https://github.com/Anand-Chaudhary">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </SocialIcon>
                            {/* LinkedIn */}
                            <SocialIcon href="https://linkedin.com/in/anandchaudharymern">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                            </SocialIcon>
                            {/* Medium */}
                            <SocialIcon href="https://medium.com/@chaudharyaakash234">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.82 6.82 0 010 12a6.82 6.82 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75 1.19 2.58 1.19 5.75z" />
                                </svg>
                            </SocialIcon>
                        </div>
                    </div>

                    {/* Col 2 — Navigation */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#324E32] mb-5">Navigation</p>
                        <ul className="flex flex-col gap-3">
                            {["Home", "About", "Projects", "Blog"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={
                                            item === 'Home' ? '/' : 
                                            item === 'Blog' ? 'https://medium.com/@chaudharyaakash234' : 
                                            `/${item.toLowerCase()}`
                                        }
                                        target={item === 'Blog' ? '_blank' : undefined}
                                        className="text-sm text-[#324E32]/60 hover:text-[#F5AA17] transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Contact */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#324E32] mb-5">Contact</p>
                        <ul className="flex flex-col gap-3">
                            <li className="text-sm text-[#324E32]/60">Email me at:</li>
                            <li>
                                <a href="mailto:anandchaudhary2064@gmail.com" className="text-sm font-medium text-[#324E32] hover:text-[#F5AA17] transition-colors">
                                    anandchaudhary2064@gmail.com
                                </a>
                            </li>
                            <li className="text-sm text-[#324E32]/60 leading-relaxed mt-2">
                                Based in:<br />
                                <span className="text-[#324E32] font-medium">Kathmandu, Nepal</span>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4 — Newsletter */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#324E32] mb-5">
                            Get the latest information
                        </p>
                        <div className="flex items-center gap-0 border border-[#324E32]/15 rounded-full overflow-hidden pr-1 pl-4 bg-white focus-within:border-[#F5AA17] transition-colors">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-transparent text-sm text-[#324E32] placeholder:text-[#324E32]/35 outline-none py-2.5 min-w-0"
                            />
                            <button className="w-8 h-8 rounded-full bg-[#324E32] flex items-center justify-center text-white hover:bg-[#F5AA17] hover:text-[#324E32] transition-colors duration-200 flex-shrink-0">
                                <ArrowRight size={13} strokeWidth={2.4} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#324E32]/10 py-6 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-[#324E32]/45">
                        Copyright © 2026 <span className="text-[#F5AA17] font-medium">Anand Chaudhary</span>. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {["User Terms & Conditions", "Privacy Policy"].map((item, i) => (
                            <Link key={i} href="#" className="text-xs text-[#324E32]/45 hover:text-[#F5AA17] transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            </div>
        </footer>

    );
};

export default Footer;