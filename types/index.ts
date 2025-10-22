export interface Project {
  id: string
  title: string
  slug: string
  description: string
  excerpt: string
  category: 'customer-analytics' | 'predictive-modeling' | 'business-intelligence' | 'data-strategy'
  image: string
  tags: string[]
  client: string
  duration: string
  date: string
  challenge: string
  solution: string
  results: ProjectResult[]
  tools: Tool[]
  testimonial?: Testimonial
  gallery?: string[]
}

export interface ProjectResult {
  metric: string
  value: string
  description: string
  icon: string
}

export interface Tool {
  name: string
  icon: string
  category: 'language' | 'framework' | 'database' | 'visualization' | 'cloud'
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: number
  tags: string[]
  category: string
  image: string
  author: Author
}

export interface Author {
  name: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image: string
  rating: number
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  deliverables: string[]
  timeline: string
  startingPrice: string
}

export interface Skill {
  name: string
  level: number
  category: 'programming' | 'tools' | 'frameworks' | 'databases' | 'cloud'
}

export interface TimelineEvent {
  year: string
  title: string
  company?: string
  description: string
  type: 'education' | 'work' | 'certification' | 'achievement'
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  budget: string
  timeline: string
}

export interface NavItem {
  name: string
  href: string
  external?: boolean
}