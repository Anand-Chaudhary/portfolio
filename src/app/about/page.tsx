"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Award, Code, Database, Cloud, Smartphone } from "lucide-react"
import Image from "next/image"
import image from "@/assets/IMG-20250404-WA0342.jpg"

export default function AboutPage() {
    const skills = [
        { name: "JavaScript/TypeScript", level: 85, category: "Frontend" },
        { name: "React/Next.js", level: 70, category: "Frontend" },
        { name: "Node.js/Express", level: 70, category: "Backend" },
        { name: "MongoDB", level: 75, category: "Database" },
        { name: "CI/CD", level: 80, category: "DevOps" },
        { name: "C++", level: 30, category: "Backend" },
    ]

    const experience = [
        {
            title: "Frontend Developer Intern",
            company: "Kalpabriksha Nepal",
            period: "January 2025 - March 2025",
            description: "Worked as a Frontend Intern at Kalpabriksha Nepal, where I built responsive user interfaces using React.js for platforms focused on youth empowerment. Collaborated with the team to improve UI/UX and gained hands-on experience in real-world web development.",
            achievements: ["Built responsive and accessible UI components", "Applied Git and version control in a team setting", "Contributed to real-time updates and bug fixes"],
        },
        {
            title: "Full Stack Developer Intern",
            company: "Kalpabriksha Nepal",
            period: "June 2025 - July 2025",
            description: "Built full-stack web apps using the MENN stack. Worked on UI, APIs, authentication, and database design. Focused on clean code, learning fast, and contributing to real projects.",
            achievements: ["Built a MERN-based Volunteer Management System, reducing manual coordination by 60% through task tracking and role-based access.", "Integrated real-time updates and notifications, improving volunteer response time by 40%.", "Collaborated with 3+ stakeholders to deploy a scalable solution used by 100+ volunteers."]
        },
    ]

    const certifications = [
        "HackerRank CSS Certificate",
        "Kalpabriksha Intern"
    ]

    return (
        <div className="min-h-screen pt-20">
            {/* Header */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                                About{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-6">
                                I&apos;m a passionate full-stack developer creating digital solutions that
                                make a difference.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8">
                                My journey in web development started with a curiosity about how websites work, and it has evolved into
                                a career dedicated to building exceptional user experiences and robust backend systems.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>Godawori, Lalitpur Nepal</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>Available for freelance</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="w-90 h-90 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src={image.src}
                                        alt="Me"
                                        width={400}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Code className="h-5 w-5 text-blue-600" />
                                Programming & Frameworks
                            </h3>
                            <div className="space-y-6">
                                {skills
                                    .filter((skill) => ["Frontend", "Backend"].includes(skill.category))
                                    .map((skill) => (
                                        <div key={skill.name} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <Progress value={skill.level} className="h-2" />
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Database className="h-5 w-5 text-purple-600" />
                                Database & DevOps
                            </h3>
                            <div className="space-y-6">
                                {skills
                                    .filter((skill) => ["Database", "DevOps"].includes(skill.category))
                                    .map((skill) => (
                                        <div key={skill.name} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <Progress value={skill.level} className="h-2" />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />

                            <div className="space-y-8">
                                {experience.map((job, index) => (
                                    <div key={index} className="relative">
                                        {/* Timeline dot */}
                                        <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-background hidden md:block" />

                                        <Card className="md:ml-16 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                                            <CardHeader>
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <CardTitle className="text-xl">{job.title}</CardTitle>
                                                    <Badge variant="outline" className="w-fit">
                                                        {job.period}
                                                    </Badge>
                                                </div>
                                                <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                                                    {job.company}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground mb-4">{job.description}</p>
                                                <div className="space-y-2">
                                                    <h4 className="font-medium">Key Achievements:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                                        {job.achievements.map((achievement, i) => (
                                                            <li key={i}>{achievement}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications & Interests */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Certifications */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                                <Award className="h-8 w-8 text-yellow-600" />
                                Certifications
                            </h2>
                            <div className="grid gap-4">
                                {certifications.map((cert, index) => (
                                    <Card key={index} className="p-4 bg-white hover:shadow-md transition-shadow duration-200">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                                            <span className="font-medium">{cert}</span>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Interests */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">When I&apos;m Not Coding</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <Smartphone className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Technology Enthusiast</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Always exploring new technologies, attending tech meetups, and contributing to open-source
                                            projects.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                        <Cloud className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Cloud Architecture</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Passionate about cloud computing and building scalable, distributed systems.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                        <Award className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Mentoring</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Helping aspiring developers through mentorship programs and coding bootcamps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
