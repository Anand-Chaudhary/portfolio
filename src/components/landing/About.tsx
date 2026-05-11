import Image from "next/image";
import about from '@/assets/about_me.png'
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import DualToneButton from "../ui/DualToneButton";

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
]

const About = () => {
    return (
        <div className="bg-[#324E32] w-full py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <section className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <Image
                            src={about}
                            alt="About me"
                            width={500}
                            height={500}
                            className="w-full max-w-md lg:max-w-none h-auto"
                        />
                    </section>
                    <section className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
                        <div className="space-y-4">
                            <p className="flex font-medium gap-2 items-center text-[#F5AA17] text-base sm:text-lg">
                                <ArrowLeft stroke="#F5AA17" />
                                About Me
                            </p>
                            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                                Who Is
                                <span className="italic text-[#F5AA17] font-light block lg:inline lg:ml-2">Anand Chaudhary?</span>
                            </h2>
                        </div>
                        
                        <p className="text-white text-base sm:text-lg leading-relaxed max-w-xl">
                            I'm a full stack developer with a passion for creating beautiful and functional web applications.
                        </p>
                        
                        <div className="flex flex-wrap gap-6 sm:gap-8">
                            {STATS.map((stat, index) => (
                                <div key={index} className="flex flex-col gap-1">
                                    <p className="text-2xl sm:text-3xl font-bold text-[#F5AA17]">{stat.value}</p>
                                    <p className="text-white text-sm sm:text-base font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="pt-4">
                            <DualToneButton 
                                text="Download CV" 
                                href="#" 
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;