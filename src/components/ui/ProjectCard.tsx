"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
    title: string;
    link?: string;
    image: string;
    technologies: string[];
    onHover: (label: string | null) => void;
}

// ─── Single card ──────────────────────────────────────────────────────────────

const ProjectCard = ({ title, link, image, technologies, onHover }: ProjectCardProps) => {
    const floatingLabel = title.split(" ").slice(0, 2).join(" ").toUpperCase();

    return (
        <Link href={link || "#"} target="_blank" aria-label={`View ${title}`}>
            <div 
                className="group relative bg-white w-full rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
                onMouseEnter={() => onHover(floatingLabel)}
                onMouseLeave={() => onHover(null)}
            >
                {/* Image */}
                <div className="relative w-[calc(100%-24px)] h-56 sm:h-80 overflow-hidden bg-gray-100 rounded-[1.5rem] mx-3 mt-3 flex-shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Bottom */}
                <div className="px-4 pb-4 pt-3 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs font-medium px-3 py-1 rounded-full border border-[#F5AA17] text-[#324E32]"
                                style={{ background: "rgba(245,170,23,0.10)" }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-end justify-between gap-3">
                        <h3 className="text-base font-bold text-gray-800 leading-snug flex-1">{title}</h3>
                        <button className="w-11 h-11 flex items-center justify-center rounded-full bg-[#324E32] text-white hover:bg-[#F5AA17] hover:text-[#324E32] transition-colors duration-300">
                            <ArrowUpRight size={18} strokeWidth={2.2} />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

// ─── Shared overlay ───────────────────────────────────────────────────────────

const HoverOverlay = ({ label }: { label: string }) => {
    const texts = label.split("");

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] hidden lg:flex items-center justify-center pointer-events-none bg-white/10 backdrop-blur-sm"
        >
            <h1 className="text-[40px] md:text-[80px] lg:text-[120px] font-black text-[#324E32] flex overflow-hidden">
                {texts.map((text, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 120 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -120 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.03,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {text === " " ? "\u00A0" : text}
                    </motion.span>
                ))}
            </h1>
        </motion.div>
    );
};

// ─── Section wrapper ─────────────────────────────────────────────────────────

interface Project {
    title: string;
    link?: string;
    image: string;
    technologies: string[];
}

interface ProjectsSectionProps {
    projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
    const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

    return (
        <>
            <AnimatePresence>
                {hoveredLabel && <HoverOverlay label={hoveredLabel} />}
            </AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full justify-center">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        {...project}
                        onHover={setHoveredLabel}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectCard;