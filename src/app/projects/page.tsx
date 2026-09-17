"use client";

import React, { useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Search,
  X,
  FileText,
  Rocket,
  Layers,
  Code2,
  CheckCircle2,
  Cpu,
  Globe,
} from "lucide-react";

const GithubIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

import topnotch from "@/assets/topnotch.png";
import gurkhaBazaar from "@/assets/gurkhabazaar.png";
import placeholder from "@/assets/placeholder.png";
import placeholder2 from "@/assets/placeholder2.png";
import ats from "@/assets/ATS.png";
import kalpabriksha from "@/assets/kalpabriskha.png";
import restroTrackynn from "@/assets/restroTrackynn.png";
import sahara from "@/assets/sahara.png";
import gyann from "@/assets/gyann.png";
import DualToneButton from "@/components/ui/DualToneButton";

// ─── Project Data Types ────────────────────────────────────────────────────────

type ProjectCategory = "All" | "Full Stack" | "AI & Tools" | "Client Work";

interface ProjectItem {
  id: string;
  title: string;
  category: "Full Stack" | "AI & Tools" | "Client Work";
  categoryLabel: string;
  status: "Live Production" | "Open Source" | "Client Platform";
  featured?: boolean;
  image: StaticImageData | string;
  imageAspect?: "aspect-[16/10]" | "aspect-[4/3]" | "aspect-[16/9]" | "aspect-square";
  technologies: string[];
  summary: string;
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

// ─── Curated Project Showcase Data ──────────────────────────────────────────

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "code-reviewer",
    title: "AI Code Reviewer Engine",
    category: "AI & Tools",
    categoryLabel: "AI & Automation",
    status: "Open Source",
    featured: true,
    year: "2025",
    image: placeholder,
    imageAspect: "aspect-[16/10]",
    technologies: ["React", "Express", "Docker", "Gemini API", "Nginx", "K8s", "IaC", "AWS"],
    summary:
      "An intelligent automated code analysis engine harnessing Google Gemini API to evaluate pull requests, uncover memory leaks and security smells, benchmark algorithmic efficiency, and generate contextual refactoring suggestions in real time.",
    highlights: [
      "Automated multi-language AST syntax linting & security scoring",
      "Containerized microservice architecture deployed on Kubernetes (K8s)",
      "Zero-overhead automated GitHub webhook integration pipeline",
      "Reduces initial code review triage time by over 40%"
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/Anand-Chaudhary/codeReviewer",
  },
  {
    id: "presento",
    title: "Presento - AI Slides Workspace",
    category: "AI & Tools",
    categoryLabel: "Generative AI",
    status: "Open Source",
    featured: true,
    year: "2025",
    image: placeholder2,
    imageAspect: "aspect-[4/3]",
    technologies: ["React", "Express", "Docker", "Gemini API", "Supabase", "IaC", "K8s", "AWS", "Nginx"],
    summary:
      "A next-generation AI presentation generator that transforms raw Markdown drafts, meeting transcripts, or outline prompts into fully formatted, interactive slide decks ready for executive demonstrations.",
    highlights: [
      "Real-time collaborative editing state synced with Supabase Postgres",
      "Dynamic contextual theme engine with custom typography & layout export",
      "Automated speaker notes synthesis and instant PDF/PPTX generation",
      "Dockerized microservices orchestrated with Kubernetes and Nginx ingress"
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/Anand-Chaudhary/slides-go",
  },
  {
    id: "ats-fleexii",
    title: "ATS FLEEXII - AI Talent Acquisition",
    category: "AI & Tools",
    categoryLabel: "Recruitment Platform",
    status: "Live Production",
    featured: true,
    year: "2025",
    image: ats,
    imageAspect: "aspect-[16/10]",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "My SQL", "Nginx", "VPS Deployment"],
    summary:
      "An advanced AI-powered talent acquisition platform designed to connect premier candidates with innovative companies. Streamlines recruitment pipelines by up to 60% through automated resume scoring, candidate evaluation, and intelligent role matching.",
    highlights: [
      "AI-driven automated resume parsing, ranking, and job qualification matching",
      "Interactive hiring dashboard for managing applicant pipelines and candidate stages",
      "Automated interview scheduling and applicant tracking analytics",
      "High-conversion, modern enterprise design with seamless client demo booking"
    ],
    liveUrl: "https://ats.fleexii.co.uk/",
    githubUrl: undefined,
  },
  {
    id: "restro-trackynn",
    title: "RestroTrackynn - Cloud Restaurant ERP",
    category: "Full Stack",
    categoryLabel: "Restaurant POS & ERP",
    status: "Live Production",
    featured: true,
    year: "2025",
    image: restroTrackynn,
    imageAspect: "aspect-[16/9]",
    technologies: ["React", "Node.js", "Nest.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    summary:
      "A comprehensive, all-in-one restaurant operations ecosystem that centralizes order processing, interactive POS, live kitchen display systems (KDS), table management, and real-time inventory tracking in a single cloud dashboard.",
    highlights: [
      "Integrated POS billing supporting Dine In, Take Away, and Delivery workflows",
      "Real-time kitchen order ticket (KOT) sync and instant table floor assignments",
      "Automated inventory consumption tracking with low-stock threshold triggers",
      "Contactless QR-code digital menu ordering for streamlined customer dining"
    ],
    liveUrl: "https://restro.trackynn.com/",
    githubUrl: undefined,
  },
  {
    id: "sahara-healthcare",
    title: "Sahara (सहारा) - Eldercare Platform",
    category: "Full Stack",
    categoryLabel: "Healthcare & Caregiving",
    status: "Live Production",
    featured: true,
    year: "2025",
    image: sahara,
    imageAspect: "aspect-[16/9]",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    summary:
      "A dedicated healthcare coordination and eldercare platform built with empathy ('Caring for those who once cared for us'), allowing families and caregivers to manage health records, prescriptions, medication alerts, and clinical appointments all in one place.",
    highlights: [
      "Centralized chronic medication schedule management & dosage reminder triggers",
      "Secure digital medical record archive with role-based caregiver access",
      "One-click OAuth authentication via Google and secure credential storage",
      "Thoughtfully designed, high-accessibility UI tailored for family caregivers"
    ],
    liveUrl: "https://www.saharasewa.org/",
    githubUrl: "https://github.com/swasthyamaxxing/sahaara-frontend",
  },
  {
    id: "gyann-app",
    title: "Gyann App - Student Learning Ecosystem",
    category: "Full Stack",
    categoryLabel: "EdTech Platform",
    status: "Live Production",
    year: "2024",
    image: gyann,
    imageAspect: "aspect-[16/10]",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Framer Motion"],
    summary:
      "A comprehensive EdTech study platform and companion for secondary school students (Class 8–12), offering interactive question banks, virtual science simulations (GyannSim), past exam paper solutions, practical files, and revision flashcards.",
    highlights: [
      "Extensive question paper repository with step-by-step verified answer keys",
      "Interactive STEM virtual laboratory simulations (GyannSim) for visual learning",
      "Digital flashcards, lecture notes, and chapter-wise MCQ self-assessment quizzes",
      "Gamified student revision workflows and curriculum progression tracking"
    ],
    liveUrl: "https://gyannapp.com",
    githubUrl: undefined,
  },
  {
    id: "kalpabriksha-nepal",
    title: "Kalpabriksha Nepal Community Portal",
    category: "Client Work",
    categoryLabel: "Community Platform",
    status: "Client Platform",
    year: "2025",
    image: kalpabriksha,
    imageAspect: "aspect-[16/9]",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    summary:
      "The official web platform and community engagement portal for Kalpabriksha Nepal, a youth empowerment and education nonprofit. Led the frontend migration to React, delivering dramatic improvements in site responsiveness, UI elegance, and loading speed.",
    highlights: [
      "Led the migration to a modern, performant React-based frontend stack",
      "Showcases youth research camps, programs, resource libraries, and FAQ directories",
      "Integrated donor engagement, contact channels, and program gallery showcases",
      "Praised for clean code architecture, problem-solving, and seamless collaboration"
    ],
    liveUrl: "https://kalpabriksha.org",
    githubUrl: undefined,
  },
  {
    id: "topnotch-sydney",
    title: "Topnotch Sydney Digital Platform",
    category: "Client Work",
    categoryLabel: "Client Platform",
    status: "Client Platform",
    featured: true,
    year: "2025",
    image: topnotch,
    imageAspect: "aspect-[16/10]",
    technologies: ["Next.js", "Framer-Motion", "Tailwind CSS", "TypeScript", "PHP"],
    summary:
      "A bespoke, high-conversion commercial platform engineered for an Australian premier service company. Features frictionless booking flows, rich micro-animations, and hyper-optimized search engine visibility.",
    highlights: [
      "Near-perfect 98+ Google Lighthouse performance & accessibility score",
      "Interactive multi-step quote estimator and custom scheduling flow",
      "Ultra-fluid brand micro-interactions built with Framer Motion",
      "Server-side rendered dynamic metadata for targeted regional SEO"
    ],
    liveUrl: "https://topnotch.sydney/",
    githubUrl: undefined,
  },
  {
    id: "gurkha-bazaar",
    title: "Gurkha Bazaar E-Commerce",
    category: "Client Work",
    categoryLabel: "E-Commerce",
    status: "Live Production",
    year: "2024",
    image: gurkhaBazaar,
    imageAspect: "aspect-[16/10]",
    technologies: ["Next.js", "Framer-Motion", "Tailwind CSS", "PHP", "Stripe"],
    summary:
      "An authentic artisanal e-commerce storefront delivering traditional Himalayan goods to a global customer base with fast faceted product filtering, multi-currency pricing, and secure Stripe checkout.",
    highlights: [
      "Instant faceted search filtering across categories and price bands",
      "Streamlined guest and member checkout with fraud protection",
      "Optimized Next.js image caching delivering sub-second page transitions",
      "Mobile-first responsive architecture tested across all modern devices"
    ],
    liveUrl: "https://gurkhabazaar.com/",
    githubUrl: undefined,
  },
];

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Full Stack",
  "AI & Tools",
  "Client Work"
];

