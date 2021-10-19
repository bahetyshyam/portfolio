import React from "react";

const About = () => {
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
          I passed out of engineering from JSS Academy of Technical Education.
          During my college I worked on multiple projects which interested me
          and that journey has slowly made me evolve into a Full Stack Developer
          over time. You can visit the "Work" section to have a look at some of
          the projects that I have worked on.
        </div>
        <div className="my-3">
          I'm currently working at Betsol and helping the organization build a
          Backup application which can be used my millions of users very soon.
          In the past I have also interned at many places helping them build
          better and performant products.
        </div>

        <div className="text-2xl font-semibold mt-8 my-3">Skills</div>
        <div>
          <ul className="list-disc list-inside">
            <li>ReactJS</li>
            <li>TypeScript/JavaScript8</li>
            <li>HTML/CSS</li>
            <li>RESTful API's</li>
            <li>Data management - Redux</li>
            <li>NodeJs</li>
            <li>ExpressJS</li>
            <li>Unit testing</li>
            <li>C#/.NetCore</li>
            <li>Python</li>
            <li>MySQL/MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
