"use client";

const whoAmIData = {
  bio: {
    role: "Software Engineer",
    birthDate: "2001-10-28",
    description:
      "I'm passionate about building cutting-edge applications that solve real-world problems. With a blend of technical expertise, creative thinking, and a constant hunger for learning, I develop solutions that are not only functional but also impactful."
  },
  skills: [
    "React.js", "Next.js", "Spring Boot", "Mendix", "PostgreSQL", "MySQL",
    "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap",
    "Git", "GitHub", "DigitalOcean", "Linux", "Power Automate", 
    "Watson Orchestrate", "Zustand", "VS Code", "IntelliJ", "STS", 
    "Canva", "Photoshop"
  ],
  whyMe: [
    "A creative thinker with a knack for solving challenging problems.",
    "Always on the pulse of the latest tech trends to deliver forward-thinking solutions.",
    "A team player with a passion for collaboration and innovation."
  ]
};

export default function WhoAmI() {
  const birthDate = new Date(whoAmIData.bio.birthDate);
  const currentDate = new Date();
  const age =
    currentDate.getFullYear() - birthDate.getFullYear() - (currentDate < new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

  return (
    <section className="mx-auto">
      <div className="flex flex-col leading-8">
        <h1 className="text-2xl font-bold">WHO AM I</h1>
        <p className="mt-6">
          I'm a <span className="text-blue-500 font-semibold">{whoAmIData.bio.role}</span>, currently <span className="text-red-500 font-semibold">{age}</span> years old.{" "}
          {whoAmIData.bio.description}
        </p>

        <h2 className="text-2xl font-bold mt-12">Skills and tools</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {whoAmIData.skills.map((skill, index) => (
            <li key={index} className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
              {skill}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-12">Why me?</h2>
        <ul className="mt-6 list-disc marker:text-red-500 pl-6">
          {whoAmIData.whyMe.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
