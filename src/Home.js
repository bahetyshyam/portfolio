import React from 'react';
import Logo from './assets/images/developer.svg'

const Home = (props) => {
    return (
        <div className="flex items-center justify-center flex-wrap md:flex-no-wrap">
            <div className="px-10 pt-10 w-full md:w-1/2">
                <img className="align-middle" src={Logo} alt="Developer" />
            </div>

            <div className="w-full md:w-1/2">
                <h1 className="px-10 font-semibold text-5xl lg:text-6xl text-blue-700 leading-tight">
                    Hi, I'm Shyam Bahety
                </h1>
                <div className="px-10 mt-5 flex flex-wrap sm:flex-no-wrap justify-start align-middle">
                    <a className="rounded-sm text-md font-semibold shadow-lg bg-blue-700 px-4 py-3 text-gray-100 mr-4" href="#">About Me</a>
                    <a className="rounded-sm text-md font-semibold shadow-lg bg-gray-100 px-4 py-3 text-blue-700 border-solid border-2 border-blue-700" href="#">Contact Me</a>
                </div>

            </div>

        </div>
    )
}

export default Home;