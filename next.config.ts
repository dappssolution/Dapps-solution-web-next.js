import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    
    domains: [
      'images.news9live.com',
      'wallpapercave.com',
      'm.economictimes.com',
       'clipart-library.com',
      'static.vecteezy.com',
      'wallup.net',
      'images.unsplash.com',
      "www.tastingtable.com",
      "d2rdhxfof4qmbb.cloudfront.net",
      "seoimgak.mmtcdn.com",
      "static.vecteezy.com" ,
      "img.veenaworld.com",
      "indiafacts.org",
       "www.clearias.com",
       "assets.traveltriangle.com",
        "i.assetzen.net",
        "www.lordsayurveda.com",
        "miro.medium.com",
        "wallpaperaccess.com",
        "www.globalbusinessculture.com",
        "www.softlabsgroup.com" 
       // 👈 Add this one too
    ],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.resized.co',
      },
      {
        protocol: 'https',
        hostname: 'c.stocksy.com',
      },
      {
        protocol: 'https',
        hostname: 'image.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',
      },
    ],
  },
};

export default nextConfig;
