"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import pr1 from "@/assets/image.png"
import login from "@/assets/LoginPage.png"
import kalpabriksha from '@/assets/Screenshot 2025-05-27 145208.png'
import cnc from "@/assets/Screenshot 2025-05-27 163405.png"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Code Reviewer",
      description: "This is a web-based code review tool that allows users to write, edit, and submit code for AI-based review. It features syntax highlighting, markdown-based review display, and multiple language support.",
      image: pr1.src,
      technologies: ["React", "Node.js", "Gemini API", "Express.js", "CI/CD"],
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
      github: "https://github.com/Anand-Chaudhary/jobManagementApp",
      featured: true,
    },
    {
      id: 3,
      title: "Kalpabriksha Nepal's Website",
      description: "The official website of Kalpabriksha Nepal — a youth-driven NGO committed to empowering young individuals through education, innovation, and community engagement initiatives across Nepal.",
      technologies: ["React"],
      image: kalpabriksha.src,
      liveUrl: "https://www.kalpabrikshanepal.org.np/",
      github: "https://github.com/Anand-Chaudhary/kalpabriksha-react",
      featured: false,
    },
    {
      id: 4,
      title: "Code&Chat",
      description: "CodeNChat is a powerful web-based collaborative code editor that allows multiple users to work together in real-time. It features a built-in chat system, file management, and live code execution environment.",
      image: cnc.src,
      technologies: ["React", "MongoDB", "Express.js", "WebCoontainers", "Socket.io", "Gemini API"],
      githubUrl: "https://github.com/Anand-Chaudhary/CodeNChat",
      featured: false,
    },
    {
      id: 5,
      title: "Library Management System in C",
      description:
        "This is a simple Book Management System implemented in C, allowing users to Append, Read records,Update information, Delete book records, Search by author",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["C"],
      githubUrl: "https://github.com/Anand-Chaudhary/C-Program",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications built with modern technologies and best
            practices.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button size="sm" variant="secondary" asChild>
                          <a className="text-white" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 text-white" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className={`${!project.liveUrl || project.liveUrl === "#" ? "w-full" : ""}`} 
                        asChild
                      >
                        <a className="text-white" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
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
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex gap-2 w-full">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className={`${!project.liveUrl || project.liveUrl === "#" ? "w-full" : "flex-1"}`} 
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s work together to bring your ideas to life with cutting-edge technology and exceptional user
              experience.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
