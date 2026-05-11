'use client'

import { motion } from "framer-motion";

const Marquee = () => {
    const text = "Full Stack Developer * DevOps Engineer * AI Enthusiast * Deployment Geek * ";

    return (
        <div className="w-full overflow-hidden py-15 relative">
            <div className="bg-[#324E32] h-20 -rotate-3 w-[150%] -ml-[25%]"></div>
            <motion.div 
                    className="bg-[#F5AA17] h-20 absolute top-20 left-0 right-0 text-[#324E32] flex items-center whitespace-nowrap overflow-hidden"
                    animate={{
                        x: [0, "-50%"],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "200%" }}
                >
                    <span className="text-xl sm:text-2xl font-semibold px-8">
                        {text.repeat(8)}
                    </span>
                    <span className="text-xl sm:text-2xl font-semibold px-8">
                        {text.repeat(8)}
                    </span>
                </motion.div>
        </div>
    );
};

export default Marquee;