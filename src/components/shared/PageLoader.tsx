"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CircularText from '../ui/CircularText';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("PageLoader mounted");
    // Show loader for 2 seconds (as requested: "2 sections" likely meaning seconds)
    const timer = setTimeout(() => {
      console.log("PageLoader hiding...");
      setLoading(false);
    }, 2000);

    return () => {
        console.log("PageLoader unmounting");
        clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 2.5, // "Smooth zoomed in exit"
            filter: 'blur(10px)',
            transition: { 
                duration: 1, 
                ease: [0.7, 0, 0.3, 1] 
            } 
          }}
          className="fixed pointer-events-none inset-0 z-[100] flex items-center justify-center bg-[#324E32] overflow-hidden"
        >
          {/* Subtle background pattern or glow */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#F5AA17_0%,_transparent_70%)]" />
          
          <div className="relative">
            <CircularText
              text="ANAND*CHAUDHARY*DEVELOPER*"
              onHover="speedUp"
              spinDuration={10}
              className="text-[#F5AA17] sm:w-[300px] sm:h-[300px]"
            />
            
            {/* Center mark */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
                <div className="w-12 h-12 rounded-full bg-[#F5AA17] flex items-center justify-center text-[#324E32] font-black text-xl shadow-[0_0_30px_rgba(245,170,23,0.3)]">
                    A
                </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
