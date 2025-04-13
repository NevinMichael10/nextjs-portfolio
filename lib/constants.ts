import { SiFacebook, SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa";

export const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT ?? 3000;
export const SITE_URL = isProduction ? "https://nevin.vercel.app" : `http://localhost:${PORT}`;

export const GITHUB_USERNAME = "NevinMichael10";
export const SITE_NAME = "Nevin Michael";
export const SITE_GITHUB_URL = "https://github.com/NevinMichael10";
export const SITE_FACEBOOK_URL = "https://www.facebook.com/Nevin.michael.28";
export const SITE_INSTAGRAM_URL = "https://www.instagram.com/infernal_encipherer";
export const SITE_LINKEDIN_URL = "https://www.linkedin.com/in/nevin-michael-24716a231";

export const authorName = "Nevin Michael";

export const SITE_KEYWORDS = [
  `${authorName}`, "Software Engineer", "React Developer", "Next.js Developer", "Full Stack Developer", 
  "Mendix Developer", "TypeScript Developer", "JavaScript Developer", "Web Developer", "Web Development", "Tech Enthusiast", 
  "Frontend Developer", "Backend Developer", "App Development", "Tech Portfolio", "GitHub", "Personal Website", 
  "Software Development", "Software Solutions", "Web Apps", "Tech Projects", "Tech Stack", "Developer Portfolio",
  "Developer Journey", "Software Engineering", "React Projects", "Full Stack Projects", "Next.js Projects", 
  "TypeScript Projects", "App Development Projects", "Open Source Projects", "Tech Expertise"
];

export const SOCIAL_LINKS = [
  {
    href: SITE_GITHUB_URL,
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: SITE_FACEBOOK_URL,
    title: "Facebook",
    icon: SiFacebook,
  },
  {
    href: SITE_INSTAGRAM_URL,
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: SITE_LINKEDIN_URL,
    title: "LinkedIn",
    icon: FaLinkedinIn,
  },
];

//Layout
export const layoutUI = {
  lightImagePath: "/images/logo/nlogo-black-transparent.svg",
  darkImagePath: "/images/logo/nlogo-white-transparent.svg",
};

//Home Page
export const homePage = {
  title: "Nevin Michael's Portfolio",
  description: "Nevin Michael's Portfolio Website Home Page",
  metaTitle: `Meet ${authorName} - Building the Future with Modern Technology`,
  metaDesc: `${authorName} is a Software Engineer with a drive for creating impactful, scalable solutions across platforms using the latest in modern technology and development tools.`,
  metaKeywords: [
    "Software Engineer", "Digital Solutions", "Web Development", "Modern Technologies", 
    "React", "Next.js", "TypeScript", "JavaScript", "Frontend Developer", "Tech Enthusiast", 
    "Portfolio", "Web Apps", "India Developer", "GitHub", "Personal Website"
  ],
};

export const ABOUTME = {
  aboutMe: "About Me",
  knowMore: "Know more about me",
} as const;

export const contactInfo = {
  promptHeading: "Any questions?",
  promptText: "Feel free to reach out to me!",
  email: "nevinmichael28@gmail.com",
};

export const introText = {
  greeting: `I'm ${authorName}, a Software Engineer`,
  building: "building",
  websitesUsing: "websites using",
  modernTech: "modern technologies",
  location: "India • UTC/GMT +5:30",
  imagePath: "/images/logo/nlogo-black-bg.svg",
};

export const techTags: TechTags = {
  author: "Nevin", // First name only
  imagePath: "/images/logo/nlogo-black-bg.svg",
  label: "Next.js",
  label2: "React.js",
  label3: "TypeScript",
  label4: "JavaScript",
};

//About Page
export const aboutPage = {
  title: "About",
  description: `Hi there! I am ${authorName}, a Software Engineer who loves to solve problems using modern technologies.`,
  metaTitle: `Get to Know ${authorName} - Passionate Software Engineer & Tech Enthusiast`,
  metaDesc: `Explore ${authorName}'s background, skills, and mindset. Learn how his love for technology, creativity, and problem-solving defines his journey as a software engineer.`,
  metaKeywords: [
    "Software Engineer", `About ${authorName}`, "Tech Professional", "Web Developer", 
    "Tech Enthusiast", "React.js", "Next.js", "Full Stack Developer", "Software Development", 
    "Creative Thinker", "Problem Solver", "Team Player", "Software Solutions", "Developer Journey"
  ],
};

export const whoAmIData = {
  bio: {
    role: "Software Engineer",
    birthDate: "2001-10-28", //yyyy-mm-dd format strictly
    description: "I'm passionate about building cutting-edge applications that solve real-world problems. With a blend of technical expertise, creative thinking, and a constant hunger for learning, I develop solutions that are not only functional but also impactful.",
  },
  skills: ["React.js", "Next.js", "Spring Boot", "Mendix", "PostgreSQL", "MySQL", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap", "Git", "GitHub", "DigitalOcean", "Linux", "Power Automate", "Watson Orchestrate", "Zustand", "VS Code", "IntelliJ", "STS", "Canva", "Photoshop"],
  whyMe: [
    {
      id: 1,
      text: "A creative thinker with a knack for solving challenging problems.",
    },
    {
      id: 2,
      text: "Always on the pulse of the latest tech trends to deliver forward-thinking solutions.",
    },
    {
      id: 3,
      text: "A team player with a passion for collaboration and innovation.",
    },
  ],
  aboutThisSite: {
    Framework: "Next.js",
    Authentication: "Next Auth",
    "State Management": "Zustand",
    Deployment: "Vercel",
    Styling: "Tailwind CSS",
    "UI Components": ["Headless UI", "Radix UI", "Shadcn UI"],
    Animations: ["Motion", "React Spring", "TailwindCSS Animate"],
  },
};

//Cert Page
export const certPage = {
  title: "Certificates",
  description: "Check out some of the certifications I have earned.",
  metaTitle: `${authorName}'s Certifications & Achievements`,
  metaDesc: `Explore the professional certifications of ${authorName}, highlighting his expertise and commitment to mastering modern software technologies.`,
  metaKeywords: [
    `${authorName} Projects`, "Software Engineering Projects", "Web Development Projects", 
    "React Projects", "Next.js Projects", "TypeScript Projects", "GitHub Portfolio", "Tech Projects", 
    "Full Stack Development", "Open Source Projects", "Software Solutions", "App Development"
  ],  
};

export const certificates: Certificate[] = [
  {
    id: 1,
    certificateName: "AI For Everyone",
    description: "AI For Everyone is an online course authorized by deeplearning.ai and offered through Coursera.",
    issuer: "deeplearning.ai",
    issueDate: "06-06-2020",
    imgPath: "/images/certificates/cert1.webp",
  },
  {
    id: 2,
    certificateName: "IT Security: Defense against the digital dark arts",
    description: "IT Security: Defense against the digital dark arts is an online course authorized by Google and offered through Coursera.",
    issuer: "Google",
    issueDate: "07-10-2023",
    imgPath: "/images/certificates/cert2.webp",
  },
  {
    id: 3,
    certificateName: "Python Data Structures",
    description: "Python Data Structures is an online course authorized by the University of Michigan and offered through Coursera.",
    issuer: "University of Michigan",
    issueDate: "04-02-2022",
    imgPath: "/images/certificates/cert3.webp",
  },
  {
    id: 4,
    certificateName: "Programming for Everybody",
    description: "Programming for Everybody (Getting Started with Python) is an online course authorized by the University of Michigan and offered through Coursera.",
    issuer: "University of Michigan",
    issueDate: "06-02-2020",
    imgPath: "/images/certificates/cert4.webp",
  },
  {
    id: 5,
    certificateName: "Mendix Rapid Developer Certification",
    description: "Certification awarded for completing the Mendix Rapid Developer course, demonstrating proficiency in Mendix low-code development.",
    issuer: "Mendix",
    issueDate: "2023-09-04",
    imgPath: "/images/certificates/cert5.webp",
  },
  {
    id: 6,
    certificateName: "Voice of Customer (VoC)",
    description: "Voice of Customer (VoC) Training held in December 2021 as part of the Young Innovators Programme (YIP) 2021 conducted by the Kerala Development and Innovation Strategic Council (K-DISC).",
    issuer: "K-DISC",
    issueDate: "15-10-2021",
    imgPath: "/images/certificates/cert6.webp",
  },
  {
    id: 7,
    certificateName: "Workshop on UI/UX Design",
    description: "Workshop on UI/UX Design organized by the IEEE Photonics Society Student Chapter, Mangalam College of Engineering, Kottayam, Kerala, India.",
    issuer: "IEEE Photonics Society",
    issueDate: "17-06-2021",
    imgPath: "/images/certificates/cert7.webp",
  },
];

//Journey Page
export const journeyPage = {
  title: "Journey",
  description: "Explore my experiences and learning path that shaped my career in software development.",
  metaTitle: `${authorName}'s Career & Education Timeline`,
  metaDesc: `Trace the growth of Software Engineer ${authorName} through his academic milestones and industry experience in software development and innovation.`,
  metaKeywords: [
    `${authorName} Journey`, "Software Engineer Career", "Developer Education", "Tech Career Path", 
    "Software Engineer Experience", "Developer Timeline", "Tech Education", "Professional Development", 
    "Tech Experience", "Software Engineering Journey", "Tech Milestones", "Career Timeline", "Industry Experience"
  ],  
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    organization: "Strebentechnik Private Limited, Alappuzha",
    date: "January 2024 - Present",
    description: "Developing and maintaining software applications.",
  },
  {
    id: 2,
    title: "Intern",
    organization: "Strebentechnik Private Limited, Alappuzha",
    date: "August 2023 - January 2024",
    description: "Worked on Mendix low-code development, HTML, CSS and other technologies.",
  },
  {
    id: 3,
    title: "Data Entry Specialist",
    organization: "AITIA Infotech, Kochi",
    date: "2019 - 2020",
    description: "Handled data entry, provided telecalling support, and managed data processing in Excel for business operations.",
  },
];

export const education: Education[] = [
  {
    id: 1,
    course: "Computer Science & Engineering",
    institution: "College of Engineering and Management Punnapra, Alappuzha, Kerala",
    period: "2019 - 2023",
  },
  {
    id: 2,
    course: "Higher Secondary",
    institution: "Santa Cruz HSS Fort Kochi, Ernakulam, Kerala",
    period: "2017 - 2019",
  },
  {
    id: 3,
    course: "High School",
    institution: "St. Louis High School Mundamveli, Ernakulam, Kerala",
    period: "2014 - 2017",
  },
];

//Projects Page
export const projectPage = {
  title: "Projects",
  description: "Check out some of the projects I've worked on.",
  metaTitle: `${authorName}'s Project Portfolio`,
  metaDesc: `Browse through ${authorName}'s latest development projects, featuring modern tech stacks like React, Next.js, TypeScript, Spring Boot, and Tailwind CSS. Built to be performant, scalable, and visually stunning.`,
  metaKeywords: [
    `${authorName} Projects`, "Software Engineering Projects", "Web Development Projects", 
    "React Projects", "Next.js Projects", "TypeScript Projects", "GitHub Portfolio", "Tech Projects", 
    "Full Stack Development", "Open Source Projects", "Software Solutions", "App Development"
  ],
};

export const projects: Project[] = [
  {
    id: "project1",
    name: "MediaArms",
    description: "An advertising platform for voice ads on radio channels.",
    detailedDescription: "MediaArms is a powerful advertising platform built using Next.js, allowing businesses to order and place voice ads on selected radio channels. It streamlines ad bookings with a simple and intuitive interface, ensuring smooth transactions between advertisers and radio stations. The platform enables users to browse and select radio channels, explore a curated list of stations, and pick the best fit for their advertisements. Advertisers can define their ad campaign duration, frequency, and target audience while benefiting from real-time cost calculation based on selected time slots and ad duration. MediaArms also includes a cart functionality, allowing users to add and manage multiple ad placements before finalizing their order. Secure payments are integrated through Razorpay for seamless UPI and online transactions. Advertisers can track past and ongoing campaigns through a detailed dashboard, ensuring complete visibility of their ad history. The platform is built with Next.js, TypeScript, and Tailwind CSS on the frontend, while the backend leverages Node.js and Express, with PostgreSQL as the database. Payment integration is handled via Razorpay. This project showcases expertise in Next.js, TypeScript, payment integration, and real-time cost calculation for advertising platforms.",
    techstack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "next-auth", "Spring Boot"],
    slug: "mediaarms",
    website: "https://www.mediaarms.com",
    imgPath: "/images/projects/project1.webp"
  },
  {
    id: "project2",
    name: "People Integrator",
    description: "A survey management system with chatbot integration.",
    detailedDescription: "People Integrator is a survey management system designed to facilitate survey creation, distribution, and completion across multiple organizations and participants. The system uses role-based access for Super Admins, Organization Admins, and Participants to streamline functionality. Super Admins can create and manage questions, sections, and templates tailored to different industries. Organization Admins can group participants, select relevant templates, and schedule surveys, while Participants can respond to surveys using a chatbot interface with predefined answer selections. The system supports a scalable architecture, allowing multiple organizations, industries, and business functions to operate within a robust role-based framework. The technology stack includes Thymeleaf, Bootstrap, and jQuery for the frontend, while the backend is powered by Spring Boot (Java 11) and Apache Tomcat. The system uses RESTful APIs with Spring Security for authentication and MySQL as the database. Deployment is managed using Maven, and the application is deployed as a WAR file on Tomcat, with SSH used for secure server access and automation. The system also supports role-based authentication and secure data handling. This project showcases expertise in Spring Boot, Java, chatbot-driven surveys, and role-based access control.",
    techstack: ["Spring Boot", "Java 11", "Thymeleaf", "Bootstrap", "MySQL", "Tomcat"],
    slug: "people-integrator",
    website: "https://www.peopleintegrator.com/home",
    imgPath: "/images/projects/project2.webp"
  },
  {
    id: "project3",
    name: "Digital Passport Verification Using Blockchain",
    description: "A web-based application that enhances passport verification security using blockchain technology.",
    detailedDescription: "The Digital Passport Verification System is a decentralized application (dApp) that improves passport authentication by leveraging blockchain. Built with Solidity, React.js, and Ether.js, this project ensures secure and tamper-proof identity verification. The system eliminates fraud and enhances efficiency by allowing authorities to verify passport details via a blockchain ledger, ensuring data integrity and reducing dependency on centralized databases.",
    techstack: ["Solidity", "React.js", "Ether.js", "Node.js", "Blockchain"],
    slug: "digital-passport-verification",
    github: "https://github.com/NevinMichael10/blockchain-passport-verification",
    imgPath: "/images/projects/project3.webp"
  },
  {
    id: "project4",
    name: "Image Detection Using YOLOv5",
    description: "An advanced image detection system using YOLOv5 for the coir and rubber industries.",
    detailedDescription: "This project successfully implemented an image detection model with YOLOv5 to identify 'coir,' 'rubber,' and 'rubber coir moulded mats.' The project involved dataset collection by capturing diverse mat varieties across Alappuzha, annotation and conversion using Python, lxml, and PyQt5 for image processing, labelImg for annotation in PascalVOC format, and a custom script for YOLO format conversion. The dataset was organized into training and validation sets for optimal model performance. Model training and detection were performed using YOLOv5 with optimal parameters to enable efficient object detection. Additionally, a user-friendly GUI was developed using Tkinter to enhance the overall user experience. This project showcases expertise in computer vision, deep learning, and effective project management, leading to precise detection in industrial applications.",
    techstack: ["Python", "YOLOv5", "Tkinter"],
    slug: "mat-detection-yolov5",
    github: "https://github.com/NevinMichael10/mat-detection",
    imgPath: "/images/projects/project4.webp"
  },
  {
    id: "project5",
    name: "Prompt Desk",
    description: "A front desk management system built with Mendix for handling complaints, invoices, and weather integration.",
    detailedDescription: "Prompt Desk is a robust web application developed using Mendix, designed to enhance the interaction between employees and customers. This platform streamlines complaint handling, facilitates invoice generation, and provides real-time weather updates. It includes authentication and user roles with a single login page supporting Admin, Employee, and Customer roles. The system features secure user registration with admin approval for employees and email confirmation for all users. Real-time weather data is integrated through a Weather API. Complaint management is streamlined with efficient registration, resolution, and automated email notifications for product complaints. The platform also includes product management, allowing customer product registration and status tracking. Personalized dashboards are available for Employees, Customers, and Admins, while Admin controls provide oversight of user registrations, configurations, and system settings.",
    techstack: ["Mendix", "SCSS", "JavaScript", "CSS"],
    slug: "prompt-desk",
    github: "https://github.com/NevinMichael10/prompt-desk",
    imgPath: "/images/projects/project5.webp"
  }
]

