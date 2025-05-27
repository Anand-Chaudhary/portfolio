"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    const navItems = [
        { id: "home", label: "Home", href: "/" },
        { id: "projects", label: "Projects", href: "/project" },
        { id: "about", label: "About", href: "/about" },
        { id: "skills", label: "Skills", href: "/skills" },
        { id: "testimonials", label: "Testimonials", href: "/testimonials" },
        { id: "contacts", label: "Contacts", href: "/contacts" },
    ]

    const handleNavigation = (href: string) => {
        setIsOpen(false)
        
        if (href === "/") {
            router.push("/")
            return
        }
        
        if (href === "/project") {
            router.push("/project")
            return
        }

        // Handle hash-based navigation
        if (href.startsWith("/#")) {
            const sectionId = href.replace("/#", "")
            if (pathname === "/") {
                // If we're already on the home page, just scroll
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            } else {
                // If we're on another page, navigate to home page first
                router.push("/")
                // Wait for navigation to complete before scrolling
                setTimeout(() => {
                    const element = document.getElementById(sectionId)
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                    }
                }, 100)
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (isOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isOpen])

    if (!mounted) return null

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-background/80 backdrop-blur-xl"
                    : ""
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div onClick={() => handleNavigation("/")}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 cursor-pointer"
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">AC</span>
                            </div>
                            <span className="font-semibold text-foreground hidden sm:block">Anand Chaudhary</span>
                        </motion.div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => handleNavigation(item.href)}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    pathname === item.href || (pathname === "/" && item.href.startsWith("/#"))
                                        ? "text-blue-500 border-b-2 border-blue-500"
                                        : "text-muted-foreground hover:text-blue-500 dark:hover:text-blue-500"
                                }`}
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Mobile Menu Button */}
                        <motion.button
                            className="menu-button md:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-4 w-4 text-foreground" /> : <Menu className="h-4 w-4 text-foreground" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu md:hidden bg-white py-4 border-t border-border">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigation(item.href)}
                                    className={`w-full px-4 py-2 text-sm font-medium text-left transition-colors duration-200 ${
                                        pathname === item.href || (pathname === "/" && item.href.startsWith("/#"))
                                            ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                            : "text-muted-foreground hover:text-blue-500"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.nav>
    )
}