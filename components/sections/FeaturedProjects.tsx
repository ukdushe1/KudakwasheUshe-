'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProjectCard from '../ui/ProjectCard'
import Button from '../ui/Button'
import type { Project } from '@/types'

const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Customer Segmentation Analysis',
    slug: 'ecommerce-customer-segmentation',
    description: 'Comprehensive customer segmentation analysis for a major e-commerce platform resulting in 35% increase in marketing ROI.',
    excerpt: 'Advanced customer segmentation using RFM analysis and machine learning to identify high-value customer groups and optimize marketing strategies.',
    category: 'customer-analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Tableau', 'RFM Analysis'],
    client: 'E-commerce Startup',
    duration: '6 weeks',
    date: '2024-01-15',
    challenge: 'The client struggled with low email marketing conversion rates and wanted to better understand their customer base.',
    solution: 'Implemented RFM analysis combined with K-means clustering to identify distinct customer segments and developed targeted marketing strategies.',
    results: [
      {
        metric: 'Marketing ROI',
        value: '+35%',
        description: 'Increase in marketing return on investment',
        icon: 'trending-up'
      },
      {
        metric: 'Email CTR',
        value: '+42%',
        description: 'Improvement in email click-through rates',
        icon: 'mail'
      },
      {
        metric: 'Customer Retention',
        value: '+28%',
        description: 'Increase in customer retention rate',
        icon: 'users'
      }
    ],
    tools: [
      { name: 'Python', icon: 'python', category: 'language' },
      { name: 'Scikit-learn', icon: 'ml', category: 'framework' },
      { name: 'Tableau', icon: 'chart', category: 'visualization' }
    ]
  },
  {
    id: '2',
    title: 'Predictive Churn Model for Telecom',
    slug: 'telecom-churn-prediction',
    description: 'Built a machine learning model to predict customer churn with 89% accuracy, helping reduce churn rate by 23%.',
    excerpt: 'Developed an ensemble machine learning model using gradient boosting and neural networks to predict customer churn with high accuracy.',
    category: 'predictive-modeling',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'XGBoost', 'TensorFlow', 'SQL', 'Power BI'],
    client: 'Telecom Company',
    duration: '8 weeks',
    date: '2023-11-20',
    challenge: 'High customer churn rate was impacting revenue growth and the company needed to identify at-risk customers proactively.',
    solution: 'Developed an ensemble model combining XGBoost and neural networks, with automated feature engineering and real-time scoring.',
    results: [
      {
        metric: 'Model Accuracy',
        value: '89%',
        description: 'Prediction accuracy on test dataset',
        icon: 'target'
      },
      {
        metric: 'Churn Reduction',
        value: '-23%',
        description: 'Decrease in overall churn rate',
        icon: 'trending-down'
      },
      {
        metric: 'Revenue Protected',
        value: '$2.1M',
        description: 'Annual revenue protected from churn',
        icon: 'dollar-sign'
      }
    ],
    tools: [
      { name: 'Python', icon: 'python', category: 'language' },
      { name: 'XGBoost', icon: 'ml', category: 'framework' },
      { name: 'TensorFlow', icon: 'ai', category: 'framework' }
    ]
  },
  {
    id: '3',
    title: 'Sales Forecasting Dashboard for Retail',
    slug: 'retail-sales-forecasting',
    description: 'Created an interactive dashboard with automated sales forecasting that improved inventory planning accuracy by 40%.',
    excerpt: 'Built a comprehensive sales forecasting system using time series analysis and machine learning with real-time dashboard visualization.',
    category: 'business-intelligence',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Prophet', 'Streamlit', 'PostgreSQL', 'Docker'],
    client: 'Retail Chain',
    duration: '5 weeks',
    date: '2023-09-10',
    challenge: 'Manual sales forecasting was time-consuming and inaccurate, leading to overstocking and stockouts.',
    solution: 'Implemented automated forecasting using Facebook Prophet with seasonal adjustments and external factors integration.',
    results: [
      {
        metric: 'Forecast Accuracy',
        value: '+40%',
        description: 'Improvement in forecasting accuracy',
        icon: 'trending-up'
      },
      {
        metric: 'Inventory Costs',
        value: '-18%',
        description: 'Reduction in inventory holding costs',
        icon: 'package'
      },
      {
        metric: 'Stockouts',
        value: '-52%',
        description: 'Decrease in stockout incidents',
        icon: 'alert-triangle'
      }
    ],
    tools: [
      { name: 'Python', icon: 'python', category: 'language' },
      { name: 'Prophet', icon: 'forecast', category: 'framework' },
      { name: 'Streamlit', icon: 'dashboard', category: 'visualization' }
    ]
  }
]

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Discover how I've helped businesses transform their data into competitive advantages 
            through strategic analytics and machine learning solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Impact Across Industries
            </h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              From startups to enterprise companies, I deliver measurable results 
              that drive business growth and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '25+', label: 'Happy Clients' },
              { value: '$5M+', label: 'Value Generated' },
              { value: '89%', label: 'Avg. Model Accuracy' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-100 text-sm md:text-base">
                  {stat.label}
                </div>
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
            Want to See More?
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto">
            Explore my complete portfolio of data science projects and case studies 
            to see how I can help transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects