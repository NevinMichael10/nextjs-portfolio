export type Project = {
  name: string
  description: string
  techstack: string[]
  slug: string
  homepage?: string
  github?: string
}

export const projects: Project[] = [
  {
    name: "Project Alpha",
    description: "A cutting-edge AI project.",
    techstack: ["Next.js", "TypeScript", "Tailwind CSS"],
    slug: "project-alpha",
    homepage: "home",
    github: "string"
  },
  {
    name: "Project Beta",
    description: "A blockchain-based solution.",
    techstack: ["Solidity", "Ethereum", "Hardhat"],
    slug: "project-beta",
    homepage: "home",
    github: "string"
  }
]
