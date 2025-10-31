import { Sliders, Headphones, Grid3x3, ShoppingCart, Monitor, Zap, PenTool, Camera, BarChart2, Users, Globe2 } from "lucide-react";
import { ServiceCard } from "@/components/services-innerpages/ServiceDetailMain";

export interface ServiceDetailContent {
  banner: {
    title: string;
    description: string;
    buttonText: string;
  };
  main: {
    header?: string;
    subheader?: string;
    services: ServiceCard[];
  };
  accordion: {
    title: string;
    verticals: { title: string; description: string }[];
  };
}

export const serviceDetails = {
  en: {
    web: {
      banner: {
        title: "AI-Enhanced Web Development Company",
        description: "Build intelligent, responsive web applications with AI-powered features, automated optimization, and smart user experiences",
        buttonText: "Request AI Web Demo",
      },
      main: {
        header: "AI-Enhanced Web Development",
        subheader: "intelligent solutions we deliver:",
        services: [
          { id: 1, icon: Sliders, title: "AI-Powered Web Applications", description: "Develop smart web applications with AI integration, machine learning capabilities, and intelligent automation features.", color: "from-purple-400 to-purple-600" },
          { id: 2, icon: Headphones, title: "Smart Web Portals", description: "Feature-rich web portals with AI-driven personalization, automated content management, and intelligent user experiences.", color: "from-purple-400 to-purple-600" },
          { id: 3, icon: Grid3x3, title: "Intelligent Enterprise Solutions", description: "AI-enhanced enterprise web applications with predictive analytics, automated workflows, and smart business intelligence.", color: "from-purple-400 to-purple-600" },
          { id: 4, icon: ShoppingCart, title: "AI-Driven SaaS Platforms", description: "Build intelligent SaaS solutions with AI-powered features, automated scaling, and smart user analytics.", color: "from-purple-400 to-purple-600" },
          { id: 5, icon: ShoppingCart, title: "Smart E-commerce Platforms", description: "AI-enhanced e-commerce solutions with intelligent product recommendations, automated customer service, and smart inventory management.", color: "from-purple-400 to-purple-600" },
          { id: 6, icon: Monitor, title: "AI Web Consulting", description: "Strategic AI web consulting services including intelligent architecture design, automated testing, and smart performance optimization.", color: "from-purple-400 to-purple-600" },
        ],
      },
      accordion: {
        title: "AI web development\nfor diverse industries",
        verticals: [
          { title: "Healthcare", description: "AI-powered healthcare web platforms with intelligent patient management and automated diagnostics." },
          { title: "Finance", description: "Smart financial web applications with AI-driven risk assessment and automated compliance." },
          { title: "E-commerce", description: "Intelligent e-commerce platforms with AI-powered recommendations and automated customer service." },
          { title: "Education", description: "Smart educational web platforms with AI-driven personalized learning and automated assessment." },
          { title: "Manufacturing", description: "AI-enhanced manufacturing web solutions with predictive maintenance and automated quality control." },
          { title: "Real Estate", description: "Intelligent real estate web platforms with AI-powered property matching and automated valuation." },
        ],
      },
    },
    // Add similar objects for ai, app, branding, digital, video
    ai: {
      banner: {
        title: "AI Agentic Automation",
        description: "Automate your business with intelligent AI agents and workflows.",
        buttonText: "Request AI demo now",
      },
      main: {
        header: "AI Agentic Automation",
        subheader: "solutions we deliver:",
        services: [
          { id: 1, icon: Zap, title: "AI Workflow Automation", description: "Automate repetitive tasks and business processes using AI-driven workflows.", color: "from-blue-400 to-blue-600" },
          { id: 2, icon: Users, title: "Conversational AI Agents", description: "Deploy chatbots and voice assistants to enhance customer engagement.", color: "from-blue-400 to-blue-600" },
          { id: 3, icon: BarChart2, title: "Predictive Analytics", description: "Leverage AI to forecast trends and make data-driven decisions.", color: "from-blue-400 to-blue-600" },
          { id: 4, icon: Globe2, title: "Process Optimization", description: "Streamline operations and reduce costs with intelligent automation.", color: "from-blue-400 to-blue-600" },
        ],
      },
      accordion: {
        title: "AI automation for industries",
        verticals: [
          { title: "Retail", description: "AI-powered inventory, customer support, and personalized shopping experiences." },
          { title: "Healthcare", description: "AI for diagnostics, patient engagement, and workflow automation." },
          { title: "Finance", description: "Fraud detection, risk analysis, and customer service automation." },
          { title: "Manufacturing", description: "Predictive maintenance and process optimization with AI." },
        ],
      },
    },
    app: {
      banner: {
        title: "AI-Powered App Development Company",
        description: "Build intelligent mobile and cross-platform apps with AI integration, machine learning, and smart automation features.",
        buttonText: "Request AI App Demo",
      },
      main: {
        header: "AI-Enhanced App Development",
        subheader: "intelligent solutions we deliver:",
        services: [
          { id: 1, icon: Sliders, title: "AI-Powered iOS Apps", description: "Develop intelligent iOS applications with AI integration, machine learning capabilities, and smart automation features.", color: "from-green-400 to-green-600" },
          { id: 2, icon: Sliders, title: "Smart Android Applications", description: "Build intelligent Android apps with AI-driven features, automated processes, and smart user experiences.", color: "from-green-400 to-green-600" },
          { id: 3, icon: Sliders, title: "Cross-Platform AI Apps", description: "Create intelligent cross-platform applications using React Native and Flutter with AI integration and smart features.", color: "from-green-400 to-green-600" },
          { id: 4, icon: Sliders, title: "AI-Enhanced UI/UX Design", description: "Design intelligent app interfaces with AI-powered personalization, automated user flows, and smart interactions.", color: "from-green-400 to-green-600" },
        ],
      },
      accordion: {
        title: "AI app development for industries",
        verticals: [
          { title: "Healthcare", description: "AI-powered health apps with intelligent diagnostics, automated patient monitoring, and smart health insights." },
          { title: "E-commerce", description: "Smart shopping apps with AI-driven recommendations, automated customer service, and intelligent inventory management." },
          { title: "Education", description: "Intelligent learning apps with AI-powered personalized education, automated assessment, and smart content delivery." },
          { title: "Finance", description: "AI-enhanced financial apps with intelligent risk assessment, automated fraud detection, and smart financial planning." },
        ],
      },
    },
    branding: {
      banner: {
        title: "Branding & Identity",
        description: "Build a unique brand identity with thoughtful visual systems and messaging.",
        buttonText: "Request branding consult",
      },
      main: {
        header: "Branding services",
        subheader: "what we offer:",
        services: [
          { id: 1, icon: PenTool, title: "Logo Design", description: "Memorable, versatile logos for your brand.", color: "from-pink-400 to-pink-600" },
          { id: 2, icon: PenTool, title: "Brand Guidelines", description: "Comprehensive brand books and style guides.", color: "from-pink-400 to-pink-600" },
          { id: 3, icon: PenTool, title: "Visual Identity", description: "Color, typography, and imagery systems.", color: "from-pink-400 to-pink-600" },
          { id: 4, icon: PenTool, title: "Messaging & Voice", description: "Crafting your brand’s story and tone.", color: "from-pink-400 to-pink-600" },
        ],
      },
      accordion: {
        title: "Branding for industries",
        verticals: [
          { title: "Startups", description: "Brand launches and go-to-market strategy." },
          { title: "Retail", description: "Brand refresh and packaging design." },
          { title: "Corporate", description: "Rebranding and internal brand culture." },
          { title: "Nonprofits", description: "Mission-driven branding and campaigns." },
        ],
      },
    },
    digital: {
      banner: {
        title: "Digital Marketing",
        description: "Grow your audience with data-driven strategies across paid, search, and social.",
        buttonText: "Request marketing consult",
      },
      main: {
        header: "Digital marketing",
        subheader: "services we deliver:",
        services: [
          { id: 1, icon: BarChart2, title: "SEO & SEM", description: "Boost your visibility with search engine optimization and marketing.", color: "from-yellow-400 to-yellow-600" },
          { id: 2, icon: BarChart2, title: "Social Media Marketing", description: "Engage your audience on all major platforms.", color: "from-yellow-400 to-yellow-600" },
          { id: 3, icon: BarChart2, title: "Content Marketing", description: "Drive traffic and leads with high-quality content.", color: "from-yellow-400 to-yellow-600" },
          { id: 4, icon: BarChart2, title: "Email Marketing", description: "Nurture leads and retain customers with targeted campaigns.", color: "from-yellow-400 to-yellow-600" },
        ],
      },
      accordion: {
        title: "Digital marketing for industries",
        verticals: [
          { title: "Ecommerce", description: "Performance marketing and conversion optimization." },
          { title: "Education", description: "Student recruitment and engagement campaigns." },
          { title: "Healthcare", description: "Patient acquisition and brand awareness." },
          { title: "Real Estate", description: "Lead generation and virtual tours." },
        ],
      },
    },
    video: {
      banner: {
        title: "Video & Photo Editing",
        description: "Professional editing for videos and images — enhancing visuals, color grading.",
        buttonText: "Request editing demo",
      },
      main: {
        header: "Video & Photo Editing",
        subheader: "services we deliver:",
        services: [
          { id: 1, icon: Camera, title: "Video Editing", description: "Cinematic video editing, color grading, and effects.", color: "from-indigo-400 to-indigo-600" },
          { id: 2, icon: Camera, title: "Photo Retouching", description: "Professional image enhancement and retouching.", color: "from-indigo-400 to-indigo-600" },
          { id: 3, icon: Camera, title: "Motion Graphics", description: "Animated graphics and explainer videos.", color: "from-indigo-400 to-indigo-600" },
          { id: 4, icon: Camera, title: "Social Media Content", description: "Short-form video and image content for all platforms.", color: "from-indigo-400 to-indigo-600" },
        ],
      },
      accordion: {
        title: "Editing for industries",
        verticals: [
          { title: "Advertising", description: "Commercials and promotional video editing." },
          { title: "Events", description: "Event highlight reels and photo albums." },
          { title: "Education", description: "E-learning video and image content." },
          { title: "Corporate", description: "Brand videos and internal communications." },
        ],
      },
    },
  },
  ar: {
    web: {
      banner: {
        title: "شركة تطوير المواقع المحسّنة بالذكاء الاصطناعي",
        description: "بناء تطبيقات ويب ذكية ومتجاوبة مع ميزات مدعومة بالذكاء الاصطناعي وتحسين مؤتمت وتجارب مستخدم ذكية",
        buttonText: "اطلب عرض ويب بالذكاء الاصطناعي",
      },
      main: {
        header: "تطوير المواقع المحسّن بالذكاء الاصطناعي",
        subheader: "الحلول الذكية التي نقدمها:",
        services: [
          { id: 1, icon: Sliders, title: "تطبيقات الويب المدعومة بالذكاء الاصطناعي", description: "تطوير تطبيقات ويب ذكية مع تكامل الذكاء الاصطناعي وقدرات التعلم الآلي وميزات الأتمتة الذكية.", color: "from-purple-400 to-purple-600" },
          { id: 2, icon: Headphones, title: "بوابات ويب ذكية", description: "بوابات ويب غنية بالميزات مع تخصيص مدعوم بالذكاء الاصطناعي وإدارة محتوى مؤتمتة وتجارب مستخدم ذكية.", color: "from-purple-400 to-purple-600" },
          { id: 3, icon: Grid3x3, title: "حلول مؤسسية ذكية", description: "تطبيقات ويب مؤسسية محسّنة بالذكاء الاصطناعي مع تحليلات تنبؤية وسير عمل مؤتمت وذكاء أعمال ذكي.", color: "from-purple-400 to-purple-600" },
          { id: 4, icon: ShoppingCart, title: "منصات SaaS مدعومة بالذكاء الاصطناعي", description: "بناء حلول SaaS ذكية مع ميزات مدعومة بالذكاء الاصطناعي وتوسع مؤتمت وتحليلات مستخدم ذكية.", color: "from-purple-400 to-purple-600" },
          { id: 5, icon: ShoppingCart, title: "منصات تجارة إلكترونية ذكية", description: "حلول تجارة إلكترونية محسّنة بالذكاء الاصطناعي مع توصيات منتجات ذكية وخدمة عملاء مؤتمتة وإدارة مخزون ذكية.", color: "from-purple-400 to-purple-600" },
          { id: 6, icon: Monitor, title: "استشارات ويب بالذكاء الاصطناعي", description: "خدمات استشارية استراتيجية للويب بالذكاء الاصطناعي تشمل تصميم بنية ذكية واختبار مؤتمت وتحسين أداء ذكي.", color: "from-purple-400 to-purple-600" },
        ],
      },
      accordion: {
        title: "تطوير ويب بالذكاء الاصطناعي\nلمجالات متنوعة",
        verticals: [
          { title: "الرعاية الصحية", description: "منصات ويب رعاية صحية مدعومة بالذكاء الاصطناعي مع إدارة مرضى ذكية وتشخيص مؤتمت." },
          { title: "المالية", description: "تطبيقات ويب مالية ذكية مع تقييم مخاطر مدعوم بالذكاء الاصطناعي وامتثال مؤتمت." },
          { title: "التجارة الإلكترونية", description: "منصات تجارة إلكترونية ذكية مع توصيات مدعومة بالذكاء الاصطناعي وخدمة عملاء مؤتمتة." },
          { title: "التعليم", description: "منصات ويب تعليمية ذكية مع تعلم شخصي مدعوم بالذكاء الاصطناعي وتقييم مؤتمت." },
          { title: "التصنيع", description: "حلول ويب تصنيع محسّنة بالذكاء الاصطناعي مع صيانة تنبؤية ومراقبة جودة مؤتمتة." },
          { title: "العقارات", description: "منصات ويب عقارية ذكية مع مطابقة عقارات مدعومة بالذكاء الاصطناعي وتقييم مؤتمت." },
        ],
      },
    },
    ai: {
      banner: {
        title: "أتمتة الذكاء الاصطناعي",
        description: "قم بأتمتة عملك باستخدام وكلاء الذكاء الاصطناعي الذكي وتدفقات العمل.",
        buttonText: "اطلب عرض الذكاء الاصطناعي الآن",
      },
      main: {
        header: "أتمتة الذكاء الاصطناعي",
        subheader: "الحلول التي نقدمها:",
        services: [
          { id: 1, icon: Zap, title: "أتمتة سير العمل بالذكاء الاصطناعي", description: "أتمتة المهام المتكررة وعمليات الأعمال باستخدام تدفقات عمل مدعومة بالذكاء الاصطناعي.", color: "from-blue-400 to-blue-600" },
          { id: 2, icon: Users, title: "وكلاء محادثة الذكاء الاصطناعي", description: "نشر روبوتات الدردشة والمساعدين الصوتيين لتعزيز تفاعل العملاء.", color: "from-blue-400 to-blue-600" },
          { id: 3, icon: BarChart2, title: "تحليلات تنبؤية", description: "استخدم الذكاء الاصطناعي لتوقع الاتجاهات واتخاذ قرارات قائمة على البيانات.", color: "from-blue-400 to-blue-600" },
          { id: 4, icon: Globe2, title: "تحسين العمليات", description: "تبسيط العمليات وتقليل التكاليف باستخدام الأتمتة الذكية.", color: "from-blue-400 to-blue-600" },
        ],
      },
      accordion: {
        title: "أتمتة الذكاء الاصطناعي للصناعات",
        verticals: [
          { title: "التجزئة", description: "إدارة المخزون، دعم العملاء، وتجارب تسوق مخصصة بالذكاء الاصطناعي." },
          { title: "الرعاية الصحية", description: "الذكاء الاصطناعي للتشخيص، تفاعل المرضى، وأتمتة سير العمل." },
          { title: "المالية", description: "كشف الاحتيال، تحليل المخاطر، وأتمتة خدمة العملاء." },
          { title: "التصنيع", description: "الصيانة التنبؤية وتحسين العمليات باستخدام الذكاء الاصطناعي." },
        ],
      },
    },
    app: {
      banner: {
        title: "شركة تطوير التطبيقات المدعومة بالذكاء الاصطناعي",
        description: "بناء تطبيقات جوال ومتعددة المنصات ذكية مع تكامل الذكاء الاصطناعي والتعلم الآلي وميزات الأتمتة الذكية.",
        buttonText: "اطلب عرض تطبيق بالذكاء الاصطناعي",
      },
      main: {
        header: "تطوير التطبيقات المحسّن بالذكاء الاصطناعي",
        subheader: "الحلول الذكية التي نقدمها:",
        services: [
          { id: 1, icon: Sliders, title: "تطبيقات iOS مدعومة بالذكاء الاصطناعي", description: "تطوير تطبيقات iOS ذكية مع تكامل الذكاء الاصطناعي وقدرات التعلم الآلي وميزات الأتمتة الذكية.", color: "from-green-400 to-green-600" },
          { id: 2, icon: Sliders, title: "تطبيقات Android ذكية", description: "بناء تطبيقات Android ذكية مع ميزات مدعومة بالذكاء الاصطناعي وعمليات مؤتمتة وتجارب مستخدم ذكية.", color: "from-green-400 to-green-600" },
          { id: 3, icon: Sliders, title: "تطبيقات متعددة المنصات بالذكاء الاصطناعي", description: "إنشاء تطبيقات متعددة المنصات ذكية باستخدام React Native وFlutter مع تكامل الذكاء الاصطناعي وميزات ذكية.", color: "from-green-400 to-green-600" },
          { id: 4, icon: Sliders, title: "تصميم واجهة المستخدم المحسّن بالذكاء الاصطناعي", description: "تصميم واجهات تطبيقات ذكية مع تخصيص مدعوم بالذكاء الاصطناعي وتدفقات مستخدم مؤتمتة وتفاعلات ذكية.", color: "from-green-400 to-green-600" },
        ],
      },
      accordion: {
        title: "تطوير تطبيقات بالذكاء الاصطناعي للصناعات",
        verticals: [
          { title: "الرعاية الصحية", description: "تطبيقات صحية مدعومة بالذكاء الاصطناعي مع تشخيص ذكي ومراقبة مرضى مؤتمتة ورؤى صحية ذكية." },
          { title: "التجارة الإلكترونية", description: "تطبيقات تسوق ذكية مع توصيات مدعومة بالذكاء الاصطناعي وخدمة عملاء مؤتمتة وإدارة مخزون ذكية." },
          { title: "التعليم", description: "تطبيقات تعليم ذكية مع تعليم شخصي مدعوم بالذكاء الاصطناعي وتقييم مؤتمت وتسليم محتوى ذكي." },
          { title: "المالية", description: "تطبيقات مالية محسّنة بالذكاء الاصطناعي مع تقييم مخاطر ذكي وكشف احتيال مؤتمت وتخطيط مالي ذكي." },
        ],
      },
    },
    branding: {
      banner: {
        title: "العلامة التجارية والهوية",
        description: "ابنِ هوية علامة تجارية فريدة بأنظمة بصرية ورسائل مدروسة.",
        buttonText: "اطلب استشارة العلامة التجارية",
      },
      main: {
        header: "خدمات العلامة التجارية",
        subheader: "ما نقدمه:",
        services: [
          { id: 1, icon: PenTool, title: "تصميم الشعار", description: "شعارات مميزة ومتعددة الاستخدامات لعلامتك التجارية.", color: "from-pink-400 to-pink-600" },
          { id: 2, icon: PenTool, title: "دليل العلامة التجارية", description: "كتب ودلائل شاملة للعلامة التجارية.", color: "from-pink-400 to-pink-600" },
          { id: 3, icon: PenTool, title: "الهوية البصرية", description: "أنظمة الألوان والطباعة والصور.", color: "from-pink-400 to-pink-600" },
          { id: 4, icon: PenTool, title: "الرسائل والصوت", description: "صياغة قصة العلامة التجارية ونبرتها.", color: "from-pink-400 to-pink-600" },
        ],
      },
      accordion: {
        title: "العلامة التجارية للصناعات",
        verticals: [
          { title: "الشركات الناشئة", description: "إطلاق العلامة التجارية واستراتيجية دخول السوق." },
          { title: "التجزئة", description: "تجديد العلامة التجارية وتصميم التغليف." },
          { title: "الشركات", description: "إعادة العلامة التجارية وثقافة العلامة التجارية الداخلية." },
          { title: "المنظمات غير الربحية", description: "العلامة التجارية الموجهة للرسالة والحملات." },
        ],
      },
    },
    digital: {
      banner: {
        title: "التسويق الرقمي",
        description: "نمِ جمهورك باستراتيجيات قائمة على البيانات عبر الإعلانات والبحث ووسائل التواصل.",
        buttonText: "اطلب استشارة التسويق",
      },
      main: {
        header: "التسويق الرقمي",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: BarChart2, title: "تحسين محركات البحث والتسويق", description: "عزز ظهورك مع تحسين محركات البحث والتسويق.", color: "from-yellow-400 to-yellow-600" },
          { id: 2, icon: BarChart2, title: "التسويق عبر وسائل التواصل الاجتماعي", description: "تفاعل مع جمهورك على جميع المنصات الرئيسية.", color: "from-yellow-400 to-yellow-600" },
          { id: 3, icon: BarChart2, title: "تسويق المحتوى", description: "جذب الزيارات والعملاء المحتملين بمحتوى عالي الجودة.", color: "from-yellow-400 to-yellow-600" },
          { id: 4, icon: BarChart2, title: "التسويق عبر البريد الإلكتروني", description: "رعاية العملاء والاحتفاظ بهم بحملات مستهدفة.", color: "from-yellow-400 to-yellow-600" },
        ],
      },
      accordion: {
        title: "التسويق الرقمي للصناعات",
        verticals: [
          { title: "التجارة الإلكترونية", description: "التسويق بالأداء وتحسين التحويلات." },
          { title: "التعليم", description: "حملات جذب الطلاب والمشاركة." },
          { title: "الرعاية الصحية", description: "اكتساب المرضى وزيادة الوعي بالعلامة التجارية." },
          { title: "العقارات", description: "توليد العملاء المحتملين والجولات الافتراضية." },
        ],
      },
    },
    video: {
      banner: {
        title: "تحرير الفيديو والصور",
        description: "تحرير احترافي للفيديوهات والصور — تحسين المرئيات وتعديل الألوان.",
        buttonText: "اطلب عرض التحرير",
      },
      main: {
        header: "تحرير الفيديو والصور",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: Camera, title: "تحرير الفيديو", description: "تحرير فيديو سينمائي، تصحيح الألوان، وتأثيرات.", color: "from-indigo-400 to-indigo-600" },
          { id: 2, icon: Camera, title: "تحسين الصور", description: "تحسين الصور واحترافية التعديل.", color: "from-indigo-400 to-indigo-600" },
          { id: 3, icon: Camera, title: "الرسوم المتحركة", description: "رسوم متحركة وفيديوهات توضيحية.", color: "from-indigo-400 to-indigo-600" },
          { id: 4, icon: Camera, title: "محتوى وسائل التواصل الاجتماعي", description: "محتوى فيديو وصور قصير لجميع المنصات.", color: "from-indigo-400 to-indigo-600" },
        ],
      },
      accordion: {
        title: "التحرير للصناعات",
        verticals: [
          { title: "الإعلانات", description: "تحرير الإعلانات التجارية والفيديوهات الترويجية." },
          { title: "الفعاليات", description: "ملخصات الفعاليات وألبومات الصور." },
          { title: "التعليم", description: "محتوى فيديو وصور للتعليم الإلكتروني." },
          { title: "الشركات", description: "فيديوهات العلامة التجارية والاتصالات الداخلية." },
        ],
      },
    },
  },
};
