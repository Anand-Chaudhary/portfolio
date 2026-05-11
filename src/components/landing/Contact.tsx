"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import DualToneButton from "../ui/DualToneButton";

const contactInfo = [
    {
        icon: <Mail size={16} strokeWidth={1.8} />,
        label: "Email",
        value: "anandchaudhary2064@gmail.com",
    },
    {
        icon: <MapPin size={16} strokeWidth={1.8} />,
        label: "Address",
        value: "Kathmandu, Nepal",
    },
];

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-stretch bg-[#FDFBDE]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.4fr]">

                {/* ── Left panel ── */}
                <div className="relative bg-[#324E32] px-10 py-14 flex flex-col justify-between overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute -top-16 -right-20 w-64 h-64 rounded-full bg-[#F5AA17]/10 pointer-events-none" />
                    <div className="absolute -bottom-10 -left-14 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />

                    <div className="relative z-10">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-7 h-[1.5px] bg-[#F5AA17] rounded-full" />
                            <span className="text-[#F5AA17] text-[11px] font-semibold tracking-widest uppercase">Contact Us</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-serif text-white text-3xl sm:text-4xl leading-[1.15] mb-5">
                            Let&apos;s Talk for{" "}
                            <span className="italic text-[#F5AA17]">Your<br />Next Projects</span>
                        </h2>

                        <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
                            Ready to take your digital presence to the next level? Whether you have a specific project in mind or just want to explore the possibilities, I'm here to help.
                        </p>
                    </div>

                    {/* Contact info */}
                    <div className="relative z-10 flex flex-col gap-5 mt-12">
                        {contactInfo.map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#F5AA17]/15 flex items-center justify-center text-[#F5AA17] flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-white/35 mb-0.5">{item.label}</p>
                                    <p className="text-white/75 text-sm">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: form ── */}
                <div className="px-10 py-12 bg-white">
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">

                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#324E32]">
                                Your Name <span className="text-[#F5AA17]">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: John Doe"
                                className="bg-[#F5F5EE] rounded-xl px-4 py-2.5 text-sm text-[#324E32] placeholder:text-[#324E32]/35 outline-none border border-transparent focus:border-[#F5AA17] focus:bg-white focus:ring-2 focus:ring-[#F5AA17]/15 transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#324E32]">
                                Email <span className="text-[#F5AA17]">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="example@eg.com"
                                className="bg-[#F5F5EE] rounded-xl px-4 py-2.5 text-sm text-[#324E32] placeholder:text-[#324E32]/35 outline-none border border-transparent focus:border-[#F5AA17] focus:bg-white focus:ring-2 focus:ring-[#F5AA17]/15 transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#324E32]">Phone</label>
                            <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                className="bg-[#F5F5EE] rounded-xl px-4 py-2.5 text-sm text-[#324E32] placeholder:text-[#324E32]/35 outline-none border border-transparent focus:border-[#F5AA17] focus:bg-white focus:ring-2 focus:ring-[#F5AA17]/15 transition-all"
                            />
                        </div>

                        {/* Availability */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#324E32]">
                                Availability <span className="text-[#F5AA17]">*</span>
                            </label>
                            <select className="bg-[#F5F5EE] rounded-xl px-4 py-2.5 text-sm text-[#324E32] outline-none border border-transparent focus:border-[#F5AA17] focus:bg-white focus:ring-2 focus:ring-[#F5AA17]/15 transition-all appearance-none cursor-pointer">
                                <option value="">Select</option>
                                <option>Immediately</option>
                                <option>Within 2 weeks</option>
                                <option>Within a month</option>
                                <option>Flexible</option>
                            </select>
                        </div>

                        {/* Budget */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#324E32]">
                                Budget Range (USD) <span className="text-[#F5AA17]">*</span>
                            </label>
                            <select className="bg-[#F5F5EE] rounded-xl px-4 py-2.5 text-sm text-[#324E32] outline-none border border-transparent focus:border-[#F5AA17] focus:bg-white focus:ring-2 focus:ring-[#F5AA17]/15 transition-all appearance-none cursor-pointer">
                                <option value="">Select Budget</option>
                                <option>$1,000 – $5,000</option>
                                <option>$5,000 – $10,000</option>
                                <option>$10,000 – $25,000</option>
                                <option>$25,000+</option>
                            </select>
                        </div>

                        {/* Country */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#324E32]">Country</label>
                            <select className="bg-[#F5F5EE] rounded-xl px-4 py-2.5 text-sm text-[#324E32] outline-none border border-transparent focus:border-[#F5AA17] focus:bg-white focus:ring-2 focus:ring-[#F5AA17]/15 transition-all appearance-none cursor-pointer">
                                <option value="">Select Country</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                                <option>Canada</option>
                                <option>Australia</option>
                                <option>Nepal</option>
                                <option>India</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Message — full width */}
                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#324E32]">
                                Your Message <span className="text-[#F5AA17]">*</span>
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Enter here…"
                                className="bg-[#F5F5EE] rounded-xl px-4 py-2.5 text-sm text-[#324E32] placeholder:text-[#324E32]/35 outline-none border border-transparent focus:border-[#F5AA17] focus:bg-white focus:ring-2 focus:ring-[#F5AA17]/15 transition-all resize-none leading-relaxed"
                            />
                        </div>

                        {/* Submit row — full width */}
                        <div className="sm:col-span-2 flex items-center justify-between gap-4 mt-6">
                            <span className="text-xs text-[#324E32]/45">We&apos;ll reply within 24 hours.</span>
                            <DualToneButton 
                                text="Submit" 
                                type="submit"
                                icon={ArrowRight}
                                className="w-full sm:w-fit"
                            />
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;