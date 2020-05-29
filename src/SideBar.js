import React, { Fragment, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const sidebar = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.contains(sidebar.current)) props.toggleIsOpen();
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props, sidebar]);

  return (
    <Fragment>
      <div
        ref={sidebar}
        className="fixed top-0 right-0 w-2/3 h-screen bg-blue-700"
      ></div>
      <ul className="absolute top-0 right-0 flex flex-col items-end mt-12 text-gray-200">
        <Link to="/about">
          <li className="px-4 py-2">ABOUT</li>
        </Link>
        <Link to="/about">
          <li className="px-4 py-2">WORK</li>
        </Link>
        <Link to="/about">
          <li className="px-4 py-2">CONTACT</li>
        </Link>
      </ul>
    </Fragment>
  );
};

export default SideBar;
