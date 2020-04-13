import React from 'react';
import Logo from './assets/svg/developer.svg'

const Home = (props) => {
    return (
        <div className="container mx-auto flex items-center justify-center flex-wrap md:flex-no-wrap h-full">
            <div className="px-5 sm:px-10 pt-10 w-full md:w-1/2">
                <img className="align-middle" src={Logo} alt="Developer" />
            </div>

            <div className="w-full md:w-1/2 px-5 sm:px-10">
                <h1 className="mt-4 md:mt-0 font-semibold xs:text-4xl sm:text-5xl text-blue-700 leading-tight">
                    Hi, I'm Shyam Bahety
                </h1>
                <p className="mt-3 text-base text-blue-600">
                    I am a full stack developer and a freelancer who is enthusiastic about Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam ipsa distinctio tempora provident consequuntur numquam dicta repellendus, eos vero, autem incidunt quos cum fugiat sint veniam aut accusamus asperiores!
                </p>
                <div className="mt-5 flex flex-wrap sm:flex-no-wrap justify-start align-middle">
                    <a className="px-4 py-2 rounded-sm xs:text-sm sm:text-base font-semibold shadow-lg bg-blue-700 text-gray-100 border-solid border-2 border-blue-700 mr-4" href="#">About Me</a>
                    <a className="px-4 py-2 rounded-sm xs:text-sm sm:text-base font-semibold shadow-lg bg-gray-100 text-blue-700 border-solid border-2 border-blue-700" href="#">Contact Me</a>
                </div>

            </div>
        </div>
    )
}

export default Home;