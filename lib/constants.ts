export const isProduction = process.env.NODE_ENV === 'production'
export const SITE_URL = isProduction ? 'https://nevinm.netlify.app' : 'http://localhost:3000'
export const GITHUB_USERNAME = 'NevinMichael10'
export const SITE_NAME = 'Nevin Michael'
export const SITE_KEYWORDS = ['Nevin', 'Nevin Michael', 'Next.js', 'React', 'TypeScript', 'Node.js']
export const SITE_GITHUB_URL = 'https://github.com/NevinMichael10'
export const SITE_FACEBOOK_URL = 'https://www.facebook.com/Nevin.michael.28'
export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/infernal_encipherer'
export const SITE_LINKEDIN_URL = 'https://www.linkedin.com/in/nevin-michael-24716a231'

//Home Page
export const ABOUTME = {
  aboutMe: "About Me",
  knowMore: "Know more about me",
} as const;

export const contactInfo = {
  promptHeading: "Any questions?",
  promptText: "Feel free to reach out to me!",
  email: "nevinmichael28@gmail.com",
}

export const introText = {
  greeting: "I'm Nevin Michael, a Software Engineer",
  building: "building",
  websitesUsing: "websites using",
  modernTech: "modern technologies",
  location: "India • UTC/GMT +5:30",
}

export const techTags: TechTags = {
  author: "Nevin Michael",
  label: "Next.js",
  label2: "React.js",
  label3: "TypeScript",
  label4: "JavaScript",
}