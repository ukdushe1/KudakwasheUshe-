'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Skill } from '@/types'

interface SkillBarProps {
  skill: Skill
  index?: number
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
          {skill.name}
        </span>
        <span className="text-sm text-secondary-500 dark:text-secondary-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-accent-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

interface SkillTagProps {
  skill: Skill
  index?: number
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, index = 0 }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      programming: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      tools: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      frameworks: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      databases: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      cloud: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    }
    return colors[category as keyof typeof colors] || colors.programming
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        ${getCategoryColor(skill.category)}
        transition-transform hover:scale-105
      `}
    >
      {skill.name}
      {skill.level && (
        <span className="ml-2 text-xs opacity-75">
          {skill.level}%
        </span>
      )}
    </motion.span>
  )
}

export { SkillBar, SkillTag }