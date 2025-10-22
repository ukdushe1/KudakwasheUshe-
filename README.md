# Data Science Portfolio Website

A modern, professional portfolio website built with Next.js 14, showcasing data science projects and services. Features a clean design, responsive layout, and interactive elements.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-pink?style=flat-square&logo=framer)

## ✨ Features

### 🎨 Design & UX
- **Modern, Clean Design** - Professional layout with smooth animations
- **Fully Responsive** - Mobile-first design that works on all devices
- **Dark Mode Toggle** - Seamless light/dark theme switching with persistence
- **Smooth Animations** - Framer Motion powered interactions and page transitions
- **Optimized Performance** - Built with Next.js 14 for fast loading times

### 📄 Pages & Sections
- **Homepage** - Hero section, featured projects, services overview, stats, and CTA
- **About** - Professional bio, skills, education, timeline, and downloadable CV
- **Projects** - Filterable project gallery with detailed case studies
- **Services** - Comprehensive service offerings with pricing and process
- **Blog** - Article listing with categorization and search functionality
- **Contact** - Contact form with validation and multiple contact methods

### 🛠 Technical Features
- **TypeScript** - Fully typed for better development experience
- **SEO Optimized** - Meta tags, OpenGraph, Twitter Cards, and structured data
- **Contact Form API** - Server-side form handling with validation
- **MDX Support** - Rich content creation for blog posts and case studies
- **Component Library** - Reusable UI components with consistent styling
- **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/data-science-portfolio.git
   cd data-science-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
data-science-portfolio/
├── app/                     # Next.js 14 App Router
│   ├── about/              # About page
│   ├── api/                # API routes
│   │   └── contact/        # Contact form endpoint
│   ├── blog/               # Blog pages
│   ├── contact/            # Contact page
│   ├── projects/           # Projects pages
│   ├── services/           # Services page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # React components
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   └── CTA.tsx
│   └── ui/                 # UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── ProjectCard.tsx
│       ├── BlogCard.tsx
│       └── ServiceCard.tsx
├── content/                # MDX content files
│   ├── blog/              # Blog posts
│   └── projects/          # Project case studies
├── lib/                   # Utility functions
│   ├── projects.ts        # Project data
│   └── utils.ts           # Helper functions
├── public/                # Static assets
│   ├── images/           # Images
│   └── icons/            # Icons
├── styles/               # Global styles
│   └── globals.css       # Tailwind CSS
├── types/                # TypeScript types
│   └── index.ts          # Type definitions
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🎯 Customization Guide

### 1. Personal Information

Update your personal information in these files:

**Basic Info** (`components/sections/Hero.tsx`):
```tsx
// Update line 80
👋 Hello, I'm [Your Name]

// Update line 10 for typing animation
const fullText = '[Your Title]'
```

**Contact Details** (`components/ui/Footer.tsx`):
```tsx
// Update lines 84-94 with your contact information
```

**SEO Metadata** (`app/layout.tsx`):
```tsx
// Update lines 11-70 with your information
```

### 2. Adding Projects

Add new projects to `lib/projects.ts`:

```tsx
export const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Your Project Title',
    slug: 'project-url-slug',
    description: 'Brief description',
    excerpt: 'Excerpt for cards',
    category: 'customer-analytics' | 'predictive-modeling' | 'business-intelligence' | 'data-strategy',
    image: '/images/projects/your-image.jpg',
    tags: ['Python', 'SQL', 'Tableau'],
    // ... more fields
  }
]
```

### 3. Blog Posts

Create MDX files in `content/blog/`:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-01"
excerpt: "Brief description"
tags: ["data-science", "python"]
---

# Your Blog Content

Write your blog content here using MDX.
```

### 4. Services & Pricing

Update services in `components/sections/Services.tsx`:

```tsx
const services: Service[] = [
  {
    id: '1',
    title: 'Your Service',
    description: 'Service description',
    icon: 'analytics',
    features: ['Feature 1', 'Feature 2'],
    deliverables: ['Deliverable 1'],
    timeline: '2-4 weeks',
    startingPrice: '$2,500'
  }
]
```

### 5. Styling & Theme

**Colors** (`tailwind.config.ts`):
```tsx
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

**Fonts** (`app/layout.tsx`):
```tsx
import { YourFont } from 'next/font/google'
const yourFont = YourFont({ subsets: ['latin'] })
```

## 📧 Contact Form Setup

The contact form requires email service configuration:

### Option 1: Resend (Recommended)

1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   ```
4. Uncomment the Resend code in `app/api/contact/route.ts`

### Option 2: Nodemailer + SMTP

Add to `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Option 3: Other Services

- SendGrid
- AWS SES
- Mailgun
- ConvertKit

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

### Other Platforms

- **Netlify** - Works great with static export
- **Railway** - Good for full-stack features
- **DigitalOcean App Platform** - Scalable option

## 📈 Performance Optimization

### Built-in Optimizations

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic code splitting and lazy loading
- **Font Optimization** - Google Fonts optimization
- **Bundle Analysis** - Built-in bundle analyzer

### Additional Optimizations

```bash
# Analyze bundle size
npm run build
npm run analyze

# Check performance
npm run lighthouse
```

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 📝 Content Management

### Adding Blog Posts

1. Create MDX file in `content/blog/`
2. Add metadata frontmatter
3. Write content using MDX syntax
4. Images go in `public/images/blog/`

### Adding Projects

1. Add project data to `lib/projects.ts`
2. Add images to `public/images/projects/`
3. Optionally create detailed MDX case study

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 🎨 Design System

### Colors
- **Primary**: Professional blue (#2563eb)
- **Secondary**: Dark gray (#1e293b)  
- **Accent**: Green (#10b981)
- **Background**: White/Light gray

### Typography
- **Headings**: Inter (bold)
- **Body**: Inter
- **Code**: JetBrains Mono

### Components
All components follow consistent design patterns with:
- Hover effects
- Loading states
- Error handling
- Accessibility features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you need help customizing this portfolio:

- 📧 Email: support@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/data-science-portfolio/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/data-science-portfolio/discussions)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Unsplash](https://unsplash.com/) - Sample images

---

Built with ❤️ using Next.js 14 and TypeScript