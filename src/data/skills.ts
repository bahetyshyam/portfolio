export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS/Sass", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Go", "Java", "C#", ".NET Core", "Flask"],
  },
  {
    name: "Mobile & Desktop",
    skills: ["React Native", "Electron.js"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Google Cloud Platform", "Docker", "Jenkins", "Linux"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "SQL", "MS SQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "Jira", "Unit Testing"],
  },
];
