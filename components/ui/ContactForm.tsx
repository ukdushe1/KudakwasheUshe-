'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Input, Textarea, Select } from './Input'
import Button from './Button'
import { validateEmail } from '@/lib/utils'
import type { ContactForm as ContactFormType } from '@/types'

interface ContactFormProps {
  onSubmit?: (data: ContactFormType) => Promise<void>
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  })
  
  const [errors, setErrors] = useState<Partial<ContactFormType>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const budgetOptions = [
    { value: '', label: 'Select your budget range' },
    { value: 'under-2k', label: 'Under $2,000' },
    { value: '2k-5k', label: '$2,000 - $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: 'over-25k', label: 'Over $25,000' },
    { value: 'discuss', label: 'Let\'s discuss' },
  ]

  const timelineOptions = [
    { value: '', label: 'Select your timeline' },
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: 'flexible', label: 'Flexible' },
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormType]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormType> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setSubmitStatus(null)

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Default form submission
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          throw new Error('Failed to send message')
        }
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg p-6 md:p-8"
    >
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg flex items-center"
        >
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
          <div>
            <h4 className="font-medium text-green-800 dark:text-green-200">
              Message sent successfully!
            </h4>
            <p className="text-sm text-green-600 dark:text-green-400">
              Thank you for reaching out. I&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg flex items-center"
        >
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" />
          <div>
            <h4 className="font-medium text-red-800 dark:text-red-200">
              Failed to send message
            </h4>
            <p className="text-sm text-red-600 dark:text-red-400">
              Please try again or contact me directly via email.
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            name="name"
            label="Full Name *"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="John Doe"
          />
          
          <Input
            name="email"
            type="email"
            label="Email Address *"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="john@company.com"
          />
        </div>

        <Input
          name="subject"
          label="Subject *"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          placeholder="Project inquiry, consultation request, etc."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            name="budget"
            label="Budget Range"
            value={formData.budget}
            onChange={handleChange}
            options={budgetOptions}
          />
          
          <Select
            name="timeline"
            label="Timeline"
            value={formData.timeline}
            onChange={handleChange}
            options={timelineOptions}
          />
        </div>

        <Textarea
          name="message"
          label="Project Details *"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Tell me about your project, goals, current challenges, and how I can help..."
          rows={6}
        />

        <Button
          type="submit"
          loading={isLoading}
          disabled={isLoading}
          className="w-full md:w-auto"
          size="lg"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
          <Send className="w-5 h-5 ml-2" />
        </Button>
      </form>
    </motion.div>
  )
}

export default ContactForm