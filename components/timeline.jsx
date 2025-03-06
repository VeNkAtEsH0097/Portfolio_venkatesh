const Timeline = () => {
    return (<div className=" relative mt-5 bg-zinc-400 py-4 px-2 rounded-md">
        <div className=' absolute top-0 left-1/2 -ml-2 w-4 h-full rounded-full bg-gradient-to-b from-sky-900 to-teal-900  '>
            <div className=' sticky top-1/2 '>
                <div className=' relative h-4 w-4'>
                    <div className=' h-4 w-4 absolute animate-ping rounded-full bg-pink-500'></div>
                    <div className=' bg-rose-500 relative h-4 w-4 rounded-full'></div>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-5'>

            {/* Frontend Development */}
            <div><h4 className='p-1 text-white/70 bg-zinc-700 rounded-lg m-4'>Frontend Development</h4></div>
            <div></div>

            <div className='text-right text-lg'><div>HTML</div><div className="text-right text-sm">Markup</div></div>
            <div className='text-left text-lg'><div>CSS</div><div className="text-left text-sm">Styling</div></div>
            <div className='text-right text-lg'><div>Tailwind CSS</div><div className="text-right text-sm">Styling</div></div>

            <div className='text-left text-lg'><div>React.js</div><div className="text-left text-sm">Framework</div></div>
            <div className='text-right text-lg'><div>Next.js</div><div className="text-right text-sm">Framework</div></div>
            <div className='text-left text-lg'><div>Angular.js</div><div className="text-left text-sm">Framework</div></div>

            <div className='text-right text-lg'><div>Material UI</div><div className="text-right text-sm">UI Library</div></div>
            <div className='text-left text-lg'><div>Daisy UI</div><div className="text-left text-sm">UI Library</div></div>
            <div className='text-right text-lg'><div>Next UI</div><div className="text-right text-sm">UI Library</div></div>
            <div></div>

            {/* Authentication & Security */}
            <div><h4 className='p-1 text-white/70 bg-zinc-700 rounded-lg m-4'>Authentication & Security</h4></div>
            <div></div>

            <div className='text-right text-lg'><div>NextAuth</div><div className="text-right text-sm">Authentication</div></div>
            <div className='text-left text-lg'><div>JWT</div><div className="text-left text-sm">Authorization</div></div>
            <div className='text-right text-lg'><div>Session-based</div><div className="text-right text-sm">Authorization</div></div>
            <div></div>

            {/* Backend Development */}
            <div><h4 className='p-1 text-white/70 bg-zinc-700 rounded-lg m-4'>Backend Development</h4></div>
            <div></div>

            <div className='text-right text-lg'><div>Node.js</div><div className="text-right text-sm">Backend</div></div>
            <div></div>

            {/* Mobile Development */}
            <div><h4 className='p-1 text-white/70 bg-zinc-700 rounded-lg m-4'>Mobile Development</h4></div>
            <div></div>

            <div className='text-right text-lg'><div>React Native</div><div className="text-right text-sm">Mobile Framework</div></div>
            <div></div>

            {/* Database & ORM */}
            <div><h4 className='p-1 text-white/70 bg-zinc-700 rounded-lg m-4'>Database & ORM</h4></div>
            <div></div>

            <div className='text-right text-lg'><div>PostgreSQL</div><div className="text-right text-sm">Database</div></div>
            <div className='text-left text-lg'><div>Prisma</div><div className="textleft text-sm">ORM</div></div>
            <div className='text-right text-lg'><div>Spring Boot</div><div className="text-right text-sm">ORM</div></div>
            <div className='text-left text-lg'><div>Django (Basic)</div><div className="textleft text-sm">ORM</div></div>

            {/* Email & API Services */}
            <div><h4 className='p-1 text-white/70 bg-zinc-700 rounded-lg m-4'>Email & API Services</h4></div>
            <div></div>

            <div className='text-right text-lg'><div>SMTP</div><div className="text-right text-sm">Email Service</div></div>
            <div className='text-left text-lg'><div>Google API</div><div className="text-left text-sm">Service API</div></div>

            {/* Validation Libraries */}
            <div><h4 className='p-1 text-white/70 bg-zinc-700 rounded-lg m-4'>Validation</h4></div>
            <div></div>

            <div className='text-right text-lg'><div>Zod</div><div className="text-right text-sm"> Library</div></div>
            <div className='text-left text-lg'><div>Yup</div><div className="text-left text-sm"> Library</div></div>

        </div>



        {/* Content can go here */}
    </div>);
}

export default Timeline;