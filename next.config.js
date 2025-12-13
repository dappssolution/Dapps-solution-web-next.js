const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
    remotePatterns: [
      { protocol: "https", hostname: "sklc-tinymce-2021.s3.amazonaws.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "idsb.tmgrup.com.tr" },
      { protocol: "https", hostname: "www.tripsavvy.com" },
      { protocol: "https", hostname: "www.tourmyindia.com" },
      { protocol: "https", hostname: "tourwithrahul.com" },
      { protocol: "https", hostname: "www.planetware.com" },
      { protocol: "https", hostname: "wallpapercave.com" },
      { protocol: "https", hostname: "realhappiness.org" },
      { protocol: "https", hostname: "vietnamvisavoa.com" },
      { protocol: "https", hostname: "treebo.com" },
      { protocol: "https", hostname: "photojaanic.com" },
      { protocol: "https", hostname: "www.treebo.com" },
      { protocol: "https", hostname: "a.cdn-hotels.com" },
      { protocol: "https", hostname: "www.photojaanic.com" },
      { protocol: "https", hostname: "globalgrasshopper.com" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
      { protocol: "https", hostname: "www.tastingtable.com" },
      { protocol: "https", hostname: "d2rdhxfof4qmbb.cloudfront.net" },
      { protocol: "https", hostname: "seoimgak.mmtcdn.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "img.veenaworld.com" },
      { protocol: "https", hostname: "indiafacts.org" },
      { protocol: "https", hostname: "www.clearias.com" },
      { protocol: "https", hostname: "assets.traveltriangle.com" },
      { protocol: "https", hostname: "i.assetzen.net" },
      { protocol: "https", hostname: "www.lordsayurveda.com" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "wallpaperaccess.com" },
      { protocol: "https", hostname: "www.globalbusinessculture.com" },
      { protocol: "https", hostname: "www.softlabsgroup.com" },
      { protocol: "https", hostname: "images.news9live.com" },
      { protocol: "https", hostname: "m.economictimes.com" },
      { protocol: "https", hostname: "clipart-library.com" },
      { protocol: "https", hostname: "wallup.net" },
      { protocol: "https", hostname: "img.resized.co" },
      { protocol: "https", hostname: "c.stocksy.com" },
      { protocol: "https", hostname: "image.freepik.com" },
      { protocol: "https", hostname: "tse1.mm.bing.net" },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
