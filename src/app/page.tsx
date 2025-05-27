"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight, Github, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Marquee } from "@/components/marquee";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import image from "@/assets/IMG-20250404-WA0278.jpg"
import pr1 from "@/assets/image.png"
import login from "@/assets/LoginPage.png"
import kalpabriksha from '@/assets/Screenshot 2025-05-27 145208.png'


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

const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "Framer Motion",
  "Prisma",
  "Socket.io",
  "Redis",
  "JavaScript",
  "GSAP",
  "React3Fiber",
  "C++",
]

const projects = [
  {
    id: 1,
    title: "Code Reviewer",
    description: "This is a web-based code review tool that allows users to write, edit, and submit code for AI-based review. It features syntax highlighting, markdown-based review display, and multiple language support.",
    image: pr1.src,
    technologies: ["React", "Node.js", "Gemini API", "Express.js"],
    liveUrl: "https://codereviewer-4ph0.onrender.com/",
    githubUrl: "https://github.com/Anand-Chaudhary/codeReviewer",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A simple and efficient Job Management System built using Vite and React. This app allows organizations to manage tasks effectively by providing separate dashboards for Admins and Employees.",
    technologies: ["React", "Context API", "Local Storage"],
    image: login.src,
    githubUrl: "https://github.com/Anand-Chaudhary/jobManagementApp",
    featured: true,
  },
  {
    id: 3,
    title: "Kalpabriksha Nepal's Website",
    description: "The official website of Kalpabriksha Nepal — a youth-driven NGO committed to empowering young individuals through education, innovation, and community engagement initiatives across Nepal.",
    technologies: ["React"],
    image: kalpabriksha.src,
    liveUrl: "https://www.kalpabrikshanepal.org.np/",
    githubUrl: "https://github.com/Anand-Chaudhary/kalpabriksha-react",
    featured: false,
  },
]

const Home = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [projectsInView, setProjectsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setProjectsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <>
      {/*Landing Page*/}
      <section>
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
                { icon: Linkedin, href: "https://www.linkedin.com/in/anand-chaudhary-b3a92b287/", label: "LinkedIn" },
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
      </section>

      {/*Marquee*/}
      <section className="py-12 border-white border-t-3 border-b-3 border-y border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.h1
              className="text-4xl pb-2 tracking-tighter bg-gradient-to-r from-black to-gray-500  bg-clip-text text-transparent"
              variants={fadeInUp}
            >Technologies I Work With</motion.h1>
          </motion.div>
          <Marquee items={marqueeItems} />
        </div>
      </section>

      {/*Projects*/}
      <section id="projects" ref={projectsRef} className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">Featured Projects</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              A selection of my recent work showcasing modern web development practices and innovative solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={projectsInView ? "animate" : "initial"}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 backdrop-blur-sm group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <Button size="sm" variant="secondary" className="backdrop-blur-sm" asChild>
                            <a className="text-white" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          className={`backdrop-blur-sm ${!project.liveUrl || project.liveUrl === "#" ? "w-full" : ""}`} 
                          asChild
                        >
                          <a className="text-white" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              asChild
            >
              <a href="/project">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;