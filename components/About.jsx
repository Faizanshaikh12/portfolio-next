import React from 'react';

const About = () => {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-primary">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        Creative Front-End Developer offering 9+ years of experience providing high-impact web solutions
                        for diverse industry organizations. Skilled in designing, developing and testing multiple
                        web-based applications incorporating a range of technologies. Aspiring to combine broad
                        background with strong technical skills to excel as a Front-End Developer.
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-xl"
                        src="https://images.pexels.com/photos/2473183/pexels-photo-2473183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about-image" />
                </div>
            </div>
        </div>
    );
};

export default About;