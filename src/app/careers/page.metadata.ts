import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Dapps Solutions',
  description: 'Join Dapps Solutions and be part of a team driving AI-powered digital transformation, web, and app development.',
  keywords: [
    'Careers Dapps Solutions',
    'jobs',
    'AI',
    'digital transformation',
    'web development',
    'app development',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.dappssolutions.com/careers',
    title: 'Careers | Dapps Solutions',
    description: 'Join Dapps Solutions and be part of a team driving AI-powered digital transformation, web, and app development.',
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
    title: 'Careers | Dapps Solutions',
    description: 'Join Dapps Solutions and be part of a team driving AI-powered digital transformation, web, and app development.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.dappssolutions.com/careers',
  },
};
