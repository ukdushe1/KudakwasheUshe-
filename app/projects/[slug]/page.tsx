'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink,
  Download,
  Star
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import TestimonialCard from '@/components/ui/TestimonialCard'
import Button from '@/components/ui/Button'
import { getProjectBySlug, projects } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  // Get next project for navigation
  const currentIndex = projects.findIndex(p => p.slug === params.slug)
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0]

  const renderIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'trending-up': '📈',
      'trending-down': '📉',
      'mail': '📧',
      'users': '👥',
      'target': '🎯',
      'dollar-sign': '💰',
      'package': '📦',
      'alert-triangle': '⚠️',
      'clock': '⏰',
      'activity': '📊',
      'heart': '❤️',
      'shield': '🛡️',
      'zap': '⚡',
      'truck': '🚚',
      'repeat': '🔄',
      'settings': '⚙️',
      'piggy-bank': '🐷'
    }
    return iconMap[iconName] || '📊'
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/projects">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Project Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-secondary-500 mr-2" />
                  <div>
                    <div className="text-sm text-secondary-500">Date</div>
                    <div className="font-medium text-secondary-900 dark:text-white">
                      {formatDate(project.date)}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-secondary-500 mr-2" />
                  <div>
                    <div className="text-sm text-secondary-500">Duration</div>
                    <div className="font-medium text-secondary-900 dark:text-white">
                      {project.duration}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <User className="w-5 h-5 text-secondary-500 mr-2" />
                  <div>
                    <div className="text-sm text-secondary-500">Client</div>
                    <div className="font-medium text-secondary-900 dark:text-white">
                      {project.client}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-8">
              The Challenge
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-8">
              The Solution
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Key Results
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400">
              Measurable impact and business value delivered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">
                      {renderIcon(result.icon)}
                    </div>
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {result.value}
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                      {result.metric}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                      {result.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-8">
              Tools & Technologies
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {project.tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white dark:bg-secondary-800 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">
                      {tool.icon === 'python' && '🐍'}
                      {tool.icon === 'ml' && '🤖'}
                      {tool.icon === 'ai' && '🧠'}
                      {tool.icon === 'chart' && '📊'}
                      {tool.icon === 'database' && '🗄️'}
                      {tool.icon === 'data' && '📊'}
                      {tool.icon === 'forecast' && '📈'}
                      {tool.icon === 'dashboard' && '📋'}
                      {tool.icon === 'container' && '📦'}
                      {tool.icon === 'explain' && '🔍'}
                      {tool.icon === 'streaming' && '🌊'}
                      {tool.icon === 'settings' && '⚙️'}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-secondary-900 dark:text-white">
                    {tool.name}
                  </div>
                  <div className="text-xs text-secondary-500 capitalize">
                    {tool.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="section-padding bg-white dark:bg-secondary-800">
          <div className="max-w-4xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
                Client Testimonial
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-400">
                What the client had to say about this project
              </p>
            </motion.div>

            <TestimonialCard testimonial={project.testimonial} />
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
          <div className="max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
                Project Gallery
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-400">
                Visual insights and dashboard screenshots
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project Navigation */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Interested in Similar Results?
              </h2>
              <p className="text-primary-100 mb-8 text-lg">
                Let's discuss how I can help you achieve comparable success with your data challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary-600 hover:bg-primary-50"
                  >
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Next Project</h3>
              <Link href={`/projects/${nextProject.slug}`}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={nextProject.image}
                      alt={nextProject.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                      {nextProject.title}
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4">
                      {nextProject.excerpt}
                    </p>
                    <div className="flex items-center text-primary-600">
                      <span className="text-sm font-medium">View Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}