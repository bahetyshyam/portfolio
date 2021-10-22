import React from "react";

interface ExperienceItem {
  title: string;
  duration: string;
  companyName: string;
  companyURL: string;
  location: string;
  contentItems: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    duration: "Aug 2020 - Present",
    companyName: "Betsol Pvt. Ltd.",
    companyURL: "https://www.betsol.com/",
    location: "Bengaluru, KA",
    contentItems: [
      "Maintaining and optimizing the user interface for a backup application using React (JS + TS) & Electron, while maximizing the code coverage to 80%",
      "Fabricated and overhauled the complete UI, integrated it with FluentUI library and converted 70% of codebase from JavaScript to TypeScript",
      "Implemented multiple new features for complicated UI components.",
      "Streamlined and built a system to handle user configurations globally and locally among users.",
      "Designed a state management library to handle users pausing/resuming their backup, increasing performance by 2x.",
      "Building a notification framework to handle, queue and track the notifications sent to the UI.",
    ],
  },
  {
    title: "Intern- Full Stack Developer",
    duration: "May 2020- Jun 2020",
    companyName: "QuickieApps",
    companyURL: "https://www.quikieapps.com/",
    location: "Bengaluru, KA",
    contentItems: [
      "Developed a desktop app for doctors, using Electron + React, which lets the doctors upload ophthalmology and endoscopy scans to the server to get back results.",
      "Built a backend using NodeJS and MongoDB to maintain the feedback of results, by 1000's of doctors.",
    ],
  },
  {
    title: "Intern - Full Stack Developer",
    duration: "Jan 2020 - Mar 2020",
    companyName: "Betsol Pvt. Ltd.",
    companyURL: "https://www.betsol.com/",
    location: "Bengaluru, KA",
    contentItems: [
      "Worked on an Automation DevOps tool called LeTo. After working on it, the project had negligible bugs and performed 1.3x better.",
      "Developed a new feature for a client and built RESTful API's using NodeJS.",
    ],
  },
];

const Experience = () => {
  return (
    <>
      <div className="text-3xl font-semibold mt-8 my-3 text-blue-700">
        Experience
      </div>
      <div>
        {experienceItems.map((item, index) => {
          return (
            <div className="mb-10" key={index}>
              <div className="block sm:flex sm:justify-between sm:items-center ">
                <div className="text-2xl text-semibold">{item.title}</div>
                <i>{item.duration}</i>
              </div>
              <a
                href={item.companyURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bold"
              >
                {`${item.companyName} - ${item.location}`}
              </a>
              <ul className="list-disc list-inside">
                {item.contentItems.map((contentItem, index) => (
                  <li key={index}>{contentItem}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
