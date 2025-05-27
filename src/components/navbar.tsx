"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [activeSection, setActiveSection] = useState<string>("")
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    const navItems = useMemo(()=>[
        { id: "home", label: "Home", href: "/" },
        { id: "projects", label: "Projects", href: "/project" },
        { id: "about", label: "About", href: "/about" },
        { id: "skills", label: "Skills", href: "/#skills" },
        { id: "testimonials", label: "Testimonials", href: "/about#testimonials" },
        { id: "contacts", label: "Contacts", href: "/contacts" },
    ], [])
    

    const handleNavigation = (item: { id: string; href?: string }) => {
        setIsOpen(false)
        
        if (item.href) {
            router.push(item.href)
            setActiveSection(item.id)
            return
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // Only check for active sections if we're on the home page
            if (pathname === "/") {
                const sections = ["skills", "projects", "about", "testimonials"]
                let currentSection = "home"

                sections.forEach((section) => {
                    const element = document.getElementById(section)
                    if (element) {
                        const rect = element.getBoundingClientRect()
                        if (rect.top <= 100 && rect.bottom >= 100) {
                            currentSection = section
                        }
                    }
                })

                setActiveSection(currentSection)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    // Update active section when pathname changes
    useEffect(() => {
        const currentItem = navItems.find(item => item.href === pathname)
        if (currentItem) {
            setActiveSection(currentItem.id)
        } else if (pathname === "/") {
            setActiveSection("home")
        }
    }, [pathname, navItems])

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
                    <div onClick={() => handleNavigation({ id: "home", href: "/" })}>
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
                                onClick={() => handleNavigation(item)}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    item.id === activeSection
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
                                    onClick={() => handleNavigation(item)}
                                    className={`w-full px-4 py-2 text-sm font-medium text-left transition-colors duration-200 ${
                                        item.id === activeSection
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