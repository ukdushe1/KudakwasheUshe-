'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  DollarSign,
  Plus,
  Minus,
  Star,
  Users,
  Target,
  Award
} from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'
import type { Service } from '@/types'

const services: Service[] = [
  {
    id: '1',
    title: 'Customer Analytics',
    description: 'Understand your customers deeply with advanced segmentation, behavior analysis, and lifetime value modeling to drive targeted marketing and improve retention.',
    icon: 'analytics',
    features: [
      'RFM and behavioral customer segmentation',
      'Customer lifetime value (CLV) calculation',
      'Churn prediction and retention modeling',
      'Purchase pattern and journey analysis',
      'Personalization recommendation engines',
      'A/B testing framework setup'
    ],
    deliverables: [
      'Interactive customer segmentation dashboard',
      'Detailed segmentation report with actionable insights',
      'Automated customer scoring system',
      'Personalized marketing strategy recommendations',
      'Implementation roadmap and documentation'
    ],
    timeline: '2-4 weeks',
    startingPrice: '$2,500'
  },
  {
    id: '2',
    title: 'Predictive Modeling',
    description: 'Leverage machine learning to forecast future trends, identify risks, and optimize business decisions with custom predictive models.',
    icon: 'prediction',
    features: [
      'Demand and sales forecasting models',
      'Risk assessment and credit scoring',
      'Price optimization algorithms',
      'Inventory management predictions',
      'Market trend analysis',
      'Real-time model deployment'
    ],
    deliverables: [
      'Production-ready ML models',
      'Model performance and validation reports',
      'Real-time prediction dashboard',
      'Model monitoring and maintenance guide',
      'API integration documentation'
    ],
    timeline: '3-6 weeks',
    startingPrice: '$3,500'
  },
  {
    id: '3',
    title: 'Business Intelligence',
    description: 'Transform raw data into compelling visualizations and automated reporting systems that drive informed decision-making.',
    icon: 'intelligence',
    features: [
      'Interactive executive dashboards',
      'Automated KPI monitoring and alerts',
      'Custom reporting systems',
      'Data pipeline automation',
      'Performance tracking frameworks',
      'Mobile-friendly visualizations'
    ],
    deliverables: [
      'Custom BI dashboard suite',
      'Automated daily/weekly reports',
      'Data pipeline setup and documentation',
      'User training materials and sessions',
      'Maintenance and update procedures'
    ],
    timeline: '2-3 weeks',
    startingPrice: '$2,000'
  },
  {
    id: '4',
    title: 'Data Strategy Consulting',
    description: 'Develop a comprehensive data strategy aligned with your business objectives to maximize ROI from your data investments.',
    icon: 'strategy',
    features: [
      'Current state data audit and assessment',
      'Data maturity evaluation',
      'Strategic roadmap development',
      'Technology stack recommendations',
      'Team capability assessment',
      'ROI optimization planning'
    ],
    deliverables: [
      'Comprehensive data strategy document',
      'Prioritized implementation timeline',
      'Technology and tool recommendations',
      'Team training and hiring plan',
      'Success metrics and KPI framework'
    ],
    timeline: '1-2 weeks',
    startingPrice: '$1,500'
  }
]

const faqs = [
  {
    question: 'How do you ensure data privacy and security?',
    answer: 'I follow industry best practices including data encryption, secure access controls, GDPR compliance, and signed NDAs. All client data is handled with the highest level of confidentiality and security protocols.'
  },
  {
    question: 'What if I need ongoing support after project completion?',
    answer: 'I offer flexible maintenance packages and ongoing support options. This includes model monitoring, performance optimization, additional training, and technical support to ensure long-term success.'
  },
  {
    question: 'Do you work with small businesses or just enterprises?',
    answer: 'I work with businesses of all sizes, from startups to Fortune 500 companies. My solutions are scalable and can be tailored to fit your budget and specific business needs.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Simple dashboards can be completed in 1-2 weeks, while complex ML models may take 6-8 weeks. I always provide detailed timelines upfront.'
  },
  {
    question: 'What data do I need to get started?',
    answer: 'The data requirements depend on your specific project goals. During our initial consultation, I\'ll assess your current data and identify any gaps or additional data sources needed for success.'
  },
  {
    question: 'Do you provide training for my team?',
    answer: 'Yes! Knowledge transfer is a key part of my process. I provide comprehensive training sessions, documentation, and ongoing support to ensure your team can maintain and build upon the solutions.'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'Deep dive into your business goals, current data infrastructure, and specific challenges to define project scope and success metrics.',
    duration: '1-2 days'
  },
  {
    step: '02',
    title: 'Data Analysis & Strategy',
    description: 'Comprehensive analysis of your data to identify patterns, opportunities, and the best approach for achieving your objectives.',
    duration: '3-5 days'
  },
  {
    step: '03',
    title: 'Model Development & Testing',
    description: 'Build, train, and rigorously test models or analytics solutions using industry best practices and validation techniques.',
    duration: '1-3 weeks'
  },
  {
    step: '04',
    title: 'Implementation & Integration',
    description: 'Deploy solutions into your existing systems with proper integration, testing, and performance optimization.',
    duration: '3-7 days'
  },
  {
    step: '05',
    title: 'Training & Optimization',
    description: 'Team training, documentation handover, and continuous monitoring to ensure optimal performance and knowledge transfer.',
    duration: '2-5 days'
  }
]

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Head of Marketing',
    company: 'TechStart Inc.',
    content: 'Alex\'s customer segmentation analysis transformed our marketing strategy. We saw a 35% increase in ROI within the first quarter.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'VP of Operations',
    company: 'RetailCorp',
    content: 'The forecasting dashboard Alex built saved us millions in inventory costs and virtually eliminated stockouts.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Jennifer Walsh',
    role: 'Chief Data Officer',
    company: 'FinanceFlow',
    content: 'Alex helped us build a comprehensive data strategy that aligned perfectly with our business goals. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5
  }
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              Data Science <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto mb-8">
              Comprehensive data science solutions designed to transform your business through 
              strategic analytics, machine learning, and intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'Every project is designed to deliver measurable business impact and ROI'
              },
              {
                icon: Clock,
                title: 'Fast Delivery',
                description: 'Rapid prototyping and iterative development for quick time-to-value'
              },
              {
                icon: Award,
                title: 'Expert Quality',
                description: '5+ years of experience with proven track record across industries'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              My Services
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              End-to-end data science solutions tailored to your specific business needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              My Process
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {phase.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4 leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                      {phase.duration}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Connector Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-secondary-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              See what clients have to say about working with me and the results we've achieved together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-secondary-700 dark:text-secondary-300 mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-secondary-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-secondary-600 dark:text-secondary-400">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-primary-600 dark:text-primary-400">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400">
              Common questions about my data science services and process.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card>
                  <CardHeader>
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex justify-between items-center w-full text-left"
                    >
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 text-secondary-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-secondary-500" />
                      )}
                    </button>
                  </CardHeader>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Data?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Let's discuss your specific challenges and how my data science expertise 
              can help you achieve measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary-600 hover:bg-primary-50"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Free Consultation
                </Button>
              </Link>
              <Link href="/projects">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-primary-100 mb-4">
                💼 30-minute free consultation • ⚡ Fast turnaround • 📊 Proven results
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}