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
    title: "Software Development Engineer - UI ",
    duration: "Dec 2021 - Aug 2023",
    companyName: "CommerceIQ",
    companyURL: "https://commerceiq.ai/",
    location: "Bengaluru, KA",
    contentItems: [
      "Played a key role in the front-end web app development for a significant section of the organization's product, elevating user experience and functionality.",
      "Spearheaded the development and successful delivery of high-impact features, including Advertising Campaign Management for retail giants like Walmart and Target. This strategic initiative led to an impressive 80% contract renewal rate among customers.",
      "Pioneered the conception and development of Campaign Creation features for industry leaders like Amazon and Walmart, resulting in a remarkable 120% expansion of our customer base.",
      "Engineered configurable, reusable components, enhancing adaptability and functionality based on dynamic configurations.",
      "Received recognition and an award for the swift delivery of a product, instrumental in establishing a partnership with Walmart. The success of this project led to CommerceIQ's official designation as partners for advertisement tech platforms.",
    ],
  },
  {
    title: "Full Stack Developer",
    duration: "Aug 2020 - Dec 2021",
    companyName: "Betsol Pvt. Ltd.",
    companyURL: "https://www.betsol.com/",
    location: "Bengaluru, KA",
    contentItems: [
      "Managed and optimized the user interface of Rebit, a backup application developed using React (JavaScript + TypeScript) & ElectronJS. Achieved a substantial 80% code coverage to ensure robust and reliable software quality.",
      "Engineered a comprehensive User Interface overhaul, integrating FluentUI library and transitioning 70% of the codebase from JavaScript to TypeScript for enhanced functionality and maintainability.",
      "Executed the implementation of multiple new features for intricate UI components, enhancing overall functionality and user experience.",
      "Engineered a system for global and local user configuration management, ensuring efficient customization for individuals.",
      "Devised a state management library enabling users to seamlessly pause and resume backups, leading to a notable 2x boost in performance.",
      "Constructed a notification framework responsible for handling, queuing, and tracking notifications sent to the User Interface, ensuring an organized and efficient notification system.",
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
      "Led User Interface enhancements on the Automation DevOps tool, LeTo, resulting in a seamless deployment and achieving a remarkable 1.3x performance improvement.",
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
