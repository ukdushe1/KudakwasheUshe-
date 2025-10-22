'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Coffee } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '50+',
    label: 'Projects Completed',
    description: 'Successfully delivered data science projects across various industries'
  },
  {
    icon: Users,
    value: '25+',
    label: 'Happy Clients',
    description: 'From startups to Fortune 500 companies worldwide'
  },
  {
    icon: Award,
    value: '5+',
    label: 'Years Experience',
    description: 'Deep expertise in data science and machine learning'
  },
  {
    icon: Coffee,
    value: '1000+',
    label: 'Hours of Analysis',
    description: 'Dedicated to transforming data into actionable insights'
  }
]

const Stats: React.FC = () => {
  return (
    <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Numbers that reflect my commitment to delivering exceptional data science solutions 
            that drive real business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white dark:bg-secondary-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-4xl font-bold text-secondary-900 dark:text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats