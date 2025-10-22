import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Kudakwashe Ushe - Data Scientist | Information Systems Specialist | IT Administrator',
    template: '%s | Kudakwashe Ushe - Data Scientist'
  },
  description: 'Transform your data into actionable insights while managing large-scale IT infrastructure. Specializing in educational technology, data analytics, and system administration across Zimbabwe\'s education sector.',
  keywords: [
    'data scientist',
    'information systems',
    'IT administrator',
    'educational technology',
    'data analytics',
    'network administration',
    'system administration',
    'business intelligence',
    'python',
    'sql',
    'power bi',
    'zimbabwe education',
    'IT infrastructure'
  ],
  authors: [{ name: 'Kudakwashe Ushe', url: 'https://linkedin.com/in/kudakwashe-ushe-015195111' }],
  creator: 'Kudakwashe Ushe',
  publisher: 'Kudakwashe Ushe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kudakwashe-ushe.com',
    siteName: 'Kudakwashe Ushe - Data Scientist & IT Administrator',
    title: 'Kudakwashe Ushe - Data Scientist | Information Systems Specialist | IT Administrator',
    description: 'Transform your data into actionable insights while managing large-scale IT infrastructure in Zimbabwe\'s education sector.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kudakwashe Ushe - Data Scientist & IT Administrator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kudakwashe Ushe - Data Scientist | Information Systems Specialist | IT Administrator',
    description: 'Transform your data into actionable insights while managing large-scale IT infrastructure in Zimbabwe\'s education sector.',
    creator: '@kudakwashe_ushe',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}