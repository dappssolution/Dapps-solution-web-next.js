import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clients | Dapps Solutions',
  description: 'Discover the clients and partners who trust Dapps Solutions for AI-powered digital transformation, web, and app development.',
  keywords: [
    'Dapps Solutions clients',
    'partners',
    'AI',
    'digital transformation',
    'web development',
    'app development',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.dappssolutions.com/clients',
    title: 'Clients | Dapps Solutions',
    description: 'Discover the clients and partners who trust Dapps Solutions for AI-powered digital transformation, web, and app development.',
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
    title: 'Clients | Dapps Solutions',
    description: 'Discover the clients and partners who trust Dapps Solutions for AI-powered digital transformation, web, and app development.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.dappssolutions.com/clients',
  },
};
