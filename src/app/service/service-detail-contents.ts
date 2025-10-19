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
        title: "Web application development company",
        description: "Quickly build reliable, high-performance custom web application using advanced technologies",
        buttonText: "Request free demo now",
      },
      main: {
        header: "Web application development",
        subheader: "services we deliver:",
        services: [
          { id: 1, icon: Sliders, title: "Custom web app development", description: "Develop a completely customized web application designed to deliver high-impact results and improve your business bottomline.", color: "from-purple-400 to-purple-600" },
          { id: 2, icon: Headphones, title: "Web portals development services", description: "Feature-rich web portals with seamless integrations and proven to deliver high ROI.", color: "from-purple-400 to-purple-600" },
          { id: 3, icon: Grid3x3, title: "Custom enterprise web app development", description: "A custom enterprise web application is tailor-made to suit the unique business requirements. From ideation to design and development, we take care of the complete custom web app development process.", color: "from-purple-400 to-purple-600" },
          { id: 4, icon: ShoppingCart, title: "SaaS development services", description: "Highly skilled SaaS developers with rich hands-on experience working with diverse and complex projects. Have an amazing SaaS idea? Let's discuss and transform your idea to revenue-generating software product.", color: "from-purple-400 to-purple-600" },
          { id: 5, icon: ShoppingCart, title: "Ecommerce", description: "Custom ecommerce web app development is imperative as each business requirement is different. Researching target audience, mapping user journey, diligently curating the best user experience, to maximize conversions and ROI. Aufait is the best custom ecommerce web app partner.", color: "from-purple-400 to-purple-600" },
          { id: 6, icon: Monitor, title: "Web app consulting", description: "Looking for a reliable partner for web app consulting? Aufait offers a comprehensive web app consulting services, from competitor analysis to detailed software requirement gathering, suggesting an appropriate architecture and hosting possibilities to drive maximum cost benefits, design ux and ui, and much more.", color: "from-purple-400 to-purple-600" },
        ],
      },
      accordion: {
        title: "Web app development\nfor diverse verticals",
        verticals: [
          { title: "Construction", description: "Innovative mobile app solutions to suit the unique demands of construction processes." },
          { title: "Healthcare", description: "Innovative mobile app solutions to suit the unique demands of healthcare processes." },
          { title: "Ecommerce", description: "Innovative mobile app solutions to suit the unique demands of ecommerce processes." },
          { title: "Fintech", description: "Innovative mobile app solutions to suit the unique demands of fintech processes." },
          { title: "Hospitality", description: "Innovative mobile app solutions to suit the unique demands of hospitality processes." },
          { title: "Insurance", description: "Innovative mobile app solutions to suit the unique demands of insurance processes." },
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
        title: "App Development Company",
        description: "Build high-quality mobile and cross-platform apps for your business.",
        buttonText: "Request app demo now",
      },
      main: {
        header: "App development",
        subheader: "services we deliver:",
        services: [
          { id: 1, icon: Sliders, title: "iOS App Development", description: "Custom iOS apps for iPhone and iPad with seamless UX.", color: "from-green-400 to-green-600" },
          { id: 2, icon: Sliders, title: "Android App Development", description: "Robust Android apps for all devices and use cases.", color: "from-green-400 to-green-600" },
          { id: 3, icon: Sliders, title: "Cross-Platform Apps", description: "React Native and Flutter apps for both iOS and Android.", color: "from-green-400 to-green-600" },
          { id: 4, icon: Sliders, title: "App UI/UX Design", description: "Beautiful, intuitive app interfaces and experiences.", color: "from-green-400 to-green-600" },
        ],
      },
      accordion: {
        title: "App development for industries",
        verticals: [
          { title: "Healthcare", description: "Mobile health apps for patient engagement and care." },
          { title: "Ecommerce", description: "Shopping, delivery, and loyalty apps for retailers." },
          { title: "Education", description: "E-learning and classroom management apps." },
          { title: "Travel", description: "Booking, itinerary, and travel guide apps." },
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
        title: "شركة تطوير تطبيقات الويب",
        description: "قم ببناء تطبيق ويب موثوق وعالي الأداء بسرعة باستخدام أحدث التقنيات",
        buttonText: "اطلب عرضًا تجريبيًا مجانيًا الآن",
      },
      main: {
        header: "تطوير تطبيقات الويب",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: Sliders, title: "تطوير تطبيقات ويب مخصصة", description: "تطوير تطبيق ويب مخصص بالكامل لتحقيق نتائج عالية التأثير وتحسين أرباح عملك.", color: "from-purple-400 to-purple-600" },
          { id: 2, icon: Headphones, title: "خدمات تطوير بوابات الويب", description: "بوابات ويب غنية بالميزات مع تكامل سلس وعائد استثمار مثبت.", color: "from-purple-400 to-purple-600" },
          { id: 3, icon: Grid3x3, title: "تطوير تطبيقات ويب للمؤسسات", description: "تطبيق ويب مؤسسي مخصص يلبي متطلبات العمل الفريدة. من الفكرة إلى التصميم والتطوير، نهتم بكامل العملية.", color: "from-purple-400 to-purple-600" },
          { id: 4, icon: ShoppingCart, title: "خدمات تطوير SaaS", description: "مطورون ذوو خبرة في SaaS لمشاريع متنوعة ومعقدة. لديك فكرة SaaS رائعة؟ دعنا نناقشها ونحولها إلى منتج برمجي يدر أرباحًا.", color: "from-purple-400 to-purple-600" },
          { id: 5, icon: ShoppingCart, title: "تجارة إلكترونية", description: "تطوير تطبيقات تجارة إلكترونية مخصصة لكل متطلبات عملك. دراسة الجمهور، رسم رحلة المستخدم، وتقديم أفضل تجربة لزيادة التحويلات والعائد.", color: "from-purple-400 to-purple-600" },
          { id: 6, icon: Monitor, title: "استشارات تطبيقات الويب", description: "شريك موثوق لاستشارات تطبيقات الويب: تحليل المنافسين، جمع المتطلبات، اقتراح البنية المناسبة، وتصميم تجربة المستخدم.", color: "from-purple-400 to-purple-600" },
        ],
      },
      accordion: {
        title: "تطوير تطبيقات الويب\nلمجالات متنوعة",
        verticals: [
          { title: "الإنشاءات", description: "حلول تطبيقات جوال مبتكرة لتلبية متطلبات عمليات البناء الفريدة." },
          { title: "الرعاية الصحية", description: "حلول تطبيقات جوال مبتكرة لتلبية متطلبات الرعاية الصحية." },
          { title: "التجارة الإلكترونية", description: "حلول تطبيقات جوال مبتكرة لتلبية متطلبات التجارة الإلكترونية." },
          { title: "الخدمات المالية", description: "حلول تطبيقات جوال مبتكرة لتلبية متطلبات العمليات المالية." },
          { title: "الضيافة", description: "حلول تطبيقات جوال مبتكرة لتلبية متطلبات الضيافة." },
          { title: "التأمين", description: "حلول تطبيقات جوال مبتكرة لتلبية متطلبات التأمين." },
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
        title: "شركة تطوير التطبيقات",
        description: "قم ببناء تطبيقات جوال عالية الجودة وعبر الأنظمة الأساسية لعملك.",
        buttonText: "اطلب عرض التطبيق الآن",
      },
      main: {
        header: "تطوير التطبيقات",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: Sliders, title: "تطوير تطبيقات iOS", description: "تطبيقات iOS مخصصة لأجهزة iPhone وiPad مع تجربة مستخدم سلسة.", color: "from-green-400 to-green-600" },
          { id: 2, icon: Sliders, title: "تطوير تطبيقات Android", description: "تطبيقات Android قوية لجميع الأجهزة والاستخدامات.", color: "from-green-400 to-green-600" },
          { id: 3, icon: Sliders, title: "تطبيقات متعددة المنصات", description: "تطبيقات React Native وFlutter لكل من iOS وAndroid.", color: "from-green-400 to-green-600" },
          { id: 4, icon: Sliders, title: "تصميم واجهة المستخدم للتطبيق", description: "واجهات تطبيقات جميلة وسهلة الاستخدام.", color: "from-green-400 to-green-600" },
        ],
      },
      accordion: {
        title: "تطوير التطبيقات للصناعات",
        verticals: [
          { title: "الرعاية الصحية", description: "تطبيقات صحية للمشاركة مع المرضى والرعاية." },
          { title: "التجارة الإلكترونية", description: "تطبيقات تسوق وتوصيل وبرامج ولاء للتجار." },
          { title: "التعليم", description: "تطبيقات التعليم الإلكتروني وإدارة الفصول الدراسية." },
          { title: "السفر", description: "تطبيقات الحجز وخطط الرحلات ودلائل السفر." },
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
