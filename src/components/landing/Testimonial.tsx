"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import pranjal from '@/assets/pranjal.png'
import himani from '@/assets/himani.jpg'
import pankaj from '@/assets/pankaj.jpeg'
import Image from "next/image";

const LinkedInIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const testimonies = [
    {
        name: "Himani Singhi",
        position: "Data Specialist",
        company: "C2FO",
        testimony: "Working with Anand on our project was an amazing experience. He was super dedicated, brought fresh ideas to the table, and handled challenges like a pro. His energy and problem-solving mindset kept the whole team motivated. Anyone would be lucky to have him on their team!",
        rating: 4.5,
        image: himani,
        linkedin: "https://www.linkedin.com/in/himani-singhi/"
    },
    {
        name: "Pranjal Sapkota",
        position: "Student",
        company: "VIT",
        testimony: " I've had the pleasure of working with Anand Chaudhary. He is highly proficient in React.js and demonstrates strong command over the MERN stack. Anand is dependable, quick to learn, and consistently delivers high-quality code. I highly recommend him for any full-stack development role.",
        rating: 5,
        image: pranjal,
        linkedin: "https://www.linkedin.com/in/pranjal-sapkota-6370822a6/"
    },
    {
        name: "Pankaj Bhattarai",
        position: "Managed me directly",
        company: "Kalpabriksha Nepal",
        testimony: "Anand Chaudhary interned as a Frontend Developer at Kalpabriksha (Jan–Mar 2025), where he led the migration to a React-based stack. He significantly improved performance, UI, and user experience through clean, efficient code and deep React knowledge. Anand stood out for his problem-solving mindset, strong collaboration, and eagerness to learn. He is highly recommended for any development role.",
        rating: 5,
        image: pankaj,
        linkedin: "https://www.linkedin.com/in/pankajbhattarai/"
    },
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonies.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);

    const getSlideIndex = (offset: number) => {
        return (currentIndex + offset + testimonies.length) % testimonies.length;
    };

    return (
        <section id="testimonials" className="py-24 bg-[#F8F8F8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-7 h-[1.5px] bg-[#F5AA17] rounded-full" />
                        <span className="text-[#F5AA17] text-[11px] font-semibold tracking-widest uppercase">Clients Testimonials</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                        The Impact of My Work: <br />
                        <span className="text-[#F5AA17] italic font-medium">Client Testimonials</span>
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative h-[550px] sm:h-[450px] flex items-center justify-center">
                    <div className="relative w-full flex items-center justify-center">
                        <AnimatePresence initial={false}>
                            {[-1, 0, 1].map((offset) => {
                                const index = getSlideIndex(offset);
                                const testimony = testimonies[index];
                                const isActive = offset === 0;

                                return (
                                    <motion.div
                                        key={`${index}-${offset}`}
                                        initial={{ 
                                            opacity: 0, 
                                            scale: 0.8,
                                            x: offset * 400
                                        }}
                                        animate={{ 
                                            opacity: isActive ? 1 : 0.4, 
                                            scale: isActive ? 1 : 0.85,
                                            x: offset * 320, // Responsive offset
                                            zIndex: isActive ? 10 : 0,
                                            filter: isActive ? "blur(0px)" : "blur(2px)"
                                        }}
                                        exit={{ 
                                            opacity: 0, 
                                            scale: 0.8,
                                            x: offset * 400
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute w-full max-w-sm sm:max-w-lg bg-white rounded-[32px] p-6 sm:p-10 shadow-xl border border-gray-100"
                                    >
                                        {/* Stars and Rating */}
                                        <div className="flex items-center gap-1.5 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    size={16} 
                                                    fill={i < Math.floor(testimony.rating) ? "#F5AA17" : "transparent"} 
                                                    stroke="#F5AA17" 
                                                    strokeWidth={2.5}
                                                />
                                            ))}
                                            <span className="ml-2 text-sm font-bold text-gray-800">{testimony.rating.toFixed(1)}</span>
                                        </div>

                                        {/* Background Quote */}
                                        <Quote className="absolute right-8 top-10 text-gray-50 w-20 h-20 sm:w-28 sm:h-28 -z-0" />

                                        {/* Testimony Text */}
                                        <p className="relative z-10 text-gray-600 text-sm sm:text-base leading-relaxed mb-10 italic">
                                            &quot;{testimony.testimony}&quot;
                                        </p>

                                        {/* Author Info */}
                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F5AA17] bg-gray-50 flex-shrink-0">
                                                <Image 
                                                    src={testimony.image} 
                                                    alt={testimony.name} 
                                                    loading="eager"
                                                    className="w-auto h-auto object-cover"
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-gray-900 text-base sm:text-lg truncate">{testimony.name}</h4>
                                                <p className="text-xs sm:text-sm text-gray-500 truncate">{testimony.position} @ {testimony.company}</p>
                                            </div>
                                            <a 
                                                href={testimony.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="w-8 h-8 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                                            >
                                                <LinkedInIcon size={16} className="fill-current stroke-none" />
                                            </a>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mt-8 sm:mt-12">
                    <button
                        onClick={prev}
                        className="w-12 h-12 rounded-full bg-[#324E32] text-white flex items-center justify-center hover:bg-[#F5AA17] hover:text-[#324E32] transition-all duration-300 shadow-md group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={next}
                        className="w-12 h-12 rounded-full bg-[#F5AA17] text-[#324E32] flex items-center justify-center hover:bg-[#324E32] hover:text-white transition-all duration-300 shadow-md group"
                    >
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
