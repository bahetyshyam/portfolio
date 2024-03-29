import React, { useState, FunctionComponent } from "react";
import MenuIcon from "../../assets/svg/menu.svg";
import SideBar from "../SideBar";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 w-full" id="header">
      <div className="w-full bg-blue-700">
        <div className="relative container mx-auto mt-0 px-5 py-4 ">
          <nav className="md:flex md:flex-row md:justify-between">
            <div className="flex flex-row justify-between align-middle">
              <Link to="/">
                <span className="text-gray-200 tracking-wider font-semibold text-lg">
                  SHYAM BAHETY
                </span>
              </Link>
              <img
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-4 text-gray-200 z-10"
                src={MenuIcon}
                alt="MenuIcon"
              />
              {/* <svg className="w-4 h-4 text-gray-200 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg> */}
            </div>

            <ul className="hidden md:flex md:flex-row text-gray-200">
              <li className="pr-5 tracking-wide">
                <Link to="/about">
                  <span>ABOUT</span>
                </Link>
              </li>
              <li className="pr-5 tracking-wide">
                <Link to="/projects">
                  <span>PROJECTS</span>
                </Link>
              </li>
              {/* <li className="pr-5"><a href="#">Three</a></li> */}
              <li className="tracking-wide">
                <Link to="/contact">
                  <span>CONTACT</span>
                </Link>
              </li>
            </ul>
          </nav>

          {isOpen && <SideBar toggleIsOpen={toggleIsOpen} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
