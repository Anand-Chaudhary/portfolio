import { Container, Cloud, Atom, Database, Boxes, ServerCog } from "lucide-react";

interface CategoryProps {
    label: string;
    value: string;
    icon: React.ReactNode;
    iconBg: string;
    iconColor: string;
}

const CATEGORIES: CategoryProps[] = [
    {
        label: "Frontend",
        value: "95%",
        icon: <Atom strokeWidth={1.5} className="w-8 h-8" />,
        iconBg: "bg-cyan-50",
        iconColor: "text-cyan-500",
    },
    {
        label: "Backend",
        value: "90%",
        icon: <ServerCog strokeWidth={1.5} className="w-8 h-8" />,
        iconBg: "bg-green-50",
        iconColor: "text-green-600",
    },
    {
        label: "Database",
        value: "88%",
        icon: <Database strokeWidth={1.5} className="w-8 h-8" />,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    {
        label: "Containerization",
        value: "88%",
        icon: <Container strokeWidth={1.5} className="w-8 h-8" />,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500",
    },
    {
        label: "IaC",
        value: "80%",
        icon: <Boxes strokeWidth={1.5} className="w-8 h-8" />,
        iconBg: "bg-violet-50",
        iconColor: "text-violet-500",
    },
    {
        label: "Cloud",
        value: "85%",
        icon: <Cloud strokeWidth={1.5} className="w-8 h-8" />,
        iconBg: "bg-orange-50",
        iconColor: "text-orange-500",
    },
];

const Tools = () => {
    return (
        <section className="bg-white py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-5">
                        — My Favorite Tools
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                        <span className="italic font-light text-[#F5AA17]">Exploring the Tools</span>
                        <br />
                        Behind My Projects
                    </h2>
                </div>

                {/* Category cards — pill/oval style matching image */}
                <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-4">
                    {CATEGORIES.map((category, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center gap-5 px-8 py-10 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-default w-36 sm:w-40"
                            style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
                        >
                            {/* Icon pill */}
                            <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-white ${category.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                {category.icon}
                            </div>

                            {/* Percentage */}
                            <p className="text-2xl font-bold text-gray-800 tracking-tight leading-none">
                                {category.value}
                            </p>

                            {/* Label */}
                            <p className="text-sm text-gray-400 font-medium tracking-wide">
                                {category.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Tools;