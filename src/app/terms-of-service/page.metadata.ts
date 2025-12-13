import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Dapps Solutions',
  description: 'Read the terms of service for Dapps Solutions. Understand your rights and obligations when using our AI-powered solutions and services.',
  keywords: [
    'Terms of Service',
    'Dapps Solutions',
    'AI',
    'web development',
    'app development',
    'legal',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.dappssolutions.com/terms-of-service',
    title: 'Terms of Service | Dapps Solutions',
    description: 'Read the terms of service for Dapps Solutions. Understand your rights and obligations when using our AI-powered solutions and services.',
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
    title: 'Terms of Service | Dapps Solutions',
    description: 'Read the terms of service for Dapps Solutions. Understand your rights and obligations when using our AI-powered solutions and services.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.dappssolutions.com/terms-of-service',
  },
};
