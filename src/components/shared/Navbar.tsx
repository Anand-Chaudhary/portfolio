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
        console.log("Navbar component mounted");
        
        const handleClick = (e: MouseEvent) => {
            console.log("Global click detected on element:", e.target);
            const target = e.target as HTMLElement;
            console.log("Element classes:", target.className);
            console.log("Element z-index:", window.getComputedStyle(target).zIndex);
        };

        window.addEventListener("click", handleClick);

        const layers = [
            layer1Ref.current,
            layer2Ref.current,
            layer3Ref.current,
            panelRef.current,
        ];

        // Clear any existing animations
        gsap.killTweensOf(layers);
        gsap.killTweensOf(menuItemsRef.current);

        gsap.set(layers, {
            xPercent: 100,
        });

        gsap.set(menuItemsRef.current, {
            y: 120,
            rotate: 8,
            opacity: 0,
        });

        return () => {
            window.removeEventListener("click", handleClick);
            gsap.killTweensOf(layers);
            gsap.killTweensOf(menuItemsRef.current);
            document.body.style.overflow = "";
        };
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
        } else {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        };
    }, [open]);

    const openMenu = () => {
        console.log("openMenu called");
        setOpen(true);

        const tl = gsap.timeline();

        if (!layer1Ref.current || !layer2Ref.current || !layer3Ref.current || !panelRef.current) {
            console.error("Missing refs in openMenu:", {
                layer1: !!layer1Ref.current,
                layer2: !!layer2Ref.current,
                layer3: !!layer3Ref.current,
                panel: !!panelRef.current
            });
            return;
        }

        console.log("Starting GSAP open animation");

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
                onComplete: () => console.log("Open animation complete")
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
            <nav className="fixed top-0 left-0 right-0 md:sticky md:max-w-6xl md:top-5 md:m-5 md:mx-auto z-[999999] p-5 mb-3 w-full h-16 text-white bg-[#324E32] md:rounded-3xl shadow-lg pointer-events-auto">
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
                            console.log("Navbar toggle clicked. Current state:", open);
                            if (open) {
                                closeMenu();
                            } else {
                                openMenu();
                            }
                        }}
                        className="relative z-[120] text-white cursor-pointer p-3 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
                        aria-label="Toggle Menu"
                    >
                        {open ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>

            {/* STAGGERED SLIDING WINDOWS */}

            <div 
                className={`fixed inset-0 z-[999998] transition-all duration-300 ${open ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"} overflow-y-auto`}
            >

                {/* Layer 1 */}
                <div
                    ref={layer1Ref}
                    className="absolute inset-0 bg-[#4B684B] pointer-events-none"
                />

                {/* Layer 2 */}
                <div
                    ref={layer2Ref}
                    className="absolute inset-0 bg-[#3D5D3D] pointer-events-none"
                />

                {/* Layer 3 */}
                <div
                    ref={layer3Ref}
                    className="absolute inset-0 bg-[#324E32] pointer-events-none"
                />

                {/* Main Panel */}
                <div
                    ref={panelRef}
                    className="absolute inset-0 min-h-full bg-[#FAF6EE] text-[#324E32] pointer-events-auto"
                >
                    <div className="flex flex-col justify-center min-h-full py-20 px-8 md:px-20">

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
                                        onClick={() => closeMenu()}
                                        className="block text-5xl md:text-7xl hover:text-[#F5AA17] font-bold uppercase tracking-tight hover:translate-x-3 transition-transform duration-300 py-2"
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
