'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter } from './Card'
import Button from './Button'
import type { Project } from '@/types'
import { formatDate } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index?: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden">
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center text-sm text-secondary-500 mb-2">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(project.date)}
          </div>
          
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-2">
            {project.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-secondary-500 text-sm">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6">
          <Link href={`/projects/${project.slug}`} className="w-full">
            <Button className="w-full group/btn">
              View Case Study
              <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default ProjectCard