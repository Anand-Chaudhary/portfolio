import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectsSection } from "../ui/ProjectCard";
import DualToneButton from "../ui/DualToneButton";

const Projects = () => {
    const projects = [
        {
            title: "Code Reviewer",
            link: "https://codereviewer-4ph0.onrender.com/",
            image: "https://images.unsplash.com/photo-1771132666487-3d7a048a36df?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            technologies: ["React", "Express", "Docker", "Gemini API", "Nginx"]
        },
        {
            title: "Presento",
            link: "#",
            image: "https://images.unsplash.com/photo-1771132666487-3d7a048a36df?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            technologies: ["React", "Express", "Docker", "Gemini API", "Supabase", "Docker", "IaC", "K8s", "AWS", "Nginx"]
        },
        {
            title: "Topnotch Sydney",
            link: "https://topnotch.sydney/",
            image: "https://images.unsplash.com/photo-1771132666487-3d7a048a36df?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            technologies: ["Next.js", "Framer-Motion", "PHP"]
        },
        {
            title: "Gurkha Bazaar",
            link: "https://gurkhabazaar.com/",
            image: "https://images.unsplash.com/photo-1771132666487-3d7a048a36df?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            technologies: ["Next.js", "Framer-Motion"]
        },
    ];

    return (
        <div className="w-full bg-gray-50 space-y-4 p-5 min-h-screen">
            <section className="flex flex-col sm:flex-row justify-between max-w-7xl mx-auto items-center gap-6 mb-8">
                <div className="space-y-4 text-center sm:text-left">
                    <p className="flex font-medium gap-2 items-center justify-center sm:justify-start text-base sm:text-lg">
                        <ArrowLeft stroke="#F5AA17" />
                        Projects
                    </p>
                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        My Latest
                        <span className="italic text-[#F5AA17] font-light block lg:inline lg:ml-2">Projects</span>
                    </h2>
                </div>
                <DualToneButton 
                    text="View All Projects" 
                    href="#" 
                />
            </section>
            <section className="w-full max-w-7xl mx-auto">
                <ProjectsSection projects={projects} />
            </section>
        </div>
    );
};

export default Projects;