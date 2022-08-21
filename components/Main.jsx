import React from 'react';
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LET{"'"}S Build something together
                    </p>
                    <h1 className="py-4 text-gray-700">Hi, I{"'"}m <span className="text-primary">Faizan</span></h1>
                    <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        An enthusiastic and professional, and extremely experienced engineer, who enjoys being part of
                        Leading a successful and productive team. I am very quick to grasp new ideas and concepts, and
                        can develop innovative and creative solutions to problems. Able to work well on own initiative
                        and can demonstrate the high levels of motivation required to meet the tightest of deadlines.
                        Even Under significant pressure, possesses a strong ability to perform effectively.
                    </p>
                    <div className="flex justify-between items-center max-w-[330px] m-auto py-4">
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 cursor-pointer text-primary p-6 hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn/>
                        </div>
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 cursor-pointer text-primary p-6 hover:scale-110 ease-in duration-300">
                            <FaGithub/>
                        </div>
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 cursor-pointer text-primary p-6 hover:scale-110 ease-in duration-300">
                            <HiMail/>
                        </div>
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 cursor-pointer text-primary p-6 hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;