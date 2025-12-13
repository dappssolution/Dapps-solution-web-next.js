import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dapps Solutions',
  description: 'Read the privacy policy of Dapps Solutions. Learn how we handle your data and protect your privacy in all our AI-powered solutions.',
  keywords: [
    'Privacy Policy',
    'Dapps Solutions',
    'data protection',
    'privacy',
    'AI',
    'web development',
    'app development',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.dappssolutions.com/privacy-policy',
    title: 'Privacy Policy | Dapps Solutions',
    description: 'Read the privacy policy of Dapps Solutions. Learn how we handle your data and protect your privacy in all our AI-powered solutions.',
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
    title: 'Privacy Policy | Dapps Solutions',
    description: 'Read the privacy policy of Dapps Solutions. Learn how we handle your data and protect your privacy in all our AI-powered solutions.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.dappssolutions.com/privacy-policy',
  },
};
