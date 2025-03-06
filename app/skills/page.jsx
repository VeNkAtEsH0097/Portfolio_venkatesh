'use client'
import React, { useRef } from 'react';
import Skill from '@/assets/images/Woodbackground.png';

import cert1 from '@/assets/images/cert1.png'
import cert2 from '@/assets/images/cert2.png'
import cert3 from '@/assets/images/cert3.png'
import cert4 from '@/assets/images/cert4.png'
import cert5 from '@/assets/images/cert5.png'
import cert6 from '@/assets/images/cert6.png'
import cert7 from '@/assets/images/cert7.png'
import cert8 from '@/assets/images/cert8.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Timeline from '@/components/timeline';
import { StarsBackground } from '@/components/magicui/Starbackground';


const Skills = () => {
    const scrollRef = useRef(null);

    const handleLeftClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const handleRightClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
    return (
        <>
        
            <section
                
                className="relative min-h-screen bg-black  h-full"

            >
                <StarsBackground/>
                
                {/* <div className="absolute inset-0 w-full h-full bg-[#677182]/50"></div> */}
                {/* Header Section */}
                <div className=" rounded-b-3xl  min-h-[150px] flex flex-col justify-center items-center bg-[#333b50]">
                    <h1 className="text-4xl font-extrabold text-[#20C997] mb-2">My Skills</h1>
                    <h2 className="text-2xl font-semibold text-center text-gray-200">A showcase of my technical proficiencies</h2>
                </div>

                <div className=' max-w-screen-lg mx-auto mt-10'>

                    <div className=' flex'>
                        <div className=' text-5xl flex justify-center items-center p-2 cursor-pointer relative -top-8'><FaChevronLeft color='white' onClick={handleLeftClick} /></div>

                        <div ref={scrollRef} className="  scroll-smooth flex-1 mt-4 flex w-full snap-x gap-4 overflow-x-auto pb-5 z-10 hide-scrollbar">

                            <div className="min-w-[80%] md:min-w-[40%] ">
                                <div style={{ backgroundImage: `url(${cert1.src})` }} className=' bg-contain bg-no-repeat snap-center bg-center rounded-lg shadow-lg h-80 w-full'></div>

                            </div>
                            <div className="min-w-[80%] md:min-w-[40%] ">
                                <div style={{ backgroundImage: `url(${cert2.src})` }} className='bg-contain bg-no-repeat  snap-center bg-center rounded-lg shadow-lg h-80 w-full'></div>

                            </div>
                            <div className="min-w-[80%] md:min-w-[40%] ">
                                <div style={{ backgroundImage: `url(${cert3.src})` }} className='bg-contain bg-no-repeat  snap-center bg-center rounded-lg shadow-lg h-80 w-full'></div>

                            </div>
                            <div className="min-w-[80%] md:min-w-[40%] ">
                                <div style={{ backgroundImage: `url(${cert4.src})` }} className='bg-contain bg-no-repeat  snap-center bg-center rounded-lg shadow-lg h-80 w-full'></div>

                            </div>
                            <div className="min-w-[80%] md:min-w-[40%] ">
                                <div style={{ backgroundImage: `url(${cert5.src})` }} className='bg-contain bg-no-repeat  snap-center bg-center rounded-lg shadow-lg h-80 w-full'></div>

                            </div>
                            <div className="min-w-[80%] md:min-w-[40%] ">
                                <div style={{ backgroundImage: `url(${cert6.src})` }} className='bg-contain bg-no-repeat  snap-center bg-center rounded-lg shadow-lg h-80 w-full'></div>

                            </div>
                            <div className="min-w-[80%] md:min-w-[40%] ">
                                <div style={{ backgroundImage: `url(${cert7.src})` }} className='bg-contain bg-no-repeat  snap-center bg-center rounded-lg shadow-lg h-80 w-full'></div>

                            </div>
                            <div className="min-w-[80%] md:min-w-[40%] ">
                                <div style={{ backgroundImage: `url(${cert8.src})` }} className='bg-contain bg-no-repeat  snap-center bg-center rounded-lg shadow-lg h-80 w-full'></div>

                            </div>

                        </div>

                        <div className=' text-5xl flex justify-center items-center p-2 cursor-pointer relative -top-8'><FaChevronRight color='white' onClick={handleRightClick} /> </div>
                    </div>
                    
                    <div className="flex flex-col bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg max-w-xl mx-auto">
                        <h2><span className=' text-4xl font-bold mb-2 bg-gradient-to-r from-[#20C997] via-teal-700 to-sky-500 text-transparent bg-clip-text'>Line Up</span></h2>
                        <p className="text-gray-700 text-lg mb-4">
                            Follow the table and stage to ensure you don’t miss my skill level.
                        </p>
                        <Timeline/>
                    </div>
                    

                </div>
                


            </section>

        </>
    );
}


export default Skills;
