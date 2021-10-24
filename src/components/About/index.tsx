import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
          Hello once again. I'm Shyam, a Full Stack Developer from Bengaluru,
          India. I’m inclined towards tech and love working on front end as well
          as back end technologies.
        </div>
        <div className="my-3">
          Having graduated with a Information Science Engineering degree from
          JSSATE, I’ve always been interested in various nuances of Software and
          Development. I’ve also worked on multiple projects which has shaped me
          into a Full Stack Developer. Some of them can be viewed under the{" "}
          <Link to="/projects" className="text-blue-700">
            Projects
          </Link>{" "}
          section.
        </div>
        <div className="my-3">
          I'm currently working at BETSOL, contributing towards building a
          Backup application which can be used by millions of users. I come with
          a previous experience of having interned at organisations where I’ve
          helped build better and performant products.
        </div>

        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default About;
