import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'

const EducationData = [
    {
        year: "2019 - 2022",
        institution: "DAV +2 NEB",
        degree: "High School Certificate (HSC)",
    },
]

const WorkData = [ 
    {
        year: "Feb 2026 - Present",
        company: "Tech Sanjal",
        role: "Front-end Developer",
    },
    {
        year: "Jun 2025 - Jan 2026",
        company: "Void Nepal",
        role: "Front-end Developer",
    },
    {
        year: "Jan 2025 - Mar 2025",
        company: "Kalpabriksha Nepal",
        role: "Front-end Developer",
    },
]

const TimelineItem = ({ year, title, subtitle }: { year: string, title: string, subtitle: string }) => (
    <div className="relative pl-8 pb-10 last:pb-0 group">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200 group-last:bg-transparent">
            <div className="absolute top-0 left-[-3px] w-2 h-2 rounded-full bg-gray-300" />
        </div>
        
        <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{year}</span>
            <h3 className="text-lg font-bold text-gray-800 leading-tight">{title}</h3>
            <p className="text-sm text-gray-500 font-medium">{subtitle}</p>
        </div>
    </div>
)

const ExperienceCard = ({ title, icon: Icon, items, isEducation }: { title: string, icon: any, items: any[], isEducation?: boolean }) => (
    <div className="bg-[#F8F8F8] rounded-[32px] p-8 sm:p-10 shadow-sm border border-gray-100 flex-1">
        <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-[#F5AA17] flex items-center justify-center text-[#324E32]">
                <Icon size={22} strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        
        <div className="flex flex-col">
            {items.map((item, index) => (
                <TimelineItem 
                    key={index}
                    year={item.year}
                    title={isEducation ? item.institution : item.company}
                    subtitle={isEducation ? item.degree : item.role}
                />
            ))}
        </div>
    </div>
)

const Experience = () => {
    return (
        <section id="experience" className="py-24 w-full bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                        My <span className="text-[#F5AA17] italic font-medium">Academic and</span><br />
                        <span className="text-[#F5AA17] italic font-medium">Professional</span> Journey
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <ExperienceCard 
                        title="Education" 
                        icon={GraduationCap} 
                        items={EducationData} 
                        isEducation 
                    />
                    <ExperienceCard 
                        title="Work Experience" 
                        icon={Briefcase} 
                        items={WorkData} 
                    />
                </div>
            </div>
        </section>
    )
}

export default Experience
