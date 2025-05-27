"use client"

import { motion } from "framer-motion";
import image from "../assets/IMG-20250404-WA0278.jpg"
import { ArrowDown, ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Home = () => {
  return (
    <motion.main
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Image Placeholder */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center p-4"
        variants={fadeInUp}
        whileHover={{
          scale: 1.02,
          rotateY: 5,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem]">
          <div className="absolute inset-0 bg-white/20 ckdrop-blur-xl rounded-3xl border border-white/30 0 shadow-2xl" />

          <div className="relative w-full h-full p-4">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              {/*eslint-disable-next-line*/}
              <img
                src={image.src}
                alt="My Image"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-4xl tracking-tighter bg-gradient-to-r from-gray-900 to-gray-500  bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          Anand Chaudhary
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl mb-4"
          variants={fadeInUp}
        >
          Full-Stack Web Developer
        </motion.h2>

        <motion.p
          className="text-base md:text-lg mb-8 max-w-md"
          variants={fadeInUp}
        >
          Building scalable, elegant, and efficient digital solutions that make a difference. Passionate about creating exceptional user experiences with modern technologies.
        </motion.p>

        <motion.div
          className="flex flex-col pb-3 sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.button
              className="group cursor-pointer bg-blue-600 hover:bg-blue-700 flex justify-center items-center text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.button
              className="px-8 flex justify-center
               items-center cursor-pointer py-3 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />

            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center cursor-pointer lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {[
            { icon: Github, href: "https://github.com/Anand-Chaudhary", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/your-linkedin", label: "LinkedIn" },
            { icon: Mail, href: "mailto:chaudharyaakash234@gmail.com", label: "Email" },
            { icon: Instagram, href: "https://www.instagram.com/aakash.cpp/", label: "Instagram" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/50 ckdrop-blur-sm rounded-xl flex items-center justify-center text-gray-600 er:text-blue-600 00 border border-gray-200/50 0 hover:border-blue-300 -600 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Home;

