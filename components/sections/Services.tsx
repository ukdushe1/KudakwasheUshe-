'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'
import type { Service } from '@/types'

const services: Service[] = [
  {
    id: '1',
    title: 'Customer Analytics',
    description: 'Understand your customers deeply with advanced segmentation, behavior analysis, and lifetime value modeling.',
    icon: 'analytics',
    features: [
      'Customer segmentation analysis',
      'Behavior pattern identification',
      'Lifetime value calculation',
      'Churn prediction modeling',
      'Personalization strategies'
    ],
    deliverables: [
      'Interactive customer dashboard',
      'Segmentation report with insights',
      'Actionable recommendations',
      'Implementation roadmap'
    ],
    timeline: '2-4 weeks',
    startingPrice: '$2,500'
  },
  {
    id: '2',
    title: 'Predictive Modeling',
    description: 'Forecast future trends and outcomes with machine learning models tailored to your business needs.',
    icon: 'prediction',
    features: [
      'Demand forecasting',
      'Risk assessment models',
      'Price optimization',
      'Inventory management',
      'Sales prediction'
    ],
    deliverables: [
      'Trained ML models',
      'Model performance reports',
      'Prediction dashboard',
      'Model maintenance guide'
    ],
    timeline: '3-6 weeks',
    startingPrice: '$3,500'
  },
  {
    id: '3',
    title: 'Business Intelligence',
    description: 'Transform raw data into compelling visualizations and automated reporting systems.',
    icon: 'intelligence',
    features: [
      'Interactive dashboards',
      'Automated reporting',
      'KPI monitoring',
      'Data visualization',
      'Performance tracking'
    ],
    deliverables: [
      'Custom BI dashboard',
      'Automated reports',
      'Data pipeline setup',
      'User training materials'
    ],
    timeline: '2-3 weeks',
    startingPrice: '$2,000'
  },
  {
    id: '4',
    title: 'Data Strategy Consulting',
    description: 'Develop a comprehensive data strategy aligned with your business objectives and growth plans.',
    icon: 'strategy',
    features: [
      'Data audit and assessment',
      'Strategy roadmap creation',
      'Technology recommendations',
      'Team capability building',
      'ROI optimization'
    ],
    deliverables: [
      'Data strategy document',
      'Implementation timeline',
      'Technology stack recommendations',
      'Training plan'
    ],
    timeline: '1-2 weeks',
    startingPrice: '$1,500'
  }
]

const Services: React.FC = () => {
  return (
    <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Comprehensive data science solutions to help your business make smarter, 
            data-driven decisions and achieve sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-secondary-800 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white text-center mb-12">
            My Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your business goals and data challenges'
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Deep dive into your data to identify patterns and opportunities'
              },
              {
                step: '03',
                title: 'Modeling',
                description: 'Building and testing models tailored to your specific needs'
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'Deploying solutions and integrating with your systems'
              },
              {
                step: '05',
                title: 'Optimization',
                description: 'Continuous monitoring and improvement of performance'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {phase.step}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                  {phase.title}
                </h4>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  {phase.description}
                </p>
                
                {/* Connector Line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-secondary-300 dark:bg-secondary-600" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
            Ready to Transform Your Data?
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help your business unlock the power of data 
            and drive meaningful growth through analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services