'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, Github, Award, BookOpen, Users, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { SkillBar, SkillTag } from '@/components/ui/SkillBar'
import Button from '@/components/ui/Button'
import type { Skill, TimelineEvent } from '@/types'

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'programming' },
  { name: 'C#', level: 85, category: 'programming' },
  { name: 'SQL', level: 90, category: 'programming' },
  { name: 'Visual Basic', level: 80, category: 'programming' },
  { name: 'HTML/CSS', level: 85, category: 'programming' },
  { name: 'JavaScript', level: 80, category: 'programming' },
  { name: 'Data Science', level: 88, category: 'frameworks' },
  { name: 'Statistical Analysis', level: 85, category: 'frameworks' },
  { name: 'Business Intelligence', level: 90, category: 'frameworks' },
  { name: 'Power BI', level: 90, category: 'tools' },
  { name: 'Tableau', level: 85, category: 'tools' },
  { name: 'Network Administration', level: 95, category: 'tools' },
  { name: 'System Administration', level: 95, category: 'tools' },
  { name: 'MySQL', level: 90, category: 'databases' },
  { name: 'MS SQL Server', level: 88, category: 'databases' },
]

const timeline: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Data Science Professional Certificate',
    company: 'Coursera',
    description: 'Completed comprehensive data science certification program, gaining expertise in machine learning, statistical analysis, and data visualization.',
    type: 'certification'
  },
  {
    year: '2021-Present',
    title: 'IT Administrator',
    company: 'Ministry of Education, Zimbabwe',
    description: 'Managing comprehensive IT infrastructure serving 15+ schools and 5,000+ users. Deploying telecommunications systems, ensuring 99.9% network uptime, and implementing robust data security measures.',
    type: 'work'
  },
  {
    year: '2021-2024',
    title: 'Bachelor of Science Honours in Information Systems',
    company: 'Manicaland State University of Applied Sciences',
    description: 'Graduated with Upper Second Class honors (GPA: 2.1/3.0). Key coursework in Data Warehousing, Business Intelligence, AI, and Blockchain Technologies.',
    type: 'education'
  },
  {
    year: '2014-Present',
    title: 'Computer Science Teacher & Technology Coordinator',
    company: 'Ministry of Education, Zimbabwe',
    description: 'Designing technology curricula, managing school IT systems, and leading technology upgrade projects resulting in 25% improvement in system performance.',
    type: 'work'
  },
  {
    year: '2013',
    title: 'Information Technology Certification',
    company: 'Bulawayo Polytechnic',
    description: 'Completed National Certificate with Upper Second Class honors in IT fundamentals, programming, network administration, and database management.',
    type: 'certification'
  },
  {
    year: '2012-2013',
    title: 'National Certificate in Information Technology',
    company: 'Bulawayo Polytechnic',
    description: 'Comprehensive IT education covering computer fundamentals, programming, network administration, database management, and web development.',
    type: 'education'
  },
  {
    year: '2005',
    title: 'Foundations for Business Studies Certificate',
    company: 'ICS Zimbabwe',
    description: 'Foundational business education providing essential skills for professional development.',
    type: 'certification'
  }
]

export default function AboutPage() {
  const programmingSkills = skills.filter(s => s.category === 'programming')
  const frameworkSkills = skills.filter(s => s.category === 'frameworks')
  const toolSkills = skills.filter(s => s.category === 'tools')
  const databaseSkills = skills.filter(s => s.category === 'databases')
  const cloudSkills = skills.filter(s => s.category === 'cloud')

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                About <span className="gradient-text">Kudakwashe Ushe</span>
              </h1>
              
              <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                I'm a dedicated Information Systems professional with 10+ years of progressive experience 
                in IT operations, network administration, and data science. Currently serving as an IT Administrator 
                and Computer Science Teacher with the Ministry of Education in Zimbabwe.
              </p>
              
              <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed">
                My expertise spans managing large-scale IT infrastructure serving 500+ users, data analysis, 
                and educational technology. I'm passionate about leveraging technology and data science to 
                drive educational outcomes and organizational efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="lg">
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl transform rotate-3"></div>
                <Image
                  src="/images/me.jpg"
                  alt="Kudakwashe Ushe"
                  width={500}
                  height={600}
                  className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience 
              in data science, machine learning, and business analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Skill Bars */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8">
                Core Competencies
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200 mb-4">
                    Programming Languages
                  </h4>
                  {programmingSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200 mb-4">
                    Machine Learning & Analytics
                  </h4>
                  {frameworkSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skill Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8">
                Tools & Technologies
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200 mb-4">
                    Visualization & BI Tools
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {toolSkills.map((skill, index) => (
                      <SkillTag key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200 mb-4">
                    Databases
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {databaseSkills.map((skill, index) => (
                      <SkillTag key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200 mb-4">
                    Cloud Platforms
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {cloudSkills.map((skill, index) => (
                      <SkillTag key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              My Approach
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              How I transform data challenges into business opportunities through 
              strategic thinking and technical excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Business-First Thinking',
                description: 'I start every project by understanding your business goals and challenges, ensuring that technical solutions align with strategic objectives.'
              },
              {
                icon: Users,
                title: 'Collaborative Partnership',
                description: 'I work closely with your team to build capabilities and ensure knowledge transfer, making you self-sufficient for the long term.'
              },
              {
                icon: BookOpen,
                title: 'Continuous Learning',
                description: 'I stay current with the latest developments in data science and machine learning to bring cutting-edge solutions to your problems.'
              },
              {
                icon: Award,
                title: 'Quality & Ethics',
                description: 'I maintain the highest standards of data quality, model accuracy, and ethical AI practices in all my work.'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              My Journey
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              From computer science foundations to data science leadership – 
              a path of continuous learning and impact.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-secondary-300 dark:bg-secondary-600"></div>

            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-800"></div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                          {event.year}
                        </span>
                        <span className={`
                          px-2 py-1 rounded text-xs font-medium
                          ${event.type === 'work' && 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'}
                          ${event.type === 'education' && 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}
                          ${event.type === 'certification' && 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'}
                          ${event.type === 'achievement' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'}
                        `}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                        {event.title}
                      </h3>
                      {event.company && (
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {event.company}
                        </p>
                      )}
                      <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}