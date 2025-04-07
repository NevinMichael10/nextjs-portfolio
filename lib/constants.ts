export const isProduction = process.env.NODE_ENV === "production";
export const SITE_URL = isProduction ? "https://nevinm.netlify.app" : "http://localhost:3000";
export const GITHUB_USERNAME = "NevinMichael10";
export const SITE_NAME = "Nevin Michael";
export const SITE_KEYWORDS = ["Nevin", "Nevin Michael", "Next.js", "React", "TypeScript", "Node.js"];
export const SITE_GITHUB_URL = "https://github.com/NevinMichael10";
export const SITE_FACEBOOK_URL = "https://www.facebook.com/Nevin.michael.28";
export const SITE_INSTAGRAM_URL = "https://www.instagram.com/infernal_encipherer";
export const SITE_LINKEDIN_URL = "https://www.linkedin.com/in/nevin-michael-24716a231";

//Home Page
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
  greeting: "I'm Nevin Michael, a Software Engineer",
  building: "building",
  websitesUsing: "websites using",
  modernTech: "modern technologies",
  location: "India • UTC/GMT +5:30",
};

export const techTags: TechTags = {
  author: "Nevin Michael",
  label: "Next.js",
  label2: "React.js",
  label3: "TypeScript",
  label4: "JavaScript",
};

//About Page
export const aboutPage = {
  title: "About",
  description: "Hi there! I am Nevin Michael, a Software Engineer who loves to solve problems using modern technologies.",
};

export const whoAmIData = {
  bio: {
    role: "Software Engineer",
    birthDate: "2001-10-28", //yyyy-mm-dd
    description:
      "I'm passionate about building cutting-edge applications that solve real-world problems. With a blend of technical expertise, creative thinking, and a constant hunger for learning, I develop solutions that are not only functional but also impactful.",
  },
  skills: [
    "React.js",
    "Next.js",
    "Spring Boot",
    "Mendix",
    "PostgreSQL",
    "MySQL",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Git",
    "GitHub",
    "DigitalOcean",
    "Linux",
    "Power Automate",
    "Watson Orchestrate",
    "Zustand",
    "VS Code",
    "IntelliJ",
    "STS",
    "Canva",
    "Photoshop",
  ],
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