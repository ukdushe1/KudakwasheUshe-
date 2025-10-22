'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './Card'
import Button from './Button'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  index?: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  const IconComponent = React.useMemo(() => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'analytics': () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
        </svg>
      ),
      'prediction': () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      'intelligence': () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      'strategy': () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      ),
    }
    
    return iconMap[service.icon] || iconMap['analytics']
  }, [service.icon])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-primary-600 dark:text-primary-400">
              <IconComponent />
            </div>
          </div>
          <CardTitle className="text-2xl">{service.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-secondary-600 dark:text-secondary-400 mb-6 text-center">
            {service.description}
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-secondary-900 dark:text-white mb-3">
                What's Included:
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600 dark:text-secondary-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-secondary-900 dark:text-white mb-3">
                Deliverables:
              </h4>
              <ul className="space-y-2">
                {service.deliverables.map((deliverable, i) => (
                  <li key={i} className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-secondary-600 dark:text-secondary-400 text-sm">
                      {deliverable}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t border-secondary-200 dark:border-secondary-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-secondary-600 dark:text-secondary-400">Timeline:</span>
                <span className="font-semibold text-secondary-900 dark:text-white">
                  {service.timeline}
                </span>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-secondary-600 dark:text-secondary-400">Starting at:</span>
                <span className="text-2xl font-bold text-primary-600">
                  {service.startingPrice}
                </span>
              </div>
              
              <Button className="w-full">
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ServiceCard