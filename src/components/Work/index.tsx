import React, { useEffect } from "react";
import WorkItem from "./WorkItem";

export interface ProjectDetail {
  imgUrl: string;
  name: string;
  description: string;
  projectUrl: string;
  githubUrl: string;
}

const projectDetails: ProjectDetail[] = [
  {
    imgUrl: "https://via.placeholder.com/1400x1200",
    name: "Automated Attendance System",
    description:
      "This web app marks the attendance of a class with just a click of a photo of the whole class. Try finding my photo and upload it to see my attendance marked ;)",
    projectUrl: "https://automated-attendance-system.netlify.app/",
    githubUrl:
      "https://github.com/bahetyshyam/web-app-automated-attendance-system",
  },
  {
    imgUrl: "https://via.placeholder.com/1400x1200",
    name: "YesMaybeNo",
    description:
      "A mobile app which lets you create groups and events among friends and respond Yes/Maybe/No.",
    projectUrl: "https://github.com/bahetyshyam/YesMaybeNo/",
    githubUrl: "https://github.com/bahetyshyam/YesMaybeNo",
  },
  {
    imgUrl: "https://via.placeholder.com/1400x1200",
    name: "Random Quote Generator",
    description:
      "Need a daily dose of motivation and share it with the world? What are you waiting for? ",
    projectUrl: "https://random-quote-generator-shyam.netlify.app/",
    githubUrl: "https://github.com/bahetyshyam/random-quote-generator",
  },
  {
    imgUrl: "https://via.placeholder.com/1400x1200",
    name: "Weather App",
    description:
      "Want to see the forecast and current weather in your location? Head on to this web app right away.",
    projectUrl: "https://weather-app-shyam.netlify.app/",
    githubUrl: "https://github.com/bahetyshyam/weather-app",
  },
  {
    imgUrl: "https://via.placeholder.com/1400x1200",
    name: "WhatsApp Clone",
    description:
      "This is a clone of WhatsApp and lets you chat with registered users. Just Sign up and get started. ",
    projectUrl: "https://whatsapp-clone-client.netlify.app/",
    githubUrl: "https://github.com/bahetyshyam/WhatsApp-Clone-Client",
  },
  {
    imgUrl: "https://via.placeholder.com/1400x1200",
    name: "Rick & Morty",
    description:
      "View all your favourite characters from Rick & Morty and get to know about them.",
    projectUrl: "https://rick-and-morty-shyam.netlify.app/",
    githubUrl: "https://github.com/bahetyshyam/rick-and-morty",
  },
  {
    imgUrl: "https://via.placeholder.com/1400x1200",
    name: "Adopt Pets",
    description: "This app lets you adopt pets in and around your area.",
    projectUrl: "https://adopt-me-shyam.netlify.app/",
    githubUrl: "https://github.com/bahetyshyam/adopt-pets",
  },
  {
    imgUrl: "https://via.placeholder.com/1400x1200",
    name: "Moon Forecast",
    description:
      "My relatives kept bothering me with asking the moon forecast every now and then, so I made them a web app.",
    projectUrl: "https://app.netlify.com/sites/moon-forecast-shyam/overview/",
    githubUrl: "https://github.com/bahetyshyam/moon-forecast",
  },
];

const Work = () => {
  useEffect(() => {
    document.title = "Work | Shyam Bahety";
  }, []);
  return (
    <div className="w-full mt-10 leading-8 px-5 py-5">
      <div className="text-4xl sm:text-5xl text-blue-700 leading-tight font-semibold text-center">
        Work
      </div>
      <div className="flex items-start flex-wrap -mx-5">
        {projectDetails.map((item) => (
          <WorkItem projectDetail={item} />
        ))}
      </div>
    </div>
  );
};

export default Work;
