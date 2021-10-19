import React, { Fragment, useRef, useEffect, FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface IProps {
  toggleIsOpen: () => void;
}

const SideBar: FunctionComponent<IProps> = (props) => {
  const sidebar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!(event.target as HTMLElement).contains(sidebar.current))
        props.toggleIsOpen();
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
        <Link to="/work">
          <li className="px-4 py-2">WORK</li>
        </Link>
        <Link to="/contact">
          <li className="px-4 py-2">CONTACT</li>
        </Link>
      </ul>
    </Fragment>
  );
};

export default SideBar;
