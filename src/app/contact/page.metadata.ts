import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Dapps Solutions',
  description: 'Contact Dapps Solutions for AI-powered web, app, and digital transformation services. Get in touch for a free consultation.',
  keywords: [
    'Contact Dapps Solutions',
    'AI',
    'web development',
    'app development',
    'digital transformation',
    'consultation',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.dappssolutions.com/contact',
    title: 'Contact Us | Dapps Solutions',
    description: 'Contact Dapps Solutions for AI-powered web, app, and digital transformation services. Get in touch for a free consultation.',
    siteName: 'Dapps Solutions',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Dapps Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dappssolutions',
    title: 'Contact Us | Dapps Solutions',
    description: 'Contact Dapps Solutions for AI-powered web, app, and digital transformation services. Get in touch for a free consultation.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.dappssolutions.com/contact',
  },
};
