'use client'

import Image from "next/image";
import { ArrowUpRight, Play, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import complete from '@/assets/complete_image.png'
import DualToneButton from "../ui/DualToneButton";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="min-h-screen flex items-center py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center w-full">

          {/* LEFT */}
            <div className="space-y-6 sm:space-y-8">

            {/* Badge */}
            <div>
              <span className="inline-flex items-center gap-2 border border-[#324E32] text-[#324E32] rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium">
                Hello There
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#1E1E1E]">
                I&apos;m{" "}
                <span className="text-[#F5AA17] italic font-extralight underline">
                  Anand Chaudhary
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#2D2D2D] leading-snug">
                Full Stack Developer <br />
                & DevOps Learner.
              </h2>

              <p className="text-[#666] max-w-lg sm:max-w-xl text-base sm:text-lg leading-relaxed pt-2">
                I build scalable full-stack applications using the MENN stack,
                explore DevOps workflows, and create modern digital experiences
                with clean UI and strong backend architecture.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <DualToneButton 
                text="View Projects" 
                href="#projects" 
              />

              <button className="border border-[#324E32] text-sm sm:text-lg text-[#324E32] rounded-full px-8 h-14 sm:h-16 font-medium hover:bg-[#324E32] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 w-fit">
                <Play />
                Resume
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 min-h-[300px] sm:min-h-[400px]">

            {/* Background Shape Image */}
            <Image
              src={complete}
              alt="Background Shape"
              width={320}
              height={320}
              priority
              className="absolute -top-10 sm:-top-20 md:-top-32 lg:-top-40 xl:-top-48 md:right-0 right-15 opacity-90 -z-10 pointer-events-none w-48 sm:w-56 md:w-64 lg:w-80 xl:w-[520px] object-contain md:h-auto h-[370px]"
            />

            {/* Available for Work */}
            <motion.div 
              className="absolute top-8 sm:top-12 md:top-16 lg:top-20 xl:top-50 right-4 sm:right-6 md:right-8 lg:-right-7 z-20 flex gap-2 items-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            >

              {/* Mouse Icon */}
              <MousePointer2
                size={18}
                fill="#324E32"
                stroke="#324E32"
                className="mb-2 rotate-12"
              />

              {/* Badge */}
              <div className="bg-[#324E32] text-white rounded-full px-3 sm:px-5 py-2 sm:py-3 shadow-xl flex items-center gap-2">
                <div className="w-3 h-3 bg-[#F5AA17] rounded-full"></div>

                <span className="text-xs sm:text-sm font-medium">
                  Available for Work
                </span>
              </div>
            </motion.div>

            {/* Bottom Tag */}
            <motion.div 
              className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 z-20 flex gap-2 items-center"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >

              {/* Mouse Icon */}
              <MousePointer2
                size={18}
                fill="#324E32"
                stroke="#324E32"
                className="mb-2 rotate-12"
              />

              {/* Badge */}
              <div className="bg-[#324E32] text-white px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg text-xs sm:text-sm font-medium">
                <p>Full Stack Developer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}