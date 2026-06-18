'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Code2, Server, CloudCog, Check, RotateCcw } from 'lucide-react';
import { AngledScrollStack, StackCard } from '@/components/ui/angled-scroll-stack';

interface ToolItem {
  name: string;
}

interface StackCategory {
  index: number;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  themeColor: string;
  accentBg: string;
  tools: ToolItem[];
}

const TOOLKIT: StackCategory[] = [
  {
    index: 0,
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Client-Side & UI/UX',
    description: 'Crafting responsive, high-performance, and visually engaging user interfaces with modern React frameworks and fluid animations.',
    icon: Code2,
    themeColor: '#324E32', // Green
    accentBg: '#EAF0EA',
    tools: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'HTML5 & CSS3' },
      { name: 'Zustand' }
    ]
  },
  {
    index: 1,
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'APIs & Databases',
    description: 'Designing secure, scalable API architectures and optimizing database structures to support high-throughput, reliable applications.',
    icon: Server,
    themeColor: '#F5AA17', // Gold
    accentBg: '#FFF9E6',
    tools: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'RESTful APIs' },
      { name: 'Mongoose ORM' },
      { name: 'GraphQL' },
      { name: 'Redis Caching' }
    ]
  },
  {
    index: 2,
    id: 'devops',
    title: 'DevOps & Systems',
    subtitle: 'Cloud & Infrastructure',
    description: 'Automating continuous integration, containerizing services, managing cloud infrastructure, and configuring high-availability environments.',
    icon: CloudCog,
    themeColor: '#324E32', // Green
    accentBg: '#EAF0EA',
    tools: [
      { name: 'Docker' },
      { name: 'Nginx' },
      { name: 'GitHub Actions' },
      { name: 'Linux / Bash' },
      { name: 'AWS Cloud' },
      { name: 'Cloudflare' },
      { name: 'Kubernetes' },
      { name: 'Git & Git Flow' }
    ]
  }
];

const Tools = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined' || window.innerWidth < 1024) {
        // On mobile, skip sticky scroll cycling to allow normal scrolling
        return;
      }
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const containerTop = rect.top + window.scrollY;
      
      const start = containerTop;
      const end = containerTop + containerHeight - window.innerHeight;
      
      const current = window.scrollY;
      let progress = (current - start) / (end - start);
      progress = Math.max(0, Math.min(1, progress));
      
      // Map scroll progress smoothly to cards
      if (progress < 0.35) {
        setActiveIndex(0);
      } else if (progress < 0.70) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Trigger initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full lg:h-[220vh] bg-gray-100">
      {/* Sticky Inner Wrapper for Desktop (Standard section padding on mobile) */}
      <div className="w-full flex items-center py-20 sm:py-24 lg:py-0 lg:sticky lg:top-0 lg:h-screen overflow-visible">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-gray-200/50 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: TITLE & CONTROLS */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <p className="flex font-medium gap-2 items-center text-[#324E32] text-base sm:text-lg">
                  <ArrowLeft stroke="#324E32" className="w-5 h-5" />
                  My Toolkit
                </p>
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] leading-tight">
                  Technologies <br />
                  <span className="italic text-[#F5AA17] font-light">and Tools</span> I Use
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
                  I build and deploy applications using a robust set of modern tools. Scroll to stack and cycle cards dynamically, or use the interactive tabs below.
                </p>
              </div>

              {/* Interactive Tab Selector */}
              <div className="flex flex-col gap-3 max-w-sm">
                {TOOLKIT.map((category) => {
                  const isActive = activeIndex === category.index;
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveIndex(category.index)}
                      className={`
                        w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 text-left cursor-pointer
                        ${isActive 
                          ? 'bg-[#324E32] border-[#324E32] text-white shadow-lg scale-[1.02]' 
                          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                          style={{ 
                            backgroundColor: isActive ? '#F5AA17' : '#EAF0EA',
                            color: isActive ? '#324E32' : '#324E32'
                          }}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <p className={`text-xs font-semibold uppercase tracking-wider ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                            {category.subtitle}
                          </p>
                          <p className="text-sm sm:text-base font-bold">
                            {category.title}
                          </p>
                        </div>
                      </div>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-[#F5AA17]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Interaction Tip */}
              <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                <RotateCcw className="w-4 h-4 text-[#F5AA17]" />
                <span>Scroll down to cycle or click cards directly</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Angled 3D Stack */}
            <div className="lg:col-span-7 flex justify-center items-center overflow-visible">
              <AngledScrollStack
                className="w-full max-w-lg min-h-[500px]"
                itemStackDistance={70}
                baseScale={0.88}
                itemScale={0.04}
                depthDistance={120}
                skewAmount={6}
                blurAmount={1.2}
                stackPosition={200}
                scaleEndPosition={60}
                activeIndex={activeIndex}
              >
                {TOOLKIT.map((category) => (
                  <StackCard 
                    key={category.id} 
                    cardIndex={category.index}
                    onClick={() => setActiveIndex(category.index)}
                    className="h-[430px] sm:h-[380px] md:h-[350px] bg-white border border-[#324E32]/10 shadow-2xl text-[#1E1E1E]"
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        
                        {/* Category Header */}
                        <div className="flex items-center gap-4 mb-4 sm:mb-5">
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:rotate-6"
                            style={{ 
                              backgroundColor: category.accentBg,
                              color: category.themeColor 
                            }}
                          >
                            <category.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-widest text-[#666] font-semibold">
                              {category.subtitle}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] leading-tight">
                              {category.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                          {category.description}
                        </p>
                        
                      </div>

                      {/* Tools Grid */}
                      <div>
                        <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                          Core Technologies & Libraries
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {category.tools.map((tool, index) => (
                            <div
                              key={index}
                              className="bg-[#F8F9F8] border border-gray-100 rounded-xl p-2 px-3 flex items-center gap-1.5 hover:border-[#324E32]/20 hover:bg-[#324E32]/5 hover:scale-[1.02] transition-all duration-200 cursor-pointer group"
                            >
                              <Check 
                                className="w-3.5 h-3.5 shrink-0 transition-colors" 
                                style={{ color: category.themeColor }}
                              />
                              <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#324E32]">
                                {tool.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </StackCard>
                ))}
              </AngledScrollStack>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
