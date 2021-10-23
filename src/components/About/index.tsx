import React, { useEffect } from "react";
import Experience from "./Experience";
import Skills from "./Skills";

const About = () => {
  useEffect(() => {
    document.title = "About | Shyam Bahety";
  }, []);
  return (
    <div className="flex items-center flex-col w-full mt-10">
      <div className="max-w-4xl leading-8 px-5 py-5">
        <h2 className="text-4xl sm:text-5xl text-blue-700 leading-tight font-semibold text-center mb-4">
          About me
        </h2>
        <div className="my-3">
          Hello once again. I'm Shyam, a Full Stack Developer from Bengaluru
          India. I love to work on both on the front end as well as back end
          technologies.
        </div>
        <div className="my-3">
          I graduated from JSS Academy of Technical Education as a Software
          Engineer. During my college, I worked on multiple projects which
          interested me and that journey has slowly made me evolve into a Full
          Stack Developer over time. You can visit the "Work" section to have a
          look at some of the projects that I have worked on.
        </div>
        <div className="my-3">
          I'm currently working at Betsol and helping the organization build a
          Backup application which can be used my millions of users very soon.
          In the past I have also interned at many places helping them build
          better and performant products.
        </div>

        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default About;
