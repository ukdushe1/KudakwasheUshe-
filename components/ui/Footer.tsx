'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  MapPin, 
  Phone,
  ArrowRight 
} from 'lucide-react'
import { Input } from './Input'
import Button from './Button'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'IT Administration', href: '/services#it-administration' },
    { name: 'Data Analytics', href: '/services#data-analytics' },
    { name: 'Educational Technology', href: '/services#educational-technology' },
    { name: 'System Integration', href: '/services#system-integration' },
  ]

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/kudakwashe-ushe-015195111', 
      icon: Linkedin,
      color: 'hover:text-blue-600' 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/kudakwashe-ushe', 
      icon: Github,
      color: 'hover:text-gray-600' 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/kudakwashe_ushe', 
      icon: Twitter,
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Email', 
      href: 'mailto:ushekudakwashe@gmail.com', 
      icon: Mail,
      color: 'hover:text-red-500' 
    },
  ]

  return (
    <footer className="bg-secondary-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="text-2xl font-bold gradient-text mb-4 block">
              Kudakwashe Ushe
            </Link>
            <p className="text-secondary-400 mb-6 leading-relaxed">
              Information Systems Specialist transforming data into actionable insights for educational excellence. 
              Specialized in IT administration, data science, and educational technology.
            </p>
            
            <div className="space-y-2 text-sm text-secondary-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Bulawayo, Zimbabwe
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (+263) 774 779 177
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
ushekudakwashe@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-secondary-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-secondary-400 mb-4 text-sm">
              Get the latest insights on educational technology and data science trends.
            </p>
            
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary-800 border-secondary-700 text-white placeholder:text-secondary-500"
              />
              <Button className="w-full" size="sm">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-secondary-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-secondary-400 ${social.color} transition-colors duration-200`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-secondary-400 text-sm text-center md:text-right">
              <p>© {currentYear} Kudakwashe Ushe. All rights reserved.</p>
              <p className="mt-1">
                Built with{' '}
                <span className="text-red-400">♥</span>
                {' '}using Next.js & TypeScript
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer