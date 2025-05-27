"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Marquee } from "@/components/marquee"
import { TestimonialCard } from "@/components/testimonial-card"
import { BlogCard } from "@/components/blog-card"
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Send,
  BookOpen,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function HomePage() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const blogsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const blogsInView = useInView(blogsRef, { once: true, margin: "-100px" })
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })

  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "PostgreSQL", level: 82 },
    { name: "AWS", level: 80 },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/placeholder.svg?height=300&width=400",
      demo: "#",
      github: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates.",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      image: "/placeholder.svg?height=300&width=400",
      demo: "#",
      github: "#",
      featured: true,
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts and reports.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      image: "/placeholder.svg?height=300&width=400",
      demo: "#",
      github: "#",
      featured: false,
    },
  ]

  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects using modern web technologies.",
    },
    {
      title: "Frontend Developer",
      company: "WebAgency",
      period: "2019 - 2020",
      description: "Created responsive user interfaces and improved website performance.",
    },
  ]

  const blogPosts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt:
        "Learn how to structure large React applications using TypeScript, best practices for component architecture, and performance optimization techniques.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg?height=200&width=300",
      slug: "building-scalable-react-applications-typescript",
    },
    {
      title: "Mastering Server-Side Rendering with Next.js 14",
      excerpt:
        "Deep dive into Next.js 14's new features, App Router, and how to implement efficient server-side rendering for better SEO and performance.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Next.js",
      image: "/placeholder.svg?height=200&width=300",
      slug: "mastering-server-side-rendering-nextjs-14",
    },
    {
      title: "Database Design Patterns for Modern Web Applications",
      excerpt:
        "Explore advanced database design patterns, normalization techniques, and how to choose between SQL and NoSQL databases for your projects.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Database",
      image: "/placeholder.svg?height=200&width=300",
      slug: "database-design-patterns-modern-web-apps",
    },
    {
      title: "Implementing Real-time Features with WebSockets",
      excerpt:
        "Learn how to build real-time applications using WebSockets, Socket.io, and handle connection management, scaling, and error handling.",
      date: "2023-12-25",
      readTime: "15 min read",
      category: "Backend",
      image: "/placeholder.svg?height=200&width=300",
      slug: "implementing-realtime-features-websockets",
    },
    {
      title: "Advanced CSS Techniques for Modern UI Design",
      excerpt:
        "Discover advanced CSS features like container queries, CSS Grid subgrid, and modern layout techniques for creating responsive designs.",
      date: "2023-12-18",
      readTime: "7 min read",
      category: "CSS",
      image: "/placeholder.svg?height=200&width=300",
      slug: "advanced-css-techniques-modern-ui-design",
    },
    {
      title: "Optimizing Web Performance: A Complete Guide",
      excerpt:
        "Comprehensive guide to web performance optimization covering Core Web Vitals, lazy loading, code splitting, and monitoring techniques.",
      date: "2023-12-10",
      readTime: "20 min read",
      category: "Performance",
      image: "/placeholder.svg?height=200&width=300",
      slug: "optimizing-web-performance-complete-guide",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      content:
        "Alex is an exceptional developer who consistently delivers high-quality solutions. His attention to detail and ability to understand complex requirements make him invaluable to any team.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content:
        "Working with Alex was a game-changer for our startup. He built our entire platform from scratch and it's been running flawlessly for over two years. Highly recommended!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Agency",
      content:
        "Alex has an incredible ability to bring designs to life with pixel-perfect precision. His code is clean, maintainable, and always follows best practices.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "InnovateLab",
      content:
        "Alex delivered our project ahead of schedule and exceeded all expectations. His technical expertise and communication skills are top-notch.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      role: "Engineering Manager",
      company: "DataFlow",
      content:
        "I've worked with many developers, but Alex stands out for his problem-solving skills and ability to architect scalable solutions.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "NextGen Solutions",
      content:
        "Alex transformed our legacy system into a modern, efficient platform. His expertise in both frontend and backend development is remarkable.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  const marqueeItems = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "REST APIs",
    "Tailwind CSS",
    "Framer Motion",
    "Prisma",
    "Socket.io",
    "Redis",
    "Stripe",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                className="relative"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Glass frame */}
                  <div className="absolute inset-0 bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl" />

                  {/* Image */}
                  <div className="relative w-full h-full p-4">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Alex Chen"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                  </div>

                  {/* Depth shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 dark:to-white/5 rounded-3xl transform translate-x-2 translate-y-2 -z-10" />
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Alex Chen
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Full-Stack Web Developer
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Building scalable, elegant, and efficient digital solutions that make a difference. Passionate about
                  creating exceptional user experiences with modern technologies.
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#", label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">Technologies I Work With</h3>
          </motion.div>
          <Marquee items={marqueeItems} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm group">
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
                        <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </Button>
                        <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                          <Github className="h-3 w-3 mr-1" />
                          Code
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
                      {project.tech.map((tech) => (
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 4 years of experience creating digital solutions that
                  combine beautiful design with robust functionality.
                </p>
                <p>
                  My expertise spans modern web technologies, from React and TypeScript on the frontend to Node.js and
                  Python on the backend. I believe in writing clean, maintainable code and creating user experiences
                  that delight.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Available for hire</span>
                </div>
              </div>

              <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  Download CV
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

                    <Card className="ml-16 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg">
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
                        <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={slideInLeft}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" ref={blogsRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={blogsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development, technology trends, and best practices.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate={blogsInView ? "animate" : "initial"}
          >
            {blogPosts.slice(0, 6).map((post, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA to Blog Website */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={blogsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="inline-block bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Visit My Blog</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  Explore more articles, tutorials, and insights on my dedicated blog website. New posts every week!
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      // This will be replaced with your actual blog URL when ready
                      window.open("https://blog.alexchen.dev", "_blank")
                    }}
                  >
                    Read More Articles
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">What Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Testimonials from clients and colleagues I've had the pleasure of working with.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={testimonialsInView ? "animate" : "initial"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
