"use client"

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight, Github, Instagram, Linkedin, Mail, ExternalLink, MapPin, Calendar, Download, Code, Database, Send } from "lucide-react";
import { Marquee } from "@/components/marquee";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import image from "@/assets/IMG-20250404-WA0278.jpg"
import pr1 from "@/assets/image.png"
import login from "@/assets/LoginPage.png"
import kalpabriksha from '@/assets/Screenshot 2025-05-27 145208.png'
import { Testimonial } from "@/components/testimonial";
import himani from "@/assets/494857252_1416480189355725_6052832778783234089_n.jpg"
import pranjal from "@/assets/1747921444235.jpg"

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

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

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

const experience = [
  {
    title: "Frontend Developer Intern",
    company: "Kalpabriksha Nepal",
    period: "January 2025 - March 2025",
    description: "As a Frontend Intern, I worked on developing and improving user interfaces for internal platforms aimed at youth empowerment and social impact. Using React.js, I collaborated with the team to build responsive, user-friendly components and ensured a clean, consistent UI aligned with the organization's mission. This experience helped me understand the importance of accessibility, real-world collaboration, and building with purpose.",
  },
]

const skills = [
  { name: "JavaScript/TypeScript", level: 85, category: "Frontend" },
  { name: "React/Next.js", level: 70, category: "Frontend" },
  { name: "Node.js/Express", level: 70, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "CI/CD", level: 80, category: "DevOps" },
  { name: "C++", level: 30, category: "Backend" },
]

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
]

const Home = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const [projectsInView, setProjectsInView] = useState(false);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" })

  // Add form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const currentRef = projectsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setProjectsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
                  <Image
                    src={image.src}
                    alt="My Image"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
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
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="px-8 flex justify-center
               items-center cursor-pointer py-3 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />

                </Button>
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

      {/*About Me*/}
      <section id="about">
        <section id="about" ref={aboutRef} className="py-24 border-white border-t-3">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r tracking-tighter leading-none from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">About Me</h2>
                <div className="space-y-6 text-lg text-black leading-relaxed">
                  <p>
                    I&apos;m a dedicated full-stack developer with hands-on experience in building real-world projects using the MERN stack. From crafting intuitive frontends with React to designing scalable backend systems with Node.js and Express, I enjoy bringing ideas to life through code.
                  </p>
                  <p>
                    My journey includes internship experience, contributions to NGOs like Kalpabriksha Nepal, and continuous learning through personal projects and open-source exploration. I&apos;m currently focused on leveling up my skills in scalable web development and preparing for future challenges.
                  </p>
                  <p>
                    Beyond coding, I&apos;m always eager to explore emerging technologies, improve my DSA skills, and build tools that empower developers and small businesses.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-6 text-gray-600 dark:text-gray-400">
                  <div className="flex text-black items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Godawori, Lalitpur Nepal</span>
                  </div>
                  <div className="flex text-black items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Available for hire</span>
                  </div>
                </div>

                <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group bg-white backdrop-blur-sm border-2 hover:bg-gray-50 transition-all duration-300"
                    asChild
                  >
                    <a href="/files/Resume.pdf" download="Resume.pdf">
                      <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                      Download CV
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Experience Timeline */}
              <div className="relative">
                <motion.div
                  className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 origin-top"
                  initial={{ scaleY: 0 }}
                  animate={aboutInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />

                <motion.div
                  className="space-y-8"
                  variants={staggerContainer}
                  initial="initial"
                  animate={aboutInView ? "animate" : "initial"}
                >
                  {experience.map((job, index) => (
                    <motion.div key={index} className="relative" variants={slideInLeft}>
                      <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900" />

                      <Card className="ml-16 bg-white backdrop-blur-sm border-0 shadow-lg">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <CardTitle className="text-lg">{job.title}</CardTitle>
                            <Badge variant="outline">{job.period}</Badge>
                          </div>
                          <CardDescription className="text-base font-medium text-blue-600 dark:text-blue-400">
                            {job.company}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-black">{job.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/*Skills Section*/}
      <section id="skills" ref={skillsRef} className="py-24 border-t-3 border-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate={skillsInView ? "animate" : "initial"}
            >
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-black">
                  <Code className="h-5 w-5 text-blue-600" />
                  Programming & Frameworks
                </h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => ["Frontend", "Backend"].includes(skill.category))
                    .map((skill, index) => (
                      <motion.div key={skill.name} variants={slideInLeft}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-black">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/30 backdrop-blur-xl rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                            initial={{ width: 0 }}
                            animate={skillsInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-black">
                  <Database className="h-5 w-5 text-purple-600" />
                  Database & DevOps
                </h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => ["Database", "DevOps"].includes(skill.category))
                    .map((skill, index) => (
                      <motion.div key={skill.name} variants={slideInLeft}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-black">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/30 backdrop-blur-xl rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                            initial={{ width: 0 }}
                            animate={skillsInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*Testimonial*/}
      <section id="testimonial" ref={testimonialRef} className="py-12 border-t-3 border-white">
        <div className="container">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-center lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">Testimonials</h2>
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mt-6">
              {
                testimonies.map((testimony, index) => (
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
                    <Testimonial image={testimony.image} linkedin={testimony.linkedin} rating={testimony.rating} name={testimony.name} testimony={testimony.testimony} postion={testimony.position} company={testimony.company} />
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </div>
      </section>

      {/*Contact me*/}
      <section id="contact" ref={contactRef} className="py-24 border-t-3 border-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">Let&apos;s Work Together</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it and discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Send me a message</CardTitle>
                <CardDescription className="text-center text-black">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-black">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-black">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-black">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-black">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 transition-all duration-300 resize-none"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 text-green-700 rounded-lg"
                    >
                      Thank you for your message! I&apos;ll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 text-red-700 rounded-lg"
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;