"use client";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navItems = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const panelRef = useRef<HTMLDivElement | null>(null);
    const layer1Ref = useRef<HTMLDivElement | null>(null);
    const layer2Ref = useRef<HTMLDivElement | null>(null);
    const layer3Ref = useRef<HTMLDivElement | null>(null);

    const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const layers = [
            layer1Ref.current,
            layer2Ref.current,
            layer3Ref.current,
            panelRef.current,
        ];

        gsap.set(layers, {
            xPercent: 100,
        });

        gsap.set(menuItemsRef.current, {
            y: 120,
            rotate: 8,
            opacity: 0,
        });
    }, []);

    const openMenu = () => {
        setOpen(true);

        const tl = gsap.timeline();

        tl.to(layer1Ref.current, {
            xPercent: 0,
            duration: 0.45,
            ease: "power4.out",
        })
        .to(
            layer2Ref.current,
            {
                xPercent: 0,
                duration: 0.5,
                ease: "power4.out",
            },
            "-=0.35"
        )
        .to(
            layer3Ref.current,
            {
                xPercent: 0,
                duration: 0.55,
                ease: "power4.out",
            },
            "-=0.42"
        )
        .to(
            panelRef.current,
            {
                xPercent: 0,
                duration: 0.6,
                ease: "power4.out",
            },
            "-=0.48"
        )
        .to(
            menuItemsRef.current,
            {
                y: 0,
                rotate: 0,
                opacity: 1,
                stagger: 0.08,
                duration: 0.8,
                ease: "power4.out",
            },
            "-=0.25"
        );
    };

    const closeMenu = () => {
        const tl = gsap.timeline({
            onComplete: () => setOpen(false),
        });

        tl.to(menuItemsRef.current, {
            y: 100,
            opacity: 0,
            stagger: 0.04,
            duration: 0.25,
            ease: "power2.in",
        })
        .to(
            [panelRef.current, layer3Ref.current, layer2Ref.current, layer1Ref.current],
            {
                xPercent: 100,
                stagger: 0.06,
                duration: 0.45,
                ease: "power4.inOut",
            },
            "-=0.1"
        );
    };

    return (
        <>
            <main className="md:max-w-6xl sticky md:top-5 top-0 z-50 p-5 md:m-5 mb-3 md:mx-auto w-full h-15 text-white bg-[#324E32] md:rounded-3xl">
                <div className="flex justify-between items-center h-full">
                    <div className="font-bold flex items-center gap-4">
                        <span className="w-10 h-10 flex items-center justify-center rounded bg-[#F5AA17] text-[#324E32]">
                            AC
                        </span>

                        <p className="flex items-center h-full">
                            Anand
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            if (open) {
                                closeMenu();
                            } else {
                                openMenu();
                            }
                        }}
                        className="relative z-[100] text-white"
                    >
                        {open ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </main>

            {/* STAGGERED SLIDING WINDOWS */}

            <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">

                {/* Layer 1 */}
                <div
                    ref={layer1Ref}
                    className="absolute inset-0 bg-[#4B684B]"
                />

                {/* Layer 2 */}
                <div
                    ref={layer2Ref}
                    className="absolute inset-0 bg-[#3D5D3D]"
                />

                {/* Layer 3 */}
                <div
                    ref={layer3Ref}
                    className="absolute inset-0 bg-[#324E32]"
                />

                {/* Main Panel */}
                <div
                    ref={panelRef}
                    className="absolute inset-0 bg-[#FAF6EE] text-[#324E32] pointer-events-auto"
                >
                    <div className="flex flex-col justify-center h-full px-8 md:px-20">

                        <div className="space-y-6">
                            {navItems.map((item, index) => (
                                <div
                                    key={item}
                                    className="overflow-hidden"
                                >
                                    <Link
                                        ref={(el) => {
                                            menuItemsRef.current[index] = el;
                                        }}
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="block text-5xl md:text-7xl hover:text-[#F5AA17] font-bold uppercase tracking-tight hover:translate-x-3 transition-transform duration-300"
                                    >
                                        {item}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="absolute bottom-10 left-8 md:left-20 flex gap-6 text-sm uppercase tracking-widest">
                            <Link href="https://github.com/Anand-Chaudhary" target="_blank" className="hover:text-[#F5AA17]">Github</Link>
                            <Link href="https://linkedin.com/in/anandchaudharymern" target="_blank" className="hover:text-[#F5AA17]">LinkedIn</Link>
                            <Link href="https://instagram.com/aahhhkaash" target="_blank" className="hover:text-[#F5AA17]">Instagram</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
