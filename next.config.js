const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "sklc-tinymce-2021.s3.amazonaws.com",
      "img.freepik.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "images.pexels.com",
      "idsb.tmgrup.com.tr",
      "www.tripsavvy.com",
      "www.tourmyindia.com",
      "tourwithrahul.com",
      "www.planetware.com",
      "wallpapercave.com",
      "realhappiness.org",
      "vietnamvisavoa.com",
      "treebo.com",
      "photojaanic.com",
      "www.treebo.com",
      "a.cdn-hotels.com",
      "www.photojaanic.com",
      "globalgrasshopper.com",
      "globalgrasshopper.com",
      "cdn-icons-png.flaticon.com",
      "www.tastingtable.com",
      "d2rdhxfof4qmbb.cloudfront.net",
      "seoimgak.mmtcdn.com",
      "static.vecteezy.com",
      "img.veenaworld.com",
      "indiafacts.org",
      "www.clearias.com",
      "assets.traveltriangle.com",
      "i.assetzen.net",
      "www.lordsayurveda.com",
      "miro.medium.com",
      "wallpaperaccess.com",
      "www.globalbusinessculture.com",
      "www.softlabsgroup.com",
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
