
import Link from "next/link";


const Resume = () => {
    return (<div className=" min-h-screen bg-[#677182]" style={{ backgroundAttachment: 'fixed' }}>
        <div className="bg-[#333b50]   rounded-b-3xl  min-h-[150px] flex flex-col justify-center items-center">
            <h1 className="text-4xl font-extrabold text-[#20C997] mb-2">📝 Resume</h1>
            <h2 className="text-2xl font-semibold text-gray-200">This resume isn't about ATS scores—it's about SEO scores.</h2>

        </div>
        
        <div className=" relative mt-16  py-2 rounded-md px-2 max-w-5xl mx-auto">
            <div className=" absolute top-0 left-1/2 -ml-2 mt-3  w-2 h-[99%] rounded-full bg-gradient-to-b from-[#677182] to-[#333b50]"></div>
            <div className=" grid grid-cols-2">
                <div>
                    <div className="p-6 bg-[#677182] shadow-lg rounded-tl-lg">
                        <h2 className="text-xl font-bold text-[#00FF00] border-b-2 pb-1">EDUCATION</h2>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-white">B.E - Information Science & Technology</h3>
                            <p className="text-gray-300">Presidency University</p>
                            <p className="text-sm text-gray-100">07/2019 - 07/2023 • CGPA: 7.7</p>

                            <p className="mt-2 font-medium text-gray-300">SGPA of all semesters:</p>
                            <ul className="grid grid-cols-2 gap-x-8 text-gray-100 text-sm">
                                <li>1st semester - 6.92</li>
                                <li>2nd semester - 6.96</li>
                                <li>3rd semester - 8.58</li>
                                <li>4th semester - 8.25</li>
                                <li>5th semester - 8.10</li>
                                <li>6th semester - 7.31</li>
                                <li>7th semester - 7.86</li>
                                <li>8th semester - 7.93</li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-300">Higher Secondary</h3>
                            <p className="text-gray-300">Narayana College</p>
                            <p className="text-sm text-gray-100">05/2017 - 05/2019 • CBSE</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-300">Secondary School</h3>
                            <p className="text-gray-300">Narayana e Techno School</p>
                            <p className="text-sm text-gray-100">05/2016 - 05/2017 • CGPA: 9.40</p>
                        </div>
                    </div>
                    <div className="p-4 bg-[#677182] shadow-lg">
                        <h2 className="text-xl font-bold text-[#00FF00] border-b-2 shadow-lg border-gray-300 pb-1">
                            PROFESSIONAL PROJECTS
                        </h2>

                        <div className="mt-4 ">
                            {/* Digivault */}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold  text-white">
                                    Digivault <span className="text-gray-300">(01/2024 - Present)</span>
                                </h3>
                                <p className="text-gray-100 text-sm mt-1">
                                    - A highly secure vault for storing **passwords and files**.
                                    - Files are **converted to Base64** and securely stored in the **PostgreSQL** database.
                                    - **Two-factor authentication** ensures access is granted only to verified users.
                                    - Users can **download stored files** when needed with full encryption.
                                </p>
                                <p className="text-gray-200 text-sm mt-1">
                                    <strong>Tech Stack:</strong> React, Node.js, PostgreSQL, Tailwind CSS, Daisy UI
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-white">
                                    Asset Management System <span className="text-gray-300">(Ongoing)</span>
                                </h3>
                                <p className="text-gray-100 text-sm mt-1">
                                    - A **comprehensive asset tracking system** for managing company assets.
                                    - Tracks the **full lifecycle** of assets from **purchase to e-waste disposal**.
                                    - Categorizes assets into **IT, Non-IT, and AV** for easy management.
                                    - Enables **real-time monitoring** and status updates of all assets.
                                    - Tracks which employee is using which asset and allows for asset allocation in case of new employees or lost assets.
                                </p>
                                <p className="text-gray-200 text-sm mt-1">
                                    <strong>Tech Stack:</strong> React, Node.js, PostgreSQL, Material UI
                                </p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-white">
                                    To-Do Application <span className="text-gray-300">(Ongoing)</span>
                                </h3>
                                <p className="text-gray-100 text-sm mt-1">
                                    - A **fully functional to-do application** with session management.
                                    - Built using **Angular** for the front-end and **Spring Boot** for the back-end.
                                    - Utilizes **CSS** for styling to ensure a responsive and user-friendly interface.
                                    - Supports **individual user sessions** so different users can manage their own to-do lists.
                                </p>
                                <p className="text-gray-200 text-sm mt-1">
                                    <strong>Tech Stack:</strong> Angular, Spring Boot, CSS
                                </p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-white">
                                    Discuss Platform <span className="text-gray-300">(Ongoing)</span>
                                </h3>
                                <p className="text-gray-100 text-sm mt-1">
                                    - Developed a **dynamic discussion platform** enabling users to log in seamlessly using their Google accounts.
                                    - Facilitated **topic creation** and **content posting**, allowing users to initiate and engage in meaningful discussions.
                                    - Implemented features for **viewing and commenting** on posts, fostering a collaborative and interactive community environment.
                                </p>
                                <p className="text-gray-200 text-sm mt-1">
                                    <strong>Tech Stack:</strong> Next.js, Prisma, Next UI
                                </p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-white">
                                    Rental House Posting Platform <span className="text-gray-300">(Ongoing)</span>
                                </h3>
                                <p className="text-gray-100 text-sm mt-1">
                                    - Developed a **comprehensive rental house posting platform** where users can log in using their Google accounts.
                                    - Provided options for users to **buy or rent** properties, catering to diverse needs.
                                    - Implemented a feature for users to **send messages to property owners**, expressing their interest in specific listings.
                                    - Ensured data integrity and user input validation using **Yup**.
                                    -can even save the intrested property for later
                                </p>
                                <p className="text-gray-200 text-sm mt-1">
                                    <strong>Tech Stack:</strong> Next.js, Prisma, Next Auth, Yup
                                </p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-white">
                                    Doctor's Website <span className="text-gray-300">(Completed)</span>
                                </h3>
                                <p className="text-gray-100 text-sm mt-1">
                                    - Developed a **static website** for a hospital, showcasing its services and specialties.
                                    - Included **contact details** and a **Google Maps location** to help users easily find the hospital.
                                    - Added a **button in the footer** for quick access to the hospital's location on Google Maps.
                                </p>
                                <p className="text-gray-200 text-sm mt-1">
                                    <strong>Tech Stack:</strong> Next js 
                                </p>
                            </div>


                        </div>
                    </div>

                </div>
                <div><div className="p-6  rounded-tr-lg bg-[#677182] shadow-lg">
                    <Link href="/skills">
                        <h2 className="text-xl font-bold text-[#00FF00] border-b-2  pb-1">
                            SKILLS
                        </h2>
                    </Link>

                    <div className="mt-4 flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">React JS</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Next.js</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">JavaScript</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">PostgreSQL</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Basic MongoDB</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Java</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Android Studio</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Node.js</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Basic Clouds</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Basic Langchain</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Basic LLM</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Tailwind</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">MUI</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">HTML</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">CSS</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Angular.js</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Material UI</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Daisy UI</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Next UI</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">NextAuth</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">JWT</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Session-based Auth</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">React Native</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Prisma</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Spring Boot</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Django (Basic)</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">SMTP</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Google API</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Zod</span>
                        <span className="px-3 py-1 bg-[#20C997] text-white font-semibold rounded-lg">Yup</span>
                    </div>

                </div>
                    <div className="p-4  bg-[#677182] shadow-lg ">
                        <h2 className="text-xl font-bold text-[#00FF00] border-b-2 border-gray-300 pb-1">
                            PERSONAL PROJECTS
                        </h2>

                        <div className="mt-4">

                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-white">
                                    Digital Lock <span className="text-gray-300">(06/2021 - 07/2021)</span>
                                </h3>
                                <p className="text-gray-100 text-sm mt-1">
                                    - The "Digital Lock in IoT" project is an innovative and practical application of Internet of Things (IoT) technology,
                                    Arduino Uno, a keypad, and a proximity sensor to enhance security and access control for doors. The system is designed
                                    to provide a digital and intelligent locking mechanism, offering convenience and heightened security.
                                </p>
                            </div>


                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    GameTalentHub <span className="text-gray-300">(08/2022 - 02/2023)</span>
                                </h3>
                                <p className="text-gray-100 text-sm mt-1">
                                    - A premier destination for connecting recruiters with skilled gamers ready to dominate the competitive gaming arena.
                                    Our platform is designed to revolutionize talent acquisition in the gaming world, bringing together recruiters
                                    and gamers seamlessly.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div></div>
            </div>
        </div>

    </div>);
}

export default Resume;