// src/app/works/worksData.ts
// Internet-available works for the portfolio
// Each work includes title, description, image, category, and route

export type Category = "website" | "app" | "branding" | "social" | "all";
// Category section text for WorkMain (English and Arabic)
export const categorySections = {
  all: {
    en: {
      title: "All Works",
      description: "Explore all our featured projects across web, app, branding, and social media."
    },
    ar: {
      title: "جميع الأعمال",
      description: "تصفح جميع مشاريعنا المميزة في تطوير المواقع والتطبيقات والعلامات التجارية ووسائل التواصل الاجتماعي."
    }
  },
  website: {
    en: {
      title: "Website Projects",
      description: "Modern, responsive websites built for performance and style."
    },
    ar: {
      title: "مشاريع المواقع",
      description: "مواقع حديثة ومتجاوبة مصممة للأداء والأناقة."
    }
  },
  app: {
    en: {
      title: "App Projects",
      description: "Mobile and desktop apps for productivity and engagement."
    },
    ar: {
      title: "مشاريع التطبيقات",
      description: "تطبيقات للهواتف والأجهزة المكتبية لزيادة الإنتاجية والتفاعل."
    }
  },
  branding: {
    en: {
      title: "Branding Projects",
      description: "Distinctive brand identities and visual design solutions."
    },
    ar: {
      title: "مشاريع العلامات التجارية",
      description: "هويات بصرية مميزة وحلول تصميم احترافية."
    }
  },
  social: {
    en: {
      title: "Social Media Projects",
      description: "Creative campaigns and digital marketing for social platforms."
    },
    ar: {
      title: "مشاريع وسائل التواصل الاجتماعي",
      description: "حملات إبداعية وتسويق رقمي لمنصات التواصل الاجتماعي."
    }
  }
};

export interface WorkProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Category;
  route: string;
}

export const worksData: WorkProject[] = [
  // Website Projects
  {
    id: 1,
    title: "Spotify Clone",
    description: "A music streaming web app inspired by Spotify, built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    category: "website",
    route: "spotify-clone",
  },
  {
    id: 2,
    title: "Medium Blog Platform",
    description: "A blogging platform similar to Medium, featuring rich text editing and user profiles.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    category: "website",
    route: "medium-blog",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio site showcasing projects and skills, built with Next.js.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "website",
    route: "portfolio",
  },
  // App Projects
  {
    id: 101,
    title: "Weather App",
    description: "A mobile-friendly weather app using OpenWeatherMap API and React Native.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "app",
    route: "weather-app",
  },
  {
    id: 102,
    title: "Task Manager",
    description: "A productivity app for managing daily tasks, built with Flutter.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    category: "app",
    route: "task-manager",
  },
  // Branding Projects
  {
    id: 201,
    title: "Brand Identity for TechNova",
    description: "Complete branding package for TechNova, including logo, colors, and guidelines.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=600&q=80",
    category: "branding",
    route: "technova-branding",
  },
  {
    id: 202,
    title: "Rebranding for GreenLeaf",
    description: "Logo and visual identity redesign for GreenLeaf organic products.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "branding",
    route: "greenleaf-rebranding",
  },
  // Social Media Projects
  {
    id: 301,
    title: "Instagram Campaign for Foodies",
    description: "Social media campaign for Foodies, including posts, stories, and influencer outreach.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    category: "social",
    route: "foodies-instagram",
  },
  {
    id: 302,
    title: "Facebook Ads for TravelNow",
    description: "Targeted Facebook ad campaign for TravelNow, boosting bookings and engagement.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=600&q=80",
    category: "social",
    route: "travelnow-facebook",
  },
];
