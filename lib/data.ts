import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import matrixImg from "@/public/Matrix.jpeg";
import umungImg from "@/public/Umung.jpeg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Executive",
    location: "InternWare - Internship Cell",
    description:
      "Managed and built various event websites in a team, mainly developed Frontend UIs.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "Technical Mentor",
    location: "InternWare - Internship Cell",
    description:
      "Promoted to Technical Mentor in the same cell, learnt in depth knowledge of website management and mentored various members of the team.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Software Developer",
    location: "Enord, Internship",
    description:
      "Developed multiple pages and managed the entire website for Enord, an AI-based drones startup.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelancer, India",
    description:
      "Currently looking for the freelance or full time job opportunities as a full-stack developer.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Umung",
    description:
      "Developed a comprehensive website with a registration portal for Umung - a Model United Nations hosted by InternWare.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP/SQL"],
    imageUrl: umungImg,
  },
  {
    title: "Matrix",
    description:
      "A Tech-Fest website built with Vanilla CSS, JavaScript, integrated with Three.js, and a PHP/SQL backend.",
    tags: ["HTML", "CSS", "JavaScript", "Three.js", "PHP/SQL"],
    imageUrl: matrixImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "EJS",
  "MongoDB",
  "Redux",
  "Mongoose",
  "PHP",
  "Express",
  "MySQL",
  "C++",
  "Three.js",
  "Framer Motion",
] as const;
