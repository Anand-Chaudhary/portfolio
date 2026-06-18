"use client";

import Image from "next/image";
import aboutImage from "@/assets/about_me.png"
import { ArrowLeft } from "lucide-react";
import DualToneButton from "@/components/ui/DualToneButton";
import { useEffect, useRef, useState } from "react";

const STATS = [
    {
        label: "Years of Experience",
        value: "3+"
    },
    {
        label: "Projects Completed",
        value: "50+"
    },
    {
        label: "Clients Satisfied",
        value: "100%"
    }
];

const SKILLS = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Firebase"]
    },
    {
        category: "DevOps & Tools",
        items: ["Git", "GitHub", "Docker", "Linux", "AWS", "CI/CD"]
    }
];

const About = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const totalHeight = timelineRef.current.scrollHeight;
            const viewportHeight = window.innerHeight;

            // Calculate scroll progress (0 to 1)
            const scrollPosition = -rect.top;
            const progress = Math.min(Math.max(scrollPosition / (totalHeight - viewportHeight * 0.6), 0), 1);

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FAF6EE]">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#F5AA17]/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
                            <Image
                                src={aboutImage}
                                alt="Anand Chaudhary"
                                width={600}
                                height={600}
                                className="w-full max-w-md lg:max-w-none h-auto rounded-2xl shadow-lg relative z-10"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <ArrowLeft className="text-[#324E32]" size={20} />
                                <span className="text-[#324E32] font-medium tracking-wide">About Me</span>
                            </div>

                            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1E] leading-tight">
                                Who Is <br />
                                <span className="text-[#F5AA17] italic font-light">Anand Chaudhary?</span>
                            </h1>
                        </div>

                        <div className="space-y-6 text-[#4A4A4A] text-lg leading-relaxed">
                            <p>
                                I&apos;m a passionate full stack developer based in Nepal, dedicated to creating
                                beautiful, functional, and user-centered web applications. My journey began
                                with a curiosity for how things work on the web, which evolved into a
                                career building digital experiences that matter.
                            </p>
                            <p>
                                With over three years of experience in the field, I&apos;ve developed a strong
                                foundation in both frontend and backend technologies. What drives me is not
                                just writing code, but solving real problems through thoughtful, elegant
                                solutions that users love.
                            </p>
                            <p>
                                When I&apos;m not coding, you can find me exploring new technologies, contributing
                                to open source, or learning about the latest trends in web development and
                                DevOps.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 sm:gap-10 pt-4">
                            {STATS.map((stat, index) => (
                                <div key={index} className="flex flex-col gap-2 min-w-30">
                                    <span className="text-3xl sm:text-4xl font-bold text-[#324E32]">{stat.value}</span>
                                    <span className="text-sm sm:text-base text-[#666666] font-medium uppercase tracking-wide">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <DualToneButton
                                text="Download CV"
                                href="#"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="bg-[#F3EDDE] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <ArrowLeft className="text-[#324E32]" size={20} />
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E]">
                                My <span className="text-[#F5AA17] italic font-light">Technical Skills</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {SKILLS.map((skillGroup, groupIndex) => (
                                <div key={groupIndex} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5E5E5] hover:border-[#D4D4D4] transition-colors">
                                    <h3 className="text-xl font-bold text-[#324E32] mb-6 pb-2 border-b border-[#E5E5E5]">
                                        {skillGroup.category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <li key={skillIndex} className="flex items-center gap-3 text-[#555555]">
                                                <div className="w-1.5 h-1.5 bg-[#F5AA17] rounded-full shrink-0"></div>
                                                <span className="font-medium">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-[#FAF6EE]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-6 leading-tight">
                                My <span className="text-[#F5AA17] italic font-light">Development</span> Philosophy
                            </h2>
                            <div className="space-y-6 text-[#4A4A4A] text-lg leading-relaxed">
                                <p>
                                    I believe that great software is more than just functionality—it&apos;s about
                                    creating meaningful experiences. Every line of code I write aims to balance
                                    performance, maintainability, and user experience.
                                </p>
                                <p>
                                    My approach is rooted in clean code principles, thorough testing, and
                                    continuous learning. I stay current with industry trends not just to keep
                                    my skills sharp, but to bring the best solutions to every project I work on.
                                </p>
                                <p>
                                    Collaboration is at the heart of my workflow. I value clear communication,
                                    active listening, and the collective intelligence of a well-functioning team.
                                    Whether working independently or as part of a group, I maintain a high
                                    standard of quality and professionalism.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 bg-white p-8 rounded-2xl shadow-sm border border-[#E5E5E5]">
                            <h3 className="text-2xl font-bold text-[#324E32] mb-8">Work Process</h3>

                            <div className="space-y-8">
                                {[
                                    { title: "Discovery", description: "Understanding requirements, goals, and constraints" },
                                    { title: "Planning", description: "Architecture design and technical specification" },
                                    { title: "Development", description: "Writing clean, tested, and documented code" },
                                    { title: "Deployment", description: "CI/CD setup and production monitoring" },
                                    { title: "Maintenance", description: "Iterative improvements and bug fixes" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="shrink-0 w-8 h-8 rounded-full bg-[#F5AA17]/20 text-[#F5AA17] flex items-center justify-center font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#324E32]">{item.title}</h4>
                                            <p className="text-[#666666] text-sm mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 bg-[#F3EDDE]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <ArrowLeft className="text-[#324E32]" size={20} />
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E]">
                                <span className="text-[#F5AA17] italic font-light">Professional</span> Experience
                            </h2>
                        </div>
                    </div>

                    <div ref={timelineRef} className="space-y-12">
                        {[
                            {
                                period: "2025 - Present",
                                title: "Frontend Developer",
                                company: "Tech Sanjal",
                                description: "Leading frontend development for enterprise clients, implementing modern React applications with TypeScript and Next.js. Focus on performance optimization and accessibility standards."
                            },
                            {
                                period: "2025 - 2026",
                                title: "Frontend Developer",
                                company: "Void Nepal",
                                description: "Collaborated with cross-functional teams to deliver web applications. Implemented responsive designs and integrated RESTful APIs. Participated in code reviews and team knowledge sharing."
                            },
                            {
                                period: "2024 - 2025",
                                title: "Frontend Developer",
                                company: "Kalpabriksha Nepal",
                                description: "Developed and maintained multiple client projects using React and related technologies. Worked closely with designers to implement pixel-perfect designs and improved UI performance."
                            }
                        ].map((job, idx) => (
                            <div key={idx} className="relative pl-8 border-l-2 border-[#E5E5E5] overflow-hidden">
                                {/* Animated green timeline fill */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#324E32] origin-top transition-all duration-300 ease-out"
                                    style={{
                                        height: `${scrollProgress * 100}%`,
                                        opacity: Math.min(scrollProgress * 1.5, 1)
                                    }}
                                />
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] relative z-10">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                                        <h3 className="text-xl font-bold text-[#324E32]">{job.title}</h3>
                                        <span className="text-[#F5AA17] font-medium whitespace-nowrap">{job.period}</span>
                                    </div>
                                    <div className="text-[#324E32] font-medium mb-4">{job.company}</div>
                                    <p className="text-[#555555] leading-relaxed">{job.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-20 bg-[#FAF6EE]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <ArrowLeft className="text-[#324E32]" size={20} />
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E]">
                                <span className="text-[#F5AA17] italic font-light">Education</span> & Certifications
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                year: "2022-2025",
                                title: "High School Certificate",
                                institution: "DAV +2 NEB",
                                details: "Completed higher secondary education with focus on management, mathematics and computer."
                            },
                            {
                                year: "2025",
                                title: "DevOps",
                                institution: "Tech Sanjal",
                                details: "Comprehensive training in Linux, Docker, Kubernetes, CI/CD pipelines, and cloud infrastructure management."
                            },
                            {
                                year: "2025",
                                title: "Docker & Kubernetes",
                                institution: "KodeKloud",
                                details: "Containerization, orchestration, and deployment strategies for modern applications."
                            }
                        ].map((edu, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] hover:border-[#F5AA17] transition-colors group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-sm font-bold text-[#F5AA17] bg-[#F5AA17]/10 px-3 py-1 rounded-full">{edu.year}</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#324E32] mb-1 group-hover:text-[#F5AA17] transition-colors">{edu.title}</h3>
                                <div className="text-[#666666] text-sm mb-3">{edu.institution}</div>
                                <p className="text-[#555555] text-sm leading-relaxed">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personal Section */}
            <section className="py-20 bg-[#F3EDDE]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-8">
                        A Little <span className="text-[#F5AA17] italic font-light">More</span> About Me
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div>
                            <h3 className="text-xl font-bold text-[#324E32] mb-4">When I&apos;m Coding</h3>
                            <p className="text-[#555555] leading-relaxed">
                                I&apos;m constantly learning—whether it&apos;s experimenting with new frameworks, reading
                                technical documentation, or building personal projects to explore cutting-edge
                                technologies.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#324E32] mb-4">Beyond Development</h3>
                            <p className="text-[#555555] leading-relaxed">
                                I enjoy reading tech blogs, contributing to open-source projects, and sharing
                                knowledge with the developer community through articles and tutorials.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#324E32] mb-4">My Goal</h3>
                            <p className="text-[#555555] leading-relaxed">
                                To build technology that makes a difference—to create solutions that solve real
                                problems and improve people&apos;s lives through better digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#324E32] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                        Let&apos;s Work <span className="text-[#F5AA17] italic font-light">Together</span>
                    </h2>
                    <p className="text-[#B8C8B8] text-lg max-w-2xl mx-auto mb-10">
                        Whether you have a project in mind or just want to say hello, I&apos;m always open to
                        discussing new opportunities and interesting ideas.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <DualToneButton
                            text="Get in Touch"
                            href="#contact"
                            className="w-full sm:w-auto"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
