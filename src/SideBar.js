import React, { Fragment, useRef, useEffect } from 'react';

const SideBar = (props) => {

    const sidebar = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if(!event.target.contains(sidebar.current))
                props.toggleIsOpen()
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };

    }, [props, sidebar]);

    return (
        <Fragment>
            <div ref={sidebar} className="fixed top-0 right-0 w-2/3 h-screen bg-blue-700"></div>
            <ul className="absolute top-0 right-0 flex flex-col items-end mt-12 text-gray-200">
                <li className="px-4 py-2">ABOUT</li>
                <li className="px-4 py-2">WORK</li>
                <li className="px-4 py-2">CONTACT</li>
            </ul>
        </Fragment>
    )
}

export default SideBar;