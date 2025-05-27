"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Linkedin } from "lucide-react"
import { StaticImageData } from "next/image"
import { motion } from "framer-motion"

type TestimonialProps = {
    image: string | StaticImageData,
    name: string,
    testimony: string,
    postion: string,
    company: string,
    rating: number,
    linkedin: string
}

export const Testimonial = ({ image, name, testimony, postion, company, rating, linkedin }: TestimonialProps) => {
    return (
        <Card className="bg-white/70 m-2 p-2 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between">
                <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <motion.a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/50 ckdrop-blur-sm rounded-xl flex items-center justify-center text-gray-600 er:text-blue-600 00 border border-gray-200/50 0 hover:border-blue-300 -600 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
            </div>
            <CardContent className="p-6">
                <div className="space-y-4">
                    <p className="text-black italic">{testimony}</p>
                    <div className="flex gap-4 pt-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <img
                                src={typeof image === 'string' ? image : image.src}
                                alt={name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-gray-900">{name}</h3>
                            <p className="text-sm text-gray-500">{postion} @ {company}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}