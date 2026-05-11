"use client";

import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import k8s from '@/assets/k8s.png'
import Image from "next/image";
import DualToneButton from "../ui/DualToneButton";

const blogs = [
    {
        id: 1,
        title: "How Kubernetes Works Internally (K8s Architecture Explained Simply)",
        category: "Kubernetes",
        date: "10 May, 2026",
        excerpt: "Kubernetes feels complex because it hides a lot of internal machinery. In this article we breakdown how it all actually works one by one.",
        image: k8s,
        link: "https://medium.com/@chaudharyaakash234/how-kubernetes-works-internally-k8s-architecture-explained-simply-3fc44595cefc"
    },
];

const Blogs = () => {
    return (
        <section id="blogs" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-[1.5px] bg-[#F5AA17] rounded-full" />
                            <span className="text-[#F5AA17] text-[11px] font-semibold tracking-widest uppercase">News & Blogs</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            Our Latest <br />
                            <span className="text-[#F5AA17] italic font-medium">News & Blogs</span>
                        </h2>
                    </div>

                    {/* Dual Tone Button */}
                    <DualToneButton 
                        text="View All Blogs" 
                        href="https://medium.com/@chaudharyaakash234" 
                        target="_blank"
                    />
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link key={blog.id} target="_blank" href={blog.link}>
                            <div className="group flex flex-col">
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-6 cursor-pointer">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={800}
                                        height={800}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-[#F5AA17] flex items-center justify-center text-[#324E32] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <ArrowUpRight size={24} strokeWidth={2.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex gap-2 mb-4">
                                    <span className="bg-[#F5AA17] text-[#324E32] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                        {blog.category}
                                    </span>
                                    <span className="bg-[#F5AA17] text-[#324E32] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                        {blog.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#F5AA17] transition-colors cursor-pointer line-clamp-2 leading-snug">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                                    {blog.excerpt}
                                </p>

                                {/* Read More */}
                                <button className="text-sm font-bold text-gray-900 underline underline-offset-4 hover:text-[#F5AA17] transition-colors w-fit">
                                    Read More
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
