// src/lib/worksData.ts
// All text content for work detail pages should be stored here.

export interface WorkDetailData {
  banner: {
    title: { en: string; ar: string };
    description: { en: string; ar: string };
  };
  info: {
    clientTitle: { en: string; ar: string };
    clientDescription: { en: string; ar: string };
    requirementTitle: { en: string; ar: string };
    requirementDescription: { en: string; ar: string };
  };
  challengesDescription: { en: string; ar: string };
  challenges: { title: { en: string; ar: string }; description: { en: string; ar: string } }[];
  gallery: {
    captions: { en: string; ar: string }[];
  };
  featuredProjectsHeading: { en: string; ar: string };
  featuredProjects: {
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    image: string;
    link: string;
    delay?: number;
  }[];
}

export const worksData: Record<string, WorkDetailData> = {
  spotifyClone: {
    banner: {
      title: {
        en: "Spotify Clone",
        ar: "سبوتيفاي كلون"
      },
      description: {
        en: "A modern music streaming web app.",
        ar: "تطبيق ويب حديث لبث الموسيقى."
      }
    },
    info: {
      clientTitle: {
        en: "Client",
        ar: "العميل"
      },
      clientDescription: {
        en: "Our client, a Fortune 500 company, is a leader in medical innovation. They develop solutions that improve lives, providing essential products, tools, and services to healthcare professionals, patients, and career seekers. Committed to growth and forward-thinking, they leverage advanced technologies to benefit employees and consumers alike.",
        ar: "عميلنا، إحدى شركات فورتشن 500، رائد في الابتكار الطبي. يطورون حلولاً لتحسين الحياة، ويقدمون منتجات وأدوات وخدمات أساسية للمهنيين الصحيين والمرضى والباحثين عن عمل. ملتزمون بالنمو والتفكير المستقبلي، ويستفيدون من التقنيات المتقدمة لصالح الموظفين والمستهلكين على حد سواء."
      },
      requirementTitle: {
        en: "Requirement",
        ar: "المتطلبات"
      },
      requirementDescription: {
        en: "The client needed to enhance their manual offboarding process, which involved multiple forms and approvals, by implementing an automated, centralized system. This system required efficient tracking, data security, and streamlined workflows to ensure a smoother, faster exit process for employees while providing valuable insights for the organization.",
        ar: "كان على العميل تحسين عملية إنهاء الخدمة اليدوية التي تضمنت نماذج وموافقات متعددة، من خلال تنفيذ نظام مركزي وآلي. تطلب هذا النظام تتبعًا فعالًا، وأمانًا للبيانات، وتبسيط سير العمل لضمان عملية خروج أكثر سلاسة وسرعة للموظفين مع توفير رؤى قيمة للمؤسسة."
      }
    },
    challengesDescription: {
      en: "The client sought to enhance their employee offboarding process, originally manual and cumbersome with multiple stages and forms, resulting in significant delays and poor tracking capabilities. Lack of an automated and centralized Employee Exit Management System posed the following challenges:",
      ar: "سعى العميل إلى تحسين عملية إنهاء خدمة الموظفين التي كانت يدوية ومعقدة في الأصل مع مراحل ونماذج متعددة، مما أدى إلى تأخيرات كبيرة وضعف في تتبع العمليات. عدم وجود نظام مركزي وآلي لإدارة الخروج أدى إلى التحديات التالية:"
    },
    challenges: [
      {
        title: { en: "Errors in Manual Processes", ar: "أخطاء في العمليات اليدوية" },
        description: { en: "Manual handling led to inefficiencies and increased errors. Tasks were prone to delays and inaccuracies.", ar: "المعالجة اليدوية أدت إلى عدم الكفاءة وزيادة الأخطاء. كانت المهام عرضة للتأخير وعدم الدقة." }
      },
      {
        title: { en: "Complexity of Multiple Forms", ar: "تعقيد النماذج المتعددة" },
        description: { en: "Employees navigated through various forms and documents. This complexity often caused confusion and incomplete submissions.", ar: "كان على الموظفين التنقل بين نماذج ووثائق متعددة. هذا التعقيد غالبًا ما سبب ارتباكًا وإكمالاً غير مكتمل للنماذج." }
      },
      {
        title: { en: "Slow Approval Processes", ar: "بطء عمليات الموافقة" },
        description: { en: "Manual tracking and follow-up for approvals caused significant delays in processing onboarding requests.", ar: "تتبع الموافقات يدويًا والمتابعة تسببت في تأخيرات كبيرة في معالجة الطلبات." }
      },
      {
        title: { en: "Lack of Centralized Data Management", ar: "نقص إدارة البيانات المركزية" },
        description: { en: "There was scattered information across different platforms. This caused difficulty in tracking and managing offboarding tasks.", ar: "كانت المعلومات موزعة عبر منصات مختلفة، مما صعّب تتبع وإدارة مهام إنهاء الخدمة." }
      },
      {
        title: { en: "Communication Inefficiencies", ar: "عدم كفاءة التواصل" },
        description: { en: "With the absence of automated notifications and reminders, keeping all parties informed and on schedule became an upheaval task.", ar: "في غياب الإشعارات والتذكيرات الآلية، أصبح إبقاء جميع الأطراف على اطلاع وفي الموعد مهمة صعبة." }
      },
      {
        title: { en: "Security and Compliance Risks", ar: "مخاطر الأمان والامتثال" },
        description: { en: "Manual processes come with risks to data security. Conforming compliance with regulations and company policies was challenging.", ar: "العمليات اليدوية تحمل مخاطر على أمان البيانات. كان الامتثال للوائح وسياسات الشركة تحديًا." }
      }
    ],
    gallery: {
      captions: [
        { en: "Gallery image 1 caption.", ar: "شرح صورة المعرض 1." },
        { en: "Gallery image 2 caption.", ar: "شرح صورة المعرض 2." }
      ]
    },
    featuredProjectsHeading: {
      en: "Our featured projects",
      ar: "مشاريعنا المميزة"
    },
    featuredProjects: [
      {
        title: { en: "Intranet Portal", ar: "بوابة الإنترانت" },
        description: { en: "Description for Intranet Portal project.", ar: "وصف لمشروع بوابة الإنترانت." },
        image: "http://wallpapercave.com/wp/OsshDMo.jpg",
        link: "/projects/intranet-portal",
        delay: 0
      },
      {
        title: { en: "Document Management System", ar: "نظام إدارة الوثائق" },
        description: { en: "Description for Document Management System.", ar: "وصف لنظام إدارة الوثائق." },
        image: "https://cdnb.artstation.com/p/assets/images/images/041/576/171/large/3d-pro-club-a540d7126542929-612f83f928d25.jpg?1632102481",
        link: "/projects/document-management-system",
        delay: 100
      },
      {
        title: { en: "Performance Management System", ar: "نظام إدارة الأداء" },
        description: { en: "Description for Performance Management System.", ar: "وصف لنظام إدارة الأداء." },
        image: "https://mma.prnewswire.com/media/2041787/PEPSI_Multipack.jpg?p=facebook",
        link: "/projects/performance-management-system",
        delay: 200
      }
    ]
  }
};
