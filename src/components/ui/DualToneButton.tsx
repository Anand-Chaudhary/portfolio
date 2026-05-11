"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface DualToneButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    icon?: LucideIcon;
    className?: string;
    target?: string;
    type?: "button" | "submit" | "reset";
}

const DualToneButton = ({ 
    text, 
    href, 
    onClick, 
    icon: Icon = ArrowUpRight, 
    className = "", 
    target,
    type = "button"
}: DualToneButtonProps) => {
    const content = (
        <div className={`bg-[#F5AA17] group cursor-pointer flex items-center justify-between p-1 rounded-full hover:shadow-lg transition-all duration-300 w-fit h-14 sm:h-16 ${className}`}>
            <div className="bg-[#324E32] px-6 sm:px-10 h-full flex items-center justify-center text-white rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-[#324E32] text-sm sm:text-base font-bold whitespace-nowrap">
                {text}
            </div>

            <div className="h-10 sm:h-12 w-10 sm:w-12 ml-2 rounded-full flex items-center justify-center bg-white transition-all duration-300 group-hover:bg-[#324E32] group-hover:text-white flex-shrink-0">
                <Icon size={18} className="sm:w-5 sm:h-5" />
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} target={target} className="w-fit block">
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className="w-fit block border-none outline-none bg-transparent p-0">
            {content}
        </button>
    );
};

export default DualToneButton;
