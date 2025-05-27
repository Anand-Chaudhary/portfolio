"use client"

import { motion } from "framer-motion"

interface MarqueeProps {
  items: string[]
  speed?: number
}

export function Marquee({ items, speed = 50 }: MarqueeProps) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {/* First set of items */}
        <div className="flex shrink-0">
          {items.map((item, index) => (
            <div
              key={`first-${index}`}
              className="mx-8 px-6 py-3 bg-white dark:bg-white backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50"
            >
              <span className="text-sm font-medium text-black">{item}</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex shrink-0">
          {items.map((item, index) => (
            <div
              key={`second-${index}`}
              className="mx-8 px-6 py-3 bg-white backdrop-blur-sm rounded-full border border-gray-200/50"
            >
              <span className="text-sm font-medium text-black">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
