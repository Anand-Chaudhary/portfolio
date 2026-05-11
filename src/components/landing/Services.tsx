import {
    Code2,
    Palette,
    CloudCog,
    ArrowLeft
} from "lucide-react";

const SERVICES = [
    {
        id: 1,
        title: "Web Development",
        description:
            "Building fast, scalable, and responsive full-stack web applications using modern technologies like React, Next.js, Node.js, and TypeScript.",
        logo: Code2,
    },
    {
        id: 2,
        title: "UI/UX Design",
        description:
            "Designing clean, intuitive, and user-focused interfaces with smooth user experiences, modern layouts, and minimal aesthetics.",
        logo: Palette,
    },
    {
        id: 3,
        title: "DevOps",
        description:
            "Automating deployments, managing cloud infrastructure, and building reliable CI/CD pipelines using Docker, Linux, GitHub Actions, and cloud tools.",
        logo: CloudCog,
    },
];

const Services = () => {
    return (
        <div className="max-w-7xl mx-auto text-left">
            <div className="m-3">
                <p className="flex font-medium gap-2 items-center">
                    <ArrowLeft stroke="#324E32" />
                    Services
                </p>
                <p className="flex gap-2 font-bold text-4xl md:text-5xl items-center">
                    <span className="italic text-[#F5AA17] font-light">Services</span>
                    I Provide
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {SERVICES.map((service) => (
                    <div
                        key={service.id}
                        className="bg-gray-100 rounded-lg m-5 shadow-lg p-6 border-2 border-gray-400 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-white rounded-full">
                                <service.logo className="w-6 h-6 text-[#324E32]" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                {service.title}
                            </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;