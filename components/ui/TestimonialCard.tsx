'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from './Card'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index = 0 }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'text-yellow-400 fill-current'
            : 'text-secondary-300 dark:text-secondary-600'
        }`}
      />
    ))
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Quote className="w-8 h-8 text-primary-500 mr-3" />
            <div className="flex">{renderStars(testimonial.rating)}</div>
          </div>
          
          <blockquote className="text-secondary-700 dark:text-secondary-300 mb-6 italic leading-relaxed">
            "{testimonial.content}"
          </blockquote>
          
          <div className="flex items-center">
            <div className="relative">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            
            <div className="ml-4">
              <h4 className="font-semibold text-secondary-900 dark:text-white">
                {testimonial.name}
              </h4>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                {testimonial.role}
              </p>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                {testimonial.company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default TestimonialCard