import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import ItemGrid from "@/components/tech/item-grid";

const title = "Tech";
const description = "Check out some of the technologies and tools i am using";

export const metadata: Metadata = {
  title: `${title} page`,
  description: `${description}`,
};

const groups = [
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
      {
        imagePath: "/images/tech/vlc.png",
        name: "VLC",
        description: "Media player",
        url: "https://www.videolan.org/vlc/",
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

export default function Page() {
  return (
    <>
      <PageTitle title={title} description={description} />
      <ItemGrid groups={groups} />
    </>
  );
}