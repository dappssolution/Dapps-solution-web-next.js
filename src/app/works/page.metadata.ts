import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Works | Dapps Solutions',
  description: 'Explore our portfolio of AI-powered websites, apps, and digital transformation projects delivered by Dapps Solutions.',
  keywords: [
    'Dapps Solutions works',
    'portfolio',
    'AI projects',
    'web development',
    'app development',
    'case studies',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.dappssolutions.com/works',
    title: 'Our Works | Dapps Solutions',
    description: 'Explore our portfolio of AI-powered websites, apps, and digital transformation projects delivered by Dapps Solutions.',
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
    title: 'Our Works | Dapps Solutions',
    description: 'Explore our portfolio of AI-powered websites, apps, and digital transformation projects delivered by Dapps Solutions.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.dappssolutions.com/works',
  },
};
