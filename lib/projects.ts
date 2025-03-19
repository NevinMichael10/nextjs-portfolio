export type Project = {
  id: string
  name: string
  description: string
  detailedDescription: string
  techstack: string[]
  slug: string
  imgPath: string
  website?: string
  github?: string
  privateRepo?: boolean
}

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