// ─── Individual Project Card with Dropdown Summary ───────────────────────────

interface ProjectCardProps {
  project: ProjectItem;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
}

const ProjectCard = ({ project, isExpanded, onToggleExpand }: ProjectCardProps) => {
  return (
    <div className="break-inside-avoid mb-6">
      <div className="group relative bg-white rounded-[2rem] border border-[#E9E4D8] hover:border-[#F5AA17]/70 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(50,78,50,0.09)] transition-all duration-300 flex flex-col overflow-hidden">
        
        {/* Top Media Container */}
        <div className="relative mx-3.5 mt-3.5 rounded-[1.4rem] overflow-hidden bg-[#FAF6EE] border border-[#EBE6DC]/60">
          <div className={`relative w-full ${project.imageAspect || "aspect-[16/10]"} overflow-hidden`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Floating Category Pill */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#324E32] backdrop-blur-md shadow-sm border border-[#324E32]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5AA17]" />
              {project.categoryLabel}
            </span>
          </div>

          {/* Quick External Link (if available) */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="absolute top-3 right-3 z-10">
              <Link
                href={project.liveUrl || project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="w-8 h-8 rounded-full bg-white/95 text-[#324E32] hover:bg-[#F5AA17] hover:text-[#324E32] flex items-center justify-center backdrop-blur-md shadow-sm border border-[#324E32]/10 transition-colors duration-200"
              >
                <ArrowUpRight size={15} strokeWidth={2.4} />
              </Link>
            </div>
          )}

          {/* Year & Status Overlay Pill at bottom */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-black/60 text-white/90 backdrop-blur-sm">
              {project.year}
            </span>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#324E32]/85 text-white backdrop-blur-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5AA17] animate-pulse" />
              {project.status}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col gap-4">
          
          {/* Title & Primary Action Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1E1E1E] group-hover:text-[#324E32] transition-colors leading-snug">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#F5AA17]/40 text-[#324E32] bg-[#F5AA17]/10 transition-colors hover:bg-[#F5AA17]/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ─── DROPDOWN TRIGGER BUTTON ─── */}
          <button
            type="button"
            onClick={() => onToggleExpand(project.id)}
            aria-expanded={isExpanded}
            className={`w-full mt-1 flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer text-xs sm:text-sm font-semibold ${
              isExpanded
                ? "bg-[#324E32] text-white border-[#324E32] shadow-sm"
                : "bg-[#FAF6EE] text-[#324E32] hover:bg-[#F3EDDE] border-[#E9E4D8]"
            }`}
          >
            <span className="flex items-center gap-2">
              <FileText size={14} className={isExpanded ? "text-[#F5AA17]" : "text-[#324E32]"} />
              {isExpanded ? "Hide Summary & Details" : "Project Summary & Details"}
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180 text-[#F5AA17]" : "text-[#324E32]"
              }`}
            />
          </button>

          {/* ─── EXPANDABLE DROPDOWN CONTENT ─── */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="pt-3 pb-1 border-t border-[#EBE6DC] flex flex-col gap-3.5">
                  {/* Summary Text */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5AA17]">
                      About this project
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlights / Features List */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#324E32]">
                        Key Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#555555]">
                            <CheckCircle2
                              size={13}
                              className="text-[#F5AA17] shrink-0 mt-0.5"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Dropdown Action Links */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EBE6DC]/80">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#F5AA17] text-[#324E32] hover:bg-[#324E32] hover:text-white transition-colors duration-200"
                      >
                        <Globe size={13} />
                        Visit Live Demo
                        <ArrowUpRight size={12} strokeWidth={2.5} />
                      </Link>
                    )}

                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-[#324E32] border border-[#324E32]/20 hover:border-[#324E32] hover:bg-[#324E32] hover:text-white transition-colors duration-200"
                      >
                        <GithubIcon size={13} />
                        GitHub Repository
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Footer Links Bar */}
          <div className="pt-2 flex items-center justify-between border-t border-[#EBE6DC]/60 text-xs text-[#666666]">
            <span className="font-medium text-[11px] text-[#324E32]/80">
              {project.category}
            </span>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5AA17] p-1 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon size={16} />
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5AA17] p-1 transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={16} />
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// ─── Main Projects Page Component ───────────────────────────────────────────

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCardId, setActiveCardId] = useState<string | null>("code-reviewer");

  const toggleCardExpansion = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  // Filtered & Searched projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
        project.categoryLabel.toLowerCase().includes(query) ||
        project.status.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1E1E1E]">
      
      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-12 border-b border-[#EBE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Back Link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#324E32] hover:text-[#F5AA17] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center group-hover:border-[#F5AA17] group-hover:bg-[#F5AA17] group-hover:text-white transition-all shadow-xs">
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
              </div>
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              
              {/* Pill badge */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-[2px] bg-[#F5AA17] rounded-full" />
                <span className="text-[#324E32] text-xs font-bold uppercase tracking-widest">
                  Featured Portfolio
                </span>
              </div>

              {/* Title */}
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1E] leading-[1.1] tracking-tight">
                Crafted With <br />
                <span className="text-[#F5AA17] italic font-light">Purpose & Precision</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[#555555] text-base sm:text-lg leading-relaxed max-w-2xl pt-1">
                Explore an extensive collection of full-stack applications, intelligent AI tools,
                cloud DevOps deployments, and client solutions built for real-world impact.
              </p>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 lg:pb-2">
              <div className="bg-white px-5 py-4 rounded-2xl border border-[#E5E5E5] shadow-xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#324E32]/10 text-[#324E32] flex items-center justify-center font-bold">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-xl font-bold text-[#324E32]">{PROJECTS_DATA.length}+</div>
                  <div className="text-xs text-[#666666] font-medium">Curated Projects</div>
                </div>
              </div>

              <div className="bg-white px-5 py-4 rounded-2xl border border-[#E5E5E5] shadow-xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F5AA17]/15 text-[#F5AA17] flex items-center justify-center font-bold">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="text-xl font-bold text-[#324E32]">100%</div>
                  <div className="text-xs text-[#666666] font-medium">Production Ready</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Controls: Category Filter & Search Bar ──────────────────────────── */}
      <section className="sticky top-16 md:top-24 z-40 bg-[#FAF6EE]/90 backdrop-blur-md py-5 border-b border-[#EBE6DC] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-[#324E32] text-white shadow-sm ring-2 ring-[#324E32]/20"
                        : "bg-white text-[#4A4A4A] border border-[#E0DBD0] hover:border-[#F5AA17] hover:text-[#324E32]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input & Expand/Collapse Toggle */}
            <div className="flex items-center gap-3">
              {/* Search Box */}
              <div className="relative flex-1 md:w-64 sm:w-72">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888888] pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search projects or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#E0DBD0] focus:border-[#F5AA17] rounded-full pl-9 pr-8 py-2 text-xs sm:text-sm text-[#1E1E1E] placeholder:text-[#999999] outline-none transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#1E1E1E] p-0.5"
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Collapse Active Details Button */}
              {activeCardId && (
                <button
                  onClick={() => setActiveCardId(null)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E0DBD0] hover:border-[#F5AA17] hover:text-[#324E32] text-xs font-medium text-[#555555] transition-colors cursor-pointer"
                  title="Collapse opened project details"
                >
                  <X size={13} />
                  Collapse Details
                </button>
              )}
            </div>

          </div>

          {/* Results feedback indicator */}
          <div className="flex items-center justify-between pt-3 text-xs text-[#777777]">
            <p>
              Showing <span className="font-bold text-[#324E32]">{filteredProjects.length}</span> of{" "}
              <span>{PROJECTS_DATA.length}</span> projects
              {selectedCategory !== "All" && (
                <span> in <strong className="text-[#324E32]">{selectedCategory}</strong></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;<strong className="text-[#F5AA17]">{searchQuery}</strong>&rdquo;</span>
              )}
            </p>
            {activeCardId && (
              <span className="hidden md:inline-block font-medium text-[#324E32]/70">
                Tip: Showing details for selected project (one active at a time)
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ─── Pinterest / Masonry Layout Grid ─────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-3xl border border-[#EBE6DC] p-8 max-w-lg mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#FAF6EE] text-[#F5AA17] flex items-center justify-center mx-auto mb-4">
              <Search size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">No projects found</h3>
            <p className="text-sm text-[#666666] mb-6">
              We couldn&apos;t find any project matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-[#324E32] hover:bg-[#F5AA17] text-white hover:text-[#324E32] rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={activeCardId === project.id}
                onToggleExpand={toggleCardExpansion}
              />
            ))}
          </div>
        )}
      </main>

      {/* ─── Bottom Call to Action Section ───────────────────────────────────── */}
      <section className="py-20 bg-[#324E32] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-[#F5AA17] border border-white/10">
            <Rocket size={14} />
            Let&apos;s Build Together
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Have a project in mind or <br />
            <span className="text-[#F5AA17] italic font-light">looking for a developer?</span>
          </h2>

          <p className="text-[#B8C8B8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I am always open to discussing new challenges, engineering robust applications,
            and collaborating on innovative ideas.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <DualToneButton
              text="Get In Touch"
              href="/#contact"
              className="w-full sm:w-auto"
            />
            <Link
              href="https://github.com/Anand-Chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 h-14 sm:h-16 rounded-full border-2 border-white/30 hover:border-[#F5AA17] hover:text-[#F5AA17] text-white font-bold text-sm sm:text-base transition-all duration-300"
            >
              <GithubIcon size={18} />
              Follow on GitHub
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;