//Tech Page
export const techPage = {
  title: "Tech",
  description: "Check out some of the technologies and tools i am using",
  metaTitle: `${authorName}'s Tech Stack`,
  metaDesc: `Browse through ${authorName}'s latest development projects, featuring modern tech stacks like React, Next.js, TypeScript, Spring Boot, and Tailwind CSS. Built to be performant, scalable, and visually stunning.`,
  metaKeywords: [
    "Tech Stacks", "Tools I Use", "React.js", "Next.js", "TypeScript", "JavaScript", "Spring Boot", "Mendix", 
    "MySQL", "PostgreSQL", "Tailwind CSS", "Zustand", "GitHub", "DigitalOcean", "Linux", "VS Code", 
    "Tech Stack Portfolio", "Development Tools", "Frontend Tech", "Backend Tech", "Mendix", "Power Automate"
  ],  
};

export const stackGroups = [
  {
    id: "coding",
    name: "Coding Tools",
    menuItems: [
      {
        imagePath: "/images/tech/vscode.png",
        name: "VS Code",
        description: "Code editor",
        url: "https://code.visualstudio.com/",
      },
      {
        imagePath: "/images/tech/material-icon-theme.png",
        name: "Material Icons",
        description: "VS Code theme",
        url: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
      },
      {
        imagePath: "/images/tech/intellij.png",
        name: "IntelliJ IDEA",
        description: "Java IDE",
        url: "https://www.jetbrains.com/idea/",
      },
      {
        imagePath: "/images/tech/sts.png",
        name: "Spring Tool Suite",
        description: "Spring IDE",
        url: "https://spring.io/tools",
      },
      {
        imagePath: "/images/tech/git.png",
        name: "Git",
        description: "Version control",
        url: "https://git-scm.com",
      },
      {
        imagePath: "/images/tech/github.png",
        name: "GitHub",
        description: "Code hosting",
        url: "https://github.com",
      },
    ],
  },
  {
    id: "design",
    name: "Design Tools",
    menuItems: [
      {
        imagePath: "/images/tech/figma.png",
        name: "Figma",
        description: "UI design",
        url: "https://www.figma.com",
      },
      {
        imagePath: "/images/tech/canva.png",
        name: "Canva",
        description: "Graphic design",
        url: "https://www.canva.com",
      },
      {
        imagePath: "/images/tech/picsart.png",
        name: "Picsart",
        description: "Photo editor",
        url: "https://picsart.com",
      },
    ],
  },
  {
    id: "hosting",
    name: "Deployment & Hosting",
    menuItems: [
      {
        imagePath: "/images/tech/vercel.png",
        name: "Vercel",
        description: "Web hosting",
        url: "https://vercel.com",
      },
      {
        imagePath: "/images/tech/netlify.png",
        name: "Netlify",
        description: "Deploy platform",
        url: "https://www.netlify.com",
      },
      {
        imagePath: "/images/tech/cloudflare.png",
        name: "Cloudflare",
        description: "DNS & CDN",
        url: "https://www.cloudflare.com/",
      },
    ],
  },
  {
    id: "tools",
    name: "Productivity Tools",
    menuItems: [
      {
        imagePath: "/images/tech/postman.png",
        name: "Postman",
        description: "API testing",
        url: "https://www.postman.com/",
      },
      {
        imagePath: "/images/tech/chatgpt.png",
        name: "ChatGPT",
        description: "AI assistant",
        url: "https://chat.openai.com",
      },
    ],
  },
  {
    id: "utilities",
    name: "Utilities",
    menuItems: [
      {
        imagePath: "/images/tech/winrar.png",
        name: "WinRAR",
        description: "File archiver",
        url: "https://www.win-rar.com",
      },
      {
        imagePath: "/images/tech/winscp.png",
        name: "WinSCP",
        description: "FTP client",
        url: "https://winscp.net",
      },
    ],
  },
  {
    id: "browsers",
    name: "Browsers",
    menuItems: [
      {
        imagePath: "/images/tech/chrome.png",
        name: "Chrome",
        description: "Web browser",
        url: "https://www.google.com/chrome/",
      },
      {
        imagePath: "/images/tech/brave.png",
        name: "Brave",
        description: "Private browser",
        url: "https://brave.com",
      },
    ],
  },
];

//Coming Soon Page
export const comingSoon = {
  title: "Coming soon",
  description: "The page you are viewing is under construction",
  metaTitle: `Coming soon`,
  metaDesc: `The page you are viewing is under construction`,
  metaKeywords: [
    "Coming Soon", "Under Construction"
  ],  
};

// Default Metadata
export const metadataValues = {
  description: `I'm ${authorName}, a passionate software engineer specializing in building innovative digital solutions using modern technologies like React, Next.js, and TypeScript.`,
  openGraph: {
    description: `Explore the portfolio of ${authorName} — a Software Engineer creating impactful projects, sharing his career journey, and more. Dive into his work with cutting-edge technologies.`,
    imagePath: "/images/logo/share.png",
    imageType: "image/png",
  },
  twitter: {
    description: "Software engineer crafting seamless digital experiences with Next.js, React, TypeScript, and more.",
    imagePath: `/images/logo/share.png`,
  },
};