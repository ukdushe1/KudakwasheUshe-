'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent } from './Card'
import type { BlogPost } from '@/types'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  index?: number
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="group overflow-hidden h-full">
          <div className="relative overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <CardContent className="p-6 flex flex-col flex-1">
            <div className="flex items-center text-sm text-secondary-500 mb-3 space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime} min read
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3 flex-1">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="text-secondary-500 text-sm">
                  +{post.tags.length - 2}
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full mr-2"
                />
                <span className="text-sm text-secondary-600 dark:text-secondary-400">
                  {post.author.name}
                </span>
              </div>
              
              <ArrowRight className="w-4 h-4 text-primary-600 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export default BlogCard