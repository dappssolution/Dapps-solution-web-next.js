"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {

  // Always initialize to 'en' for SSR safety
  const [language, setLanguageState] = useState<Language>('en');
 

  // On mount, update language from localStorage if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language');
      if (storedLang === 'ar' || storedLang === 'en') {
        setLanguageState(storedLang);
      }
     
    }
  }, []);

  // Update localStorage and DOM whenever language changes (client only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('language', language);
    const mainContent = document.querySelector('main');
    const bodyElement = document.body;
    if (mainContent) {
      mainContent.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
    if (language === 'ar') {
      bodyElement.classList.add('font-arabic');
      bodyElement.style.fontFamily = '"IBM Plex Sans Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    } else {
      bodyElement.classList.remove('font-arabic');
      bodyElement.style.fontFamily = '"Poppins", sans-serif';
    }
  }, [language]);

  // setLanguage wrapper for context consumers
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const translations: Translations = {
  en: {
    // Service Main Banner (custom for ServiceMain)
    "serviceMain.title": "Next-Gen Intelligent Technologies",
    "serviceMain.description": "Elevate your brand with advanced intelligence, smart automation, and modern digital ecosystems. From adaptive AI platforms to efficient business tools, we craft future-ready solutions that accelerate your success.",
    'serviceMain.button': 'Start Your AI Journey',
    'serviceMain.whatsappMessage': "Hello Dapps Solutions,%0AI'm interested in learning more about your AI-powered solutions, intelligent automation systems, and digital transformation services designed to enhance business growth and efficiency.%0APlease share more details.",
    // About Banner
    'aboutBanner.badge': 'Who we are',
    'aboutBanner.title': 'Building the future with <span class="text-[#A43EF9]">innovation</span> and passion.',
    'aboutBanner.button': 'Explore our mission',
    'aboutBanner.team1.alt': 'Team Member 1',
    'aboutBanner.team2.alt': 'Team Member 2',
    'aboutBanner.team.plus': '+',
  // Work Detail Banner Buttons
  'workDetailBanner.downloadCaseStudy': 'Download Case Study',
  'workDetailBanner.letsTalk': `Let's talk`,

    // ...existing keys...
      // Client Review Items
      'clientReview.item1.name': 'Basil Saman',
      'clientReview.item1.role': 'Client',
      'clientReview.item1.quote': 'Innovative solutions with reliable support. Highly recommended.',
      'clientReview.item2.name': 'Fadhil Alim',
      'clientReview.item2.role': 'Client',
      'clientReview.item2.quote': 'Efficient team delivering smart, scalable technology.',
      // Client Review Section
      'clientReview.title': 'AI-Driven Business Transformation',
      'clientReview.description': 'Dapps Solutions empowers businesses with advanced AI technology, intelligent automation, and smart systems that drive exponential growth.',
      'clientReview.cta': 'Explore opportunities',
      'clientReview.rating': '4.9/5 from clients',
      'clientReview.blockquotePrefix': '“',
      'clientReview.blockquoteSuffix': '”',
      'clientReview.blockquoteBy': '— {name}, {role}',
      'clientReview.locations': 'Locations',
      'clientReview.contact': 'Contact',
      'clientReview.phone': 'Phone:',
      'clientReview.uae': 'UAE',
      'clientReview.kerala': 'Kerala, Calicut',
      // Footer Section (additional keys)
  'footer.quickLinks': 'Quick Links',
  'footer.career': 'Career',
  'footer.solutions': 'AI Solutions',
  'footer.email': 'info@dappssolutions.com',
  'footer.phone': 'Phone:',
  'footer.phoneNumber': '+91 99474 00278',
  'footer.locations': 'Locations',
  'footer.uae': 'UAE',
  'footer.kerala': 'Kerala, Calicut',
  // Footer Services Links
  'footer.services':'Services',
  'footer.webDevelopment': 'Web Development',
  'footer.appDevelopment': 'App Development',
  'footer.branding': 'Branding',
  'footer.digitalMarketing': 'Digital Marketing',
  'footer.videoPhotoEditing': 'Video & Photo Editing',
  'footer.aiAgentsAutomation': 'AI Agents & Automation',
    // Services Section
    'services.section.title': 'AI-Driven Services',
    'services.section.header': 'Our major services that drive the Digital Transformation',
    'services.section.viewAll': 'Explore All Services',
    'services.card.learnMore': 'Discover AI Solutions',
    'services.service1.title': 'AI-Powered App Development',
    'services.service1.desc': 'Build intelligent mobile and cross-platform applications with AI integration, machine learning capabilities, and smart automation features.',
    'services.service2.title': 'AI-Enhanced Web Development',
    'services.service2.desc': 'Create smart, responsive websites with AI-driven user experiences, intelligent content management, and automated optimization.',
    'services.service3.title': 'Smart Branding Solutions',
    'services.service3.desc': 'Develop AI-assisted brand strategies with data-driven insights, automated design systems, and intelligent brand monitoring.',
    'services.service4.title': 'AI-Powered Digital Marketing',
    'services.service4.desc': 'Leverage AI for predictive analytics, automated campaign optimization, and intelligent customer targeting across all channels.',
    'services.service5.title': 'Intelligent ERP & CRM Systems',
    'services.service5.desc': 'Deploy AI-enhanced business management systems with predictive analytics, automated workflows, and intelligent customer insights.',
    'services.service6.title': 'Advanced AI Agents & Automation',
    'services.service6.desc': 'Implement sophisticated AI agents, intelligent chatbots, and automated workflows that learn and adapt to your business needs.',
    // Hero Section
    "hero.tagline": "Intelligent Systems • Automated Workflows • Future Solutions",
    "hero.headline": "Intelligence-Driven Success",
    "hero.forYourBusiness": "For Your Enterprise",
    "hero.cta": "Begin Your Transformation",
    "hero.shortTagline":
      "Empower your enterprise with intelligent systems and advanced automated workflows."
  ,
      // Contact Form
      'contact.heading': 'Start your journey to profit',
      'contact.subheading': "Let's work together to grow your idea into a market success.",
      'contact.name': 'Name*',
      'contact.namePlaceholder': 'Your name',
      'contact.email': 'Email*',
      'contact.emailPlaceholder': 'your@email.com',
      'contact.phone': 'Phone number*',
      'contact.phonePlaceholder': '+1 (555) 000-0000',
      'contact.requirements': 'Tell us about your requirements',
      'contact.requirementsPlaceholder': 'Describe your project, goals, and any specific requirements...',
      'contact.send': 'Send a message',
      'contact.sent': 'Message sent!',
      'contact.testimonialTitle': 'Our client says',
      'contact.testimonialText': '“The people working in Aufait are not just about doing their job and delivering, they are unique in their ability to communicate well, build rapport and have continuously great engagement. They have a great company culture.”',
      'contact.testimonialAuthor': 'Director',
      'contact.testimonialCompany': 'Contracting PLUS',
      'contact.mobileTestimonial': 'Join hundreds of satisfied clients who have transformed their business with our services.',
      // WhatsApp message
      'contact.whatsapp.intro': 'New Contact Form Submission:',
      'contact.whatsapp.name': 'Name',
      'contact.whatsapp.email': 'Email',
      'contact.whatsapp.phone': 'Phone',
      'contact.whatsapp.requirements': 'Requirements',
    
   
   
 
      
      
      
      // Works Section
     
      'works.categories.website': 'Website Development',
      'works.categories.app': 'App Development',
      'works.categories.branding': 'Branding',
      'works.categories.social': 'Social Media',
      'works.categories.all': 'All',

      // Work Detail Challenge 
      'workDetailChallenge.title': 'Challenge',
      
      // Works Section Project 3
      'works.title': 'Our Works',
      'worksSection.project3.title': 'Engineered and Launched Robust Full-Stack Web Platforms',
      'worksSection.project3.category': 'Full-Stack Web Development',
      
      // Clients Section
      'clients.title': 'Clients',
      'clients.subtitle': 'We collaborate with brands across industries — from startups to global leaders — to craft experiences that resonate and endure.',
      'clients.viewAll': 'View all works',
      
      // Process Section
      'process.title': 'Our Process',
      'process.step1.title': 'Discover',
      'process.step1.description': 'We start with deep research to understand your audience, competitors, and goals.',
      'process.step2.title': 'Design',
      'process.step2.description': 'We craft systems — not just logos — that scale across all touchpoints.',
      'process.step3.title': 'Deliver',
      'process.step3.description': 'Every file, asset, and guide you need. Ready to launch and grow.',
      
      // Results Section
      'results.title': 'The Result',
      'results.description': 'A cohesive, elevated identity that helped increase brand recall. The new site saw a 28% lift in conversion within the first quarter post-launch.',
      'results.contact': 'Contact Us',
      
      // Header Navigation
      'header.about': 'About Us',
      'header.services': 'Services',
      'header.works': 'Works',
      'header.career': 'Career',
      'header.contact': 'Contact Us',
      'header.getStarted': 'Get Started',
      'header.connectUs': 'Connect ',
      
      
      
         
      // Footer Navigation
      'footer.tagline': 'Delivering AI-Powered Innovation and Intelligent Solutions to Businesses Worldwide — With Presence in India, UAE & Qatar',
      'footer.pages': 'Pages',
     
      'footer.home': 'Home',
      'footer.aboutUs': 'About us',
      'footer.works': 'Works',
      'footer.contactUs': 'Contact Us',
      'footer.contactInfo': 'Contact Us',
      'footer.copyright': '© {year} DApps Solutions. All rights reserved.',
      'footer.privacyPolicy': 'Privacy Policy',
      'footer.termsOfService': 'Terms of Service',
      'footer.cookiePolicy': 'Cookie Policy',
      
      // Team Description
      'team.contactUs': 'Contact Us',
      
      
      // Team Description
      'team.description.text': "We're a cross-disciplinary team of strategists, designers, developers, and storytellers. What brings us together is a shared belief",
      
    // About Boxes
'about.boxes.brands': 'Our Brands',
'about.boxes.projects': 'Projects Done',
'about.boxes.countries': 'Countries Served',
'about.boxes.scaled': 'Industries',
'about.boxes.revenue': 'Revenue',
'about.boxes.clients': 'Clients',

      
      // Approach Section
      'approach.badge': 'Approach',
      'approach.title': 'What Sets us apart',
      'approach.innovation': 'Innovation',
      'approach.quality': 'Quality Focused',
      'approach.results': 'Results-driven',
      'approach.skilled': 'Skilled Team',
      'approach.customer': 'Customer-Centric',
      'approach.agile': 'Agile Process',
      'approach.transparent': 'Transparent Communication',
      'approach.timely': 'Timely Delivery',
      'approach.technology': 'Cutting-edge Technology',
      'approach.data': 'Data-Driven Decisions',
      'approach.security': 'Security-First Approach',
      'approach.sustainability': 'Sustainability',
      
      // Our Team Section
      'team.badge': 'About',
      'team.title': 'Our Core Team',
      
      // Client Reviews
      'reviews.badge': 'Client Reviews',
      'reviews.cta.title': 'Lets work with Us',
      'reviews.cta.description': 'Discover how we turn ideas into impact. From App development to Web Design, SEO, and Digital Marketing, our work speaks for itself. Explore our latest projects on social media and see what sets us apart.',
      'reviews.cta.button': 'Connect Us',
      
      // Services in Reviews
      'reviews.services.branding': 'Branding',
      'reviews.services.app': 'App Development',
      'reviews.services.social': 'Social Media',
      'reviews.services.website': 'Website Design',
      'reviews.services.uxui': 'UX/UI Design',
      'reviews.services.marketing': 'Digital Marketing',
      
      // Service Main Banner
      'service.main.title': 'AI-Powered Digital Transformation',
      'service.main.subtitle': 'Discover intelligent solutions designed to revolutionize your business with AI technology, automation, and smart systems that drive exponential growth.',
      'service.main.button': 'Start Your AI Journey',
      
      // Service Content
      'service.content.text': 'From AI strategy to intelligent execution — we transform businesses through artificial intelligence, automation, and smart technology.',
      'service.content.highlight.strategy': 'AI strategy',
      'service.content.highlight.execution': 'intelligent execution',
      'service.content.highlight.clarity': 'AI insights',
      'service.content.highlight.creativity': 'smart innovation',
      'service.content.highlight.design': 'intelligent design',
      'service.content.highlight.growth': 'exponential growth',
      'service.content.highlight.businesses': 'smart businesses',
      'service.content.highlight.impact': 'AI impact',
      
      // Bottom Bar
      'bottom.bar.title': 'Transform Your Business with AI',
      'bottom.bar.description': 'Discover how we revolutionize businesses with AI technology. From intelligent app development to AI-powered web solutions, smart automation, and predictive analytics — our AI-driven work delivers measurable results.',
      'bottom.bar.button': 'Start Your AI Journey',
      'work.banner.title': "Work that speaks louder than words.",
      'works.subtitle': "Discover our latest projects and creative solutions that make an impact.",
    // About Section
    'aboutSection.badge': 'About',
    'aboutSection.headline': 'We prioritize open communication and reliability, keeping you informed and valued every step.',
    'aboutSection.description': 'At Leniq, we believe that creativity has the power to transform brands and connect them with their audiences in meaningful ways. Based in the heart of innovation, our agency specializes in crafting digital experiences that resonate and inspire.',
    'aboutSection.button': 'About Us',
    },
    
  ar: {

     // Work Detail Challenge
     'workDetailChallenge.title': 'تحدي',

  // Service Main Banner (custom for ServiceMain)
   "serviceMain.title": "تقنيات الجيل الذكي",
    "serviceMain.description": "ارفع مستوى عملك بتقنيات ذكية متقدمة وأتمتة فعّالة وأنظمة رقمية حديثة. من منصات الذكاء الاصطناعي التفاعلية إلى أدوات الأعمال المبتكرة، نطوّر حلولًا مستقبلية تعزز نجاحك.",
  'serviceMain.button': 'ابدأ رحلتك مع الذكاء الاصطناعي',
  'serviceMain.whatsappMessage': 'مرحبًا Dapps Solutions،%0Aأرغب في معرفة المزيد عن حلولكم المدعومة بالذكاء الاصطناعي وأنظمة الأتمتة الذكية وخدمات التحول الرقمي المصممة لتعزيز نمو وكفاءة الأعمال.%0Aيرجى مشاركة المزيد من التفاصيل.',
  // About Banner (Arabic)
  'aboutBanner.badge': 'من نحن',
  'aboutBanner.title': 'نبني المستقبل بـ <span class="text-[#A43EF9]">الابتكار</span> والشغف.',
  'aboutBanner.button': 'استكشف مهمتنا',
  'aboutBanner.team1.alt': 'عضو الفريق 1',
  'aboutBanner.team2.alt': 'عضو الفريق 2',
  'aboutBanner.team.plus': '+',
  // ...existing keys...
      // Client Review Items (Arabic)
      'clientReview.item1.name': 'باسل سمان',
      'clientReview.item1.role': 'عميل',
      'clientReview.item1.quote': 'حلول مبتكرة ودعم موثوق. أنصح بهم بشدة.',
      'clientReview.item2.name': 'فاضل عليم',
      'clientReview.item2.role': 'عميل',
      'clientReview.item2.quote': 'فريق فعال يقدم تقنيات ذكية وقابلة للتطوير.',
      // Client Review Section (RTL)
      'clientReview.title': 'التحول التجاري المدعوم بالذكاء الاصطناعي',
      'clientReview.description': 'تمكّن Dapps Solutions الشركات من خلال تقنية الذكاء الاصطناعي المتطورة والأتمتة الذكية والأنظمة الذكية التي تدفع النمو الأسي.',
      'clientReview.cta': 'استكشف الفرص',
      'clientReview.rating': '٤.٩/٥ من العملاء',
      'clientReview.blockquotePrefix': '“',
      'clientReview.blockquoteSuffix': '”',
      'clientReview.blockquoteBy': '— {name}، {role}',
      'clientReview.locations': 'المواقع',
      'clientReview.contact': 'اتصل',
      'clientReview.phone': 'الهاتف:',
      'clientReview.uae': 'الإمارات',
      'clientReview.kerala': 'كيرالا، كاليكوت',
      // Footer Section (additional keys)
  'footer.quickLinks': 'روابط سريعة',
  'footer.career': 'الوظائف',
  'footer.solutions': 'حلول الذكاء الاصطناعي',
  'footer.email': 'info@dappssolutions.com',
  'footer.phone': 'الهاتف:',
  'footer.phoneNumber': '+٩١ ٩٩٤٧٤ ٠٠٢٧٨',
  'footer.locations': 'المواقع',
  'footer.uae': 'الإمارات',
  'footer.kerala': 'كيرالا، كاليكوت',
  // Footer Services Links (Arabic)
  'footer.services': 'خدمات الذكاء الاصطناعي',
  'footer.webDevelopment': 'تطوير المواقع بالذكاء الاصطناعي',
  'footer.appDevelopment': 'تطوير التطبيقات بالذكاء الاصطناعي',
  'footer.branding': 'العلامة التجارية الذكية',
  'footer.digitalMarketing': 'التسويق الرقمي بالذكاء الاصطناعي',
  'footer.videoPhotoEditing': 'تحرير الفيديو والصور',
  'footer.aiAgentsAutomation': 'وكلاء الذكاء الاصطناعي والأتمتة',
        // Work Detail Banner Buttons
  'workDetailBanner.downloadCaseStudy': 'تحميل دراسة الحالة',
  'workDetailBanner.letsTalk': 'تحدث معنا',
    // Services Section (Arabic)
    'services.section.title': 'الخدمات المدعومة بالذكاء الاصطناعي',
    'services.section.header': 'خدماتنا الرئيسية التي تقود التحول الرقمي',
    'services.section.viewAll': 'استكشف جميع الخدمات',
    'services.card.learnMore': 'اكتشف حلول الذكاء الاصطناعي',
    'services.service1.title': 'تطوير التطبيقات المدعوم بالذكاء الاصطناعي',
    'services.service1.desc': 'بناء تطبيقات جوال ومتعددة المنصات ذكية مع تكامل الذكاء الاصطناعي وقدرات التعلم الآلي وميزات الأتمتة الذكية.',
    'services.service2.title': 'تطوير المواقع المحسّن بالذكاء الاصطناعي',
    'services.service2.desc': 'إنشاء مواقع ذكية ومتجاوبة مع تجارب مستخدم مدعومة بالذكاء الاصطناعي وإدارة محتوى ذكية وتحسين مؤتمت.',
    'services.service3.title': 'حلول العلامة التجارية الذكية',
    'services.service3.desc': 'تطوير استراتيجيات علامة تجارية مدعومة بالذكاء الاصطناعي مع رؤى قائمة على البيانات وأنظمة تصميم مؤتمتة ومراقبة ذكية للعلامة التجارية.',
    'services.service4.title': 'التسويق الرقمي المدعوم بالذكاء الاصطناعي',
    'services.service4.desc': 'استفد من الذكاء الاصطناعي للتحليلات التنبؤية وتحسين الحملات المؤتمت والاستهداف الذكي للعملاء عبر جميع القنوات.',
    'services.service5.title': 'أنظمة ERP و CRM الذكية',
    'services.service5.desc': 'نشر أنظمة إدارة أعمال محسّنة بالذكاء الاصطناعي مع تحليلات تنبؤية وسير عمل مؤتمت ورؤى ذكية للعملاء.',
    'services.service6.title': 'وكلاء الذكاء الاصطناعي والأتمتة المتقدمة',
    'services.service6.desc': 'تنفيذ وكلاء ذكاء اصطناعي متطورين وروبوتات دردشة ذكية وسير عمل مؤتمت يتعلم ويتكيف مع احتياجات عملك.',
  // Hero Section (Arabic)
   "hero.tagline": "الأنظمة الذكية • تدفقات العمل الآلية • حلول المستقبل",
    "hero.headline": "نجاح مدعوم بالذكاء",
    "hero.forYourBusiness": "لأجل مؤسستك",
    "hero.cta": "ابدأ رحلة التحول",
    "hero.shortTagline":
      "عزّز مؤسستك بأنظمة ذكية وتدفقات عمل آلية متطورة.",
      // Contact Form (Arabic)
      'work.banner.title': "عمل يتحدث بصوت أعلى من الكلمات.",
      'work.subtitle': "اكتشف أحدث مشاريعنا وحلولنا الإبداعية.",
      'contact.heading': 'ابدأ رحلتك نحو الربح',
      'contact.subheading': 'دعنا نعمل معًا لننمي فكرتك إلى نجاح في السوق.',
      'contact.name': 'الاسم*',
      'contact.namePlaceholder': 'اسمك',
      'contact.email': 'البريد الإلكتروني*',
      'contact.emailPlaceholder': 'you@email.com',
      'contact.phone': 'رقم الهاتف*',
      'contact.phonePlaceholder': '+٩١ ٩٩٤٧٤٠٠٢٧٨',
      'contact.requirements': 'أخبرنا عن متطلباتك',
      'contact.requirementsPlaceholder': 'صف مشروعك وأهدافك وأي متطلبات محددة...',
      'contact.send': 'إرسال رسالة',
      'contact.sent': 'تم إرسال الرسالة!',
      'contact.testimonialTitle': 'رأي عملائنا',
      'contact.testimonialText': '"الأشخاص الذين يعملون في Aufait ليسوا فقط يؤدون عملهم ويسلمون، بل هم مميزون في قدرتهم على التواصل الجيد وبناء العلاقات والحفاظ على تفاعل رائع باستمرار. لديهم ثقافة شركة رائعة."',
      'contact.testimonialAuthor': 'المدير',
      'contact.testimonialCompany': 'كونتراكتينج بلس',
      'contact.mobileTestimonial': 'انضم إلى مئات العملاء الراضين الذين حولوا أعمالهم بخدماتنا.',
      // WhatsApp message (Arabic)
      'contact.whatsapp.intro': 'طلب جديد من نموذج التواصل:',
      'contact.whatsapp.name': 'الاسم',
      'contact.whatsapp.email': 'البريد الإلكتروني',
      'contact.whatsapp.phone': 'الهاتف',
      'contact.whatsapp.requirements': 'المتطلبات',
    
    // Rafih Banner Section (Arabic)
    'rafih.banner.subheading': 'الهند بعيون هندي',
    'rafih.banner.heading': "<span class='text-gray-500'>الدليل العربي الشامل</span> إلى قلب وتراث الهند",
    'rafih.banner.description': "اكتشف \"الهند في كتاب واحد – بعيني\": الدليل الرقمي الوحيد الذي يكشف لك تاريخ الهند، ثقافتها، طعامها، الصحة، أسرار السفر والمزيد — كل ذلك باللغة العربية، بقلم هندي يعرف ما تحتاج معرفته.<br /><br />سواء كنت تخطط لمغامرة عائلية، أو تبحث عن رعاية طبية، أو مطاعم حلال، أو تحلم بجمال كيرالا، هذا الكتاب يجيب عن أسئلتك الحقيقية بنصائح عملية، وقصص شخصية، وخرائط وقوائم حصرية.<br /><br />ابدأ رحلتك الهندية بثقة ووضوح ومعرفة من الداخل—مصمم خصيصًا للمسافرين العرب، بقلم محمد رفيع.",
  // Packages Section (Arabic)
   'packages.heading1': 'الهند',
'packages.heading2': 'بين يديك',
  'packages.intro': '"الهند في كتاب واحد – بعيني" يجلب لك كل الهند — بالعربية، بقلم هندي يعرف ما تحتاج معرفته. سواء كنت تبحث عن الثقافة، المساعدة الطبية، الطعام الحلال، أو المغامرة الأصيلة، باقاتنا الرقمية وأدلتنا تفتح الهند لك ولعائلتك.',
  'packages.button': 'حمّل دليلك الآن',
  'packages.item1.title': 'الهند للمسافرين العرب',
  'packages.item1.desc': 'اكتشف تاريخ الهند العريق من الحضارات القديمة إلى المعالم الحديثة، مصمم خصيصًا للمسافرين العرب.',
  'packages.item2.title': 'دليل كيرالا السريع',
  'packages.item2.desc': 'قصص حقيقية ورحلات شخصية: تعرف على الهند بعيون السكان المحليين والزوار العرب.',
  'packages.item3.title': 'العافية والسياحة العلاجية',
  'packages.item3.desc': 'انغمس في ثقافة الهند النابضة — التقاليد والمهرجانات والحياة اليومية مشروحة بالعربية.',
  'packages.item4.title': 'دليل الطعام الحلال والمطاعم',
  'packages.item4.desc': 'دليلك العملي للسفر: نصائح مهمة، أماكن لا تُفوّت، وإرشادات من الداخل لرحلة سلسة.',
  'packages.item5.title': 'المهرجانات الهندية ومرح العائلة',
  'packages.item5.desc': 'الأعمال في الهند: الفرص، آداب التعامل، وكيفية النجاح كرائد أعمال أو مستثمر عربي.',
  'packages.item6.title': 'إضافات التخطيط العملي',
  'packages.item6.desc': 'السياحة العلاجية والصحة: مستشفيات موثوقة، الأيورفيدا، ونصائح صحية للعائلات العربية في الهند.',
      // Location Section (Cards & Headings)
      'location.card1.heading': 'اكتشف التراث الهندي الخفي',
      'location.card1.desc': 'اكتشف القصص والتاريخ الإسلامي وأماكن لا يعرفها إلا السكان المحليون.',
      'location.card2.heading': 'كيرالا: حيث تلتقي الهند بالعالم العربي',
      'location.card2.desc': 'عِش الثقافة والطبيعة والروابط العميقة مع العالم العربي.',
      'location.card3.heading': 'خطط بذكاء – وسافر بعيدًا',
      'location.card3.desc': 'احصل على نصائح من الداخل حول الطعام والعيادات والصحة ورحلات آمنة.',
      'location.card4.heading': 'اصنع ذكريات في كل فصل',
      'location.card4.desc': 'من التقاليد المقدسة إلى بوليوود، عِش كل شيء — الدهشة، الفرح، والتعلم.',
      'location.sectionHeading.0': 'الهند',
      'location.sectionHeading.1': 'بعيني:',
      'location.sectionHeading.2': 'الثقافة،',
      'location.sectionHeading.3': 'الأسرار،',
      'location.sectionHeading.4': 'الإلهام',
      // AboutMe Section (Arabic)
    // About Section (Arabic)
    'aboutSection.badge': 'حول',
    'aboutSection.headline': 'نحن نولي أهمية للتواصل المفتوح والموثوقية، ونبقيك على اطلاع وتقدير في كل خطوة.',
    'aboutSection.description': 'في Leniq، نؤمن بأن الإبداع لديه القدرة على تحويل العلامات التجارية وربطها بجمهورها بطرق ذات مغزى. مقرنا في قلب الابتكار، تتخصص وكالتنا في ابتكار تجارب رقمية تلهم وتترك أثراً.',
    'aboutSection.button': 'حولنا',
      'aboutMe.heading.ar': 'من أنا',
'aboutMe.label.ar': 'الهند في كتاب واحد – بعيني',
'aboutMe.para1.ar': `السلام عليكم ورحمة الله وبركاته،\n\nأنا محمد رافع، أول صانع محتوى هندي بالعربية وابن فخور من كيرالا. منذ سنوات كرّست جهدي لبناء جسر بين الهند والعالم العربي، عبر مشاركة القصص والتقاليد والواقع اليومي لهذا البلد المدهش – وكل ذلك بلغة أحببتها: العربية.\n\nبدأت رحلتي من قلب كيرالا، بين ثقافة عريقة وجمال طبيعي لا ينتهي. واستلهمت من الروابط التاريخية العميقة بين الهند والخليج، فجعلت مهمتي الإجابة عن الأسئلة الحقيقية التي يطرحها إخوتي العرب: كيف هي الهند فعلًا؟ ماذا نأكل؟ أين نسافر؟ كيف نجد الشفاء؟ وكيف نبدأ أعمالنا؟\n\nكل رسالة وكل تعليق من جمهوري كان مصدر إلهام لي. ومن هنا وضعت قلبي في مشروع "الهند في كتاب واحد – بعيني": مرجع رقمي شامل يتجاوز السفر ليجيب عن أسئلتكم حول التاريخ، الطعام، الصحة، السياحة العلاجية، الرحلات العائلية، الأعمال، وأسرار موطني كيرالا.`,
'aboutMe.para2.ar': `وبحكم أنني عشت وتعلمت ونشأت بين الهند والخليج، فأنا أعرف تمامًا آمال ومخاوف المسافرين العرب: الطعام الحلال، التجارب الأصيلة، المستشفيات الموثوقة، النصائح الصادقة، وحاجز اللغة. لذلك يغطي كتابي كل ذلك بوضوح، مع قوائم عملية، وأدلة فيديو، ونصائح عائلية.\n\nرؤيتي بسيطة: أن أجعل الهند مرحبة وآمنة ولا تُنسى لكل مسافر وعائلة عربية.`,
'aboutMe.para3.ar': `أدعوك للانضمام إلي في هذه الرحلة، لترى الهند بعيني، وتحول رحلتك الحلم إلى حقيقة. سواء أردت الاسترخاء في مياه كيرالا، أو البحث عن الشفاء في أفضل المستشفيات، أو تجربة توابل جديدة في دلهي، أو ببساطة فهم المهرجانات والحياة العائلية الهندية – ستجد كل ذلك هنا، بمحبة ووضوح.\n\nالهند في كتاب واحد – جسرُك إلى الهند الحقيقية، مكتوب للعرب، بقلم هندي يهتم.\n\nمعكم محمد رفيع – الهند كما لم ترها من قبل`,

      'hero.title.part1': 'نحن نبني',
      'hero.title.part2': 'علامات تجارية جريئة',
      'hero.title.part3': 'و',
      'hero.title.part4': 'تجارب رقمية',
      'hero.subtitle': 'استراتيجية، هوية، وتصميم — متطور.',
      'hero.letsTalk': 'تحدث معنا',
      
  // Rafih SectionTwo (Arabic)
  'rafih.sectionTwo.heading': 'اكتشف كل جوانب الهند — التاريخ، الطعام، الشفاء، كيرالا والمزيد — في كتاب رقمي عربي واحد بقلم محمد رفيع.',
  'rafih.sectionTwo.button': 'حمّل كتاب الهند في كتاب واحد الآن!',
  'rafih.sectionTwo.howTo': 'كيفية تحميل الكتاب الإلكتروني العربي',
  'rafih.sectionTwo.step1': 'اضغط زر التحميل بالأسفل لبدء الطلب.',
  'rafih.sectionTwo.step2': 'أكمل نموذج الدفع الآمن وأدخل بياناتك.',
  'rafih.sectionTwo.step3': 'بعد الدفع، ستحصل فوراً على دليلك العربي كملف رقمي.',
  'rafih.sectionTwo.stepTitle1': 'ابدأ طلبك',
  'rafih.sectionTwo.stepTitle2': 'دفع آمن',
  'rafih.sectionTwo.stepTitle3': 'استلم دليلك فوراً',

  // About Section
      'about.title': 'نحن نبني علامات تجارية تتحرك بهدف',
      'about.subtitle': 'براندبيك هي وكالة إبداعية تصنع العلامات التجارية الحديثة والتجارب الرقمية واستراتيجيات النمو للطموحين.',
      'about.description': 'من الشركات الناشئة إلى الشركات العالمية، نصمم قصصًا تتصل وتدوم.',
      'about.button': 'من نحن',
      'about.stats.projects': 'العلامات التجارية',
      'about.stats.countries': 'الدول',
      'about.stats.clients': 'القطاعات',
      
      // Services Section
      'services.title': 'خدماتنا',
      'services.subtitle': 'نقدم حلولاً شاملة لمساعدة علامتك التجارية على الازدهار في العصر الرقمي.',
      'services.web.title': 'تطوير المواقع',
      'services.web.description': 'تصاميم مواقع فريدة وعالية الأداء مناسبة لجذب عملائك.',
      'services.app.title': 'تطوير التطبيقات',
      'services.app.description': 'تطبيقات جوال عالية الجودة مع واجهة مستخدم لتحويل الأفكار إلى أعمال.',
      'services.branding.title': 'العلامة التجارية',
      'services.branding.description': 'نحن نجعل علامتك التجارية تبرز في العالم الرقمي.',
      'services.digital.title': 'التسويق الرقمي',
      'services.digital.description': 'حلول متميزة لتعزيز وجودك في العالم الحديث.',
      'services.social.title': 'وسائل التواصل الاجتماعي',
      'services.social.description': 'تعظيم وصولك من خلال حملاتنا الإعلانية المتخصصة وتوليد العملاء المحتملين.',
      'services.advertising.title': 'الإعلان',
      'services.advertising.description': 'تعظيم وصولك من خلال حملات إعلانية مستهدفة.',
      
      // Works Section
      'works.title': 'أعمالنا',
      'works.subtitle': 'اكتشف أحدث مشاريعنا وحلولنا الإبداعية.',
      'works.categories.website': 'تطوير المواقع',
      'works.categories.app': 'تطوير التطبيقات',
      'works.categories.branding': 'العلامة التجارية',
      'works.categories.social': 'وسائل التواصل الاجتماعي',
      'works.categories.all': 'الكل',
      
      // Works Section Project 3
      'worksSection.project3.title': 'هندسة وإطلاق منصات ويب متكاملة قوية',
      'worksSection.project3.category': 'تطوير الويب المتكامل',
      
      // Clients Section
      'clients.title': 'العملاء',
      'clients.subtitle': 'نحن نتعاون مع العلامات التجارية عبر الصناعات — من الشركات الناشئة إلى القادة العالميين — لتصميم تجارب تتردد صدى وتدوم.',
      'clients.viewAll': 'عرض جميع الأعمال',
      
      // Process Section
      'process.title': 'عملنا',
      'process.step1.title': 'اكتشاف',
      'process.step1.description': 'نبدأ بأبحاث عميقة لفهم جمهورك ومنافسيك وأهدافك.',
      'process.step2.title': 'تصميم',
      'process.step2.description': 'نحن نصمم أنظمة — وليس مجرد شعارات — تتوسع عبر جميع نقاط الاتصال.',
      'process.step3.title': 'تسليم',
      'process.step3.description': 'كل الملفات والأصول والأدلة التي تحتاجها. جاهز للإطلاق والنمو.',
      
      // Results Section
      'results.title': 'النتيجة',
      'results.description': 'هوية متماسكة ومتطورة ساعدت في زيادة تذكر العلامة التجارية. شهد الموقع الجديد زيادة بنسبة 28٪ في التحويل خلال الربع الأول بعد الإطلاق.',
      'results.contact': 'اتصل بنا',
      
      // Header Navigation
      'header.about': 'من نحن',
      'header.services': 'خدماتنا',
      'header.works': 'أعمالنا',
      'header.career': 'وظائف',
      'header.contact': 'اتصل بنا',
      'header.getStarted': 'ابدأ الآن',
      'header.connectUs': 'تواصل معنا',
      
     
      
      
      // Footer Navigation
      'footer.tagline': 'نقدّم الابتكار المدعوم بالذكاء الاصطناعي والحلول الذكية للأعمال حول العالم — مع تواجد في الهند والإمارات وقطر',
      'footer.pages': 'الصفحات',
      'footer.brandbik' : 'براندبيك LLP',
      'footer.home': 'الرئيسية',
      'footer.aboutUs': 'من نحن',
      'footer.works': 'أعمالنا',
      'footer.contactUs': 'اتصل بنا',
      'footer.contactInfo': 'معلومات الاتصال',
      'footer.copyright': '© {year} براندبيك. جميع الحقوق محفوظة.',
      'footer.privacyPolicy': 'سياسة الخصوصية',
      'footer.termsOfService': 'شروط الخدمة',
      'footer.cookiePolicy': 'سياسة ملفات تعريف الارتباط',
      
      // Team Description
      'team.contactUs': 'اتصل بنا',
      
      // About Banner
      'about.banner.badge': 'من نحن',
      'about.banner.title': 'نحن نبني علامات تجارية تتحرك بهدف.',
      'about.banner.subtitle1': 'تتخصص براندبيك في بناء العلامات التجارية المؤثرة والتجارب الرقمية المبتكرة وحلول النمو الاستراتيجية للشركات المتقدمة.',
      'about.banner.subtitle2': 'سواء كنت شركة ناشئة ناشئة أو مؤسسة عالمية راسخة، نصمم قصصًا مقنعة وروابط دائمة تدفع النجاح.',
      'about.banner.gallery.title': 'فريقنا في العمل',
      
      // Team Description
      'team.description.text': 'نحن فريق متعدد التخصصات من الاستراتيجيين والمصممين والمطورين ورواة القصص. ما يجمعنا هو إيمان مشترك',
      
      // About Boxes
      'about.boxes.brands': 'العلامات التجارية التي نعمل معها',
      'about.boxes.projects': 'المشاريع المكتملة',
      'about.boxes.countries': 'البلدان التي نعمل معها',
      'about.boxes.scaled': 'القطاعات التي قمنا بتمكينها',
      'about.boxes.revenue': 'الإيرادات المحققة',
      'about.boxes.clients': 'العملاء السعداء',
      
      // Approach Section
      'approach.badge': 'النهج',
      'approach.title': 'ما يميزنا',
      'approach.innovation': 'الابتكار',
      'approach.quality': 'التركيز على الجودة',
      'approach.results': 'التركيز على النتائج',
      'approach.skilled': 'فريق ماهر',
      'approach.customer': 'التركيز على العملاء',
      'approach.agile': 'عملية رشيقة',
      'approach.transparent': 'تواصل شفاف',
      'approach.timely': 'تسليم في الوقت المحدد',
      'approach.technology': 'تقنية متطورة',
      'approach.data': 'قرارات مدعومة بالبيانات',
      'approach.security': 'نهج الأمان أولاً',
      'approach.sustainability': 'الاستدامة',
      
      // Our Team Section
      'team.badge': 'من نحن',
      'team.title': 'فريقنا الأساسي',
      
      // Client Reviews
      'reviews.badge': 'آراء العملاء',
      'reviews.cta.title': 'دعنا نعمل معاً',
      'reviews.cta.description': 'اكتشف كيف نحول الأفكار إلى تأثير. من تطوير التطبيقات إلى تصميم المواقع وتحسين محركات البحث والتسويق الرقمي، عملنا يتحدث عن نفسه. استكشف أحدث مشاريعنا على وسائل التواصل الاجتماعي وانظر ما يميزنا.',
      'reviews.cta.button': 'تواصل معنا',
      
      // Services in Reviews
      'reviews.services.branding': 'العلامة التجارية',
      'reviews.services.app': 'تطوير التطبيقات',
      'reviews.services.social': 'وسائل التواصل الاجتماعي',
      'reviews.services.website': 'تصميم المواقع',
      'reviews.services.uxui': 'تصميم تجربة المستخدم',
      'reviews.services.marketing': 'التسويق الرقمي',
      
      // Service Main Banner
      'service.main.title': 'التحول الرقمي المدعوم بالذكاء الاصطناعي',
      'service.main.subtitle': 'اكتشف الحلول الذكية المصممة لإحداث ثورة في عملك بتقنية الذكاء الاصطناعي والأتمتة والأنظمة الذكية التي تدفع النمو الأسي.',
      'service.main.button': 'ابدأ رحلتك مع الذكاء الاصطناعي',
      
      // Service Content
      'service.content.text': 'من استراتيجية الذكاء الاصطناعي إلى التنفيذ الذكي — نحوّل الشركات من خلال الذكاء الاصطناعي والأتمتة والتقنية الذكية.',
      'service.content.highlight.strategy': 'استراتيجية الذكاء الاصطناعي',
      'service.content.highlight.execution': 'التنفيذ الذكي',
      'service.content.highlight.clarity': 'رؤى الذكاء الاصطناعي',
      'service.content.highlight.creativity': 'الابتكار الذكي',
      'service.content.highlight.design': 'التصميم الذكي',
      'service.content.highlight.growth': 'النمو الأسي',
      'service.content.highlight.businesses': 'الأعمال الذكية',
      'service.content.highlight.impact': 'تأثير الذكاء الاصطناعي',
      
      // Bottom Bar
      'bottom.bar.title': 'حوّل عملك بالذكاء الاصطناعي',
      'bottom.bar.description': 'اكتشف كيف نحدث ثورة في الأعمال بتقنية الذكاء الاصطناعي. من تطوير التطبيقات الذكية إلى حلول الويب المدعومة بالذكاء الاصطناعي والأتمتة الذكية والتحليلات التنبؤية — عملنا المدعوم بالذكاء الاصطناعي يحقق نتائج قابلة للقياس.',
      'bottom.bar.button': 'ابدأ رحلتك مع الذكاء الاصطناعي',
      
      // Service Banners
      'service.banner.web.title': 'تطوير المواقع',
      'service.banner.web.subtitle': 'نحن ملتزمون بتقديم حلول ويب استثنائية تحقق النتائج.',
      'service.banner.web.button': 'تحدث معنا',
      
      'service.banner.app.title': 'تطوير التطبيقات',
      'service.banner.app.subtitle': 'نحن ملتزمون بتقديم حلول جوال استثنائية تحقق النتائج.',
      'service.banner.app.button': 'تحدث معنا',
      
      'service.banner.branding.title': 'استراتيجية العلامة التجارية',
      'service.banner.branding.subtitle': 'نحن ملتزمون بتقديم حلول علامة تجارية استثنائية تحقق النتائج.',
      'service.banner.branding.button': 'تحدث معنا',
      
      'service.banner.digital.title': 'التسويق الرقمي',
      'service.banner.digital.subtitle': 'نحن ملتزمون بتقديم حلول تسويق رقمي استثنائية تحقق النتائج.',
      'service.banner.digital.button': 'تحدث معنا',
      
      'service.banner.social.title': 'إدارة وسائل التواصل الاجتماعي',
      'service.banner.social.subtitle': 'نحن ملتزمون بتقديم حلول وسائل التواصل الاجتماعي الاستثنائية التي تحقق النتائج.',
      'service.banner.social.button': 'تحدث معنا',
      
      'service.banner.advertising.title': 'الإعلان الأدائي',
      'service.banner.advertising.subtitle': 'نحن ملتزمون بتقديم حلول إعلانية استثنائية تحقق النتائج.',
      'service.banner.advertising.button': 'تحدث معنا',
      
      // Work Banner
  // 'work.banner.title': 'عمل يتحدث بصوت أعلى من الكلمات.',
      'work.banner.countries': 'الدول',
      'work.banner.industries': ' الصناعات',
      
      // Work Main
      'work.main.categories.website': 'تطوير المواقع',
      'work.main.categories.app': 'تطوير التطبيقات',
      'work.main.categories.branding': 'العلامة التجارية',
      'work.main.categories.social': 'وسائل التواصل الاجتماعي',
 
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

 
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 