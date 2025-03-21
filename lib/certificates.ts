export type Post = {
  id: number;
  certificateName: string;
  description: string;
  issueDate: string;
  issuer: string;
  imgPath: string;
};

export const posts: Post[] = [
  {
    id: 1,
    certificateName: "AI For Everyone",
    description:
      "AI For Everyone is an online course authorized by deeplearning.ai and offered through Coursera.",
    issuer: "deeplearning.ai",
    issueDate: "06-06-2020",
    imgPath: "/images/certificates/cert1.webp",
  },
  {
    id: 2,
    certificateName: "IT Security: Defense against the digital dark arts",
    description:
      "IT Security: Defense against the digital dark arts is an online course authorized by Google and offered through Coursera.",
    issuer: "Google",
    issueDate: "07-10-2023",
    imgPath: "/images/certificates/cert2.webp",
  },
  {
    id: 3,
    certificateName: "Python Data Structures",
    description:
      "Python Data Structures is an online course authorized by the University of Michigan and offered through Coursera.",
    issuer: "University of Michigan",
    issueDate: "04-02-2022",
    imgPath: "/images/certificates/cert3.webp",
  },
  {
    id: 4,
    certificateName: "Programming for Everybody",
    description:
      "Programming for Everybody (Getting Started with Python) is an online course authorized by the University of Michigan and offered through Coursera.",
    issuer: "University of Michigan",
    issueDate: "06-02-2020",
    imgPath: "/images/certificates/cert4.webp",
  },
  {
    id: 5,
    certificateName: "Mendix Rapid Developer Certification",
    description:
      "Certification awarded for completing the Mendix Rapid Developer course, demonstrating proficiency in Mendix low-code development.",
    issuer: "Mendix",
    issueDate: "2023-09-04",
    imgPath: "/images/certificates/cert5.webp",
  },
  {
    id: 6,
    certificateName: "Voice of Customer (VoC)",
    description:
      "Voice of Customer (VoC) Training held in December 2021 as part of the Young Innovators Programme (YIP) 2021 conducted by the Kerala Development and Innovation Strategic Council (K-DISC).",
    issuer: "K-DISC",
    issueDate: "15-10-2021",
    imgPath: "/images/certificates/cert6.webp",
  },
  {
    id: 7,
    certificateName: "Workshop on UI/UX Design",
    description:
      "Workshop on UI/UX Design organized by the IEEE Photonics Society Student Chapter, Mangalam College of Engineering, Kottayam, Kerala, India.",
    issuer: "IEEE Photonics Society",
    issueDate: "17-06-2021",
    imgPath: "/images/certificates/cert7.webp",
  },
];
