export interface ProjectDetail {
  imgUrl: string;
  name: string;
  description: string;
  projectUrl: string;
  githubUrl: string;
  tags: string[];
}

export const projectsData: ProjectDetail[] = [
  {
    imgUrl: "/images/Movies.png",
    name: "Trending Movies",
    description: "This web app lets you browse through the most popular, trending, newest and top rated movies.",
    projectUrl: "https://movies.shyambahety.com/",
    githubUrl: "https://github.com/bahetyshyam/shyam-movies",
    tags: ["React", "API", "CSS"],
  },
  {
    imgUrl: "/images/Sorting.png",
    name: "Sorting Visualizer",
    description: "Ever wondered how sorting looks like visually? Click to see how sorting algorithms sort arrays through animations.",
    projectUrl: "https://sorting-viz.shyambahety.com/",
    githubUrl: "https://github.com/bahetyshyam/sorting-app",
    tags: ["React", "Algorithms", "Animation"],
  },
  {
    imgUrl: "/images/YesMaybeNo.png",
    name: "YesMaybeNo",
    description: "A mobile app which lets you create groups and events among friends and respond Yes/Maybe/No.",
    projectUrl: "https://github.com/bahetyshyam/YesMaybeNo/",
    githubUrl: "https://github.com/bahetyshyam/YesMaybeNo",
    tags: ["React Native", "Mobile", "Firebase"],
  },
  {
    imgUrl: "/images/Automated Attendance System.png",
    name: "Automated Attendance System",
    description: "This web app marks the attendance of a class with just a click of a photo of the whole class.",
    projectUrl: "https://automated-attendance-system.netlify.app/",
    githubUrl: "https://github.com/bahetyshyam/web-app-automated-attendance-system",
    tags: ["React", "ML", "Python"],
  },
  {
    imgUrl: "/images/Random Quote Generator.png",
    name: "Random Quote Generator",
    description: "Need a daily dose of motivation and share it with the world? What are you waiting for?",
    projectUrl: "https://random-quote-generator-shyam.netlify.app/",
    githubUrl: "https://github.com/bahetyshyam/random-quote-generator",
    tags: ["JavaScript", "API", "CSS"],
  },
  {
    imgUrl: "/images/Weather App.png",
    name: "Weather App",
    description: "Want to see the forecast and current weather in your location? Head on to this web app right away.",
    projectUrl: "https://weather-app-shyam.netlify.app/",
    githubUrl: "https://github.com/bahetyshyam/weather-app",
    tags: ["React", "API", "CSS"],
  },
];
