"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const experiences: Experience[] = [
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
    description:
      "Worked on Mendix low-code development, HTML, CSS and other technologies.",
  },
  {
    id: 3,
    title: "Data Entry Specialist",
    organization: "AITIA Infotech, Kochi",
    date: "2019 - 2020",
    description:
      "Handled data entry, provided telecalling support, and managed data processing in Excel for business operations.",
  },
];

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Experience = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5,
      }}
      className=""
    >
      <h2 className="text-2xl font-bold mt-12">Experience</h2>
      <ol className="overflow-hidden mt-6">
        {experiences.map((item, stepIdx) => (
          <li
            key={item.id}
            className={cn(
              stepIdx !== experiences.length - 1 ? "pb-6" : "",
              "relative"
            )}
          >
            <div className="absolute left-4 -ml-px mt-1 h-full w-[1px] bg-gray-200 dark:bg-border" />
            <div className="group relative flex items-start overflow-hidden">
              <span className="ml-2.5 mt-1 flex items-center">
                <span className="relative z-10 flex w-3 h-3 items-center justify-center rounded-full bg-blue-400 dark:bg-anchor"></span>
              </span>
              <motion.span
                className="ml-4 -m-1 flex min-w-0 flex-col overflow-hidden"
                initial={{
                  x: 30,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <motion.h3
                  className="text-lg font-semibold overflow-hidden"
                  initial={{
                    x: 30,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  {item.title}
                </motion.h3>
                <p className="">{item.organization}</p>
                <p className="">{item.date}</p>
                {item.description && <p className="">{item.description}</p>}
              </motion.span>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

export default Experience;
