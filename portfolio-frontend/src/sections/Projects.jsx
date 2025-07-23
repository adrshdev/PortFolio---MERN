import '../../src/global.css'


const Projects = () => {
  return(
    <section id="projects" className="py-20 bg-[#0A192F] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#112240] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <img src="../../src/assets/weather.jpg" alt="Weather App" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2">SkyCast</h3>
            <p className="text-gray-400 mb-4">A cartoon-styled weather app using OpenWeather API, built with React and TailwindCSS.</p>
            <div className="flex flex-wrap gap-2 mb-4 text-sm">
              <span className="bg-[#233554] px-3 py-1 rounded-full">React</span>
              <span className="bg-[#233554] px-3 py-1 rounded-full">Tailwind</span>
              <span className="bg-[#233554] px-3 py-1 rounded-full">API</span>
            </div>
            <div className="flex gap-4">
              <a href="" className="text-[#64ffda] hover:underline">Live</a>
              <a href="" className="text-[#64ffda] hover:underline">Code</a>
            </div>
          </div>
          <div className="bg-[#112240] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <img src="../../src/assets/chat.jpg" alt="TalkBit" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2">TalkBit</h3>
            <p className="text-gray-400 mb-4">A real-time chat app built with MERN stack & Socket.io featuring user auth and chat persistence</p>
            <div className="flex flex-wrap gap-2 mb-4 text-sm">
              <span className="bg-[#233554] px-3 py-1 rounded-full">MERN</span>
              <span className="bg-[#233554] px-3 py-1 rounded-full">Socket.io</span>
              <span className="bg-[#233554] px-3 py-1 rounded-full">Realtime</span>
            </div>
            <div className="flex gap-4">
              <a href="" className="text-[#64ffda] hover:underline">Live</a>
              <a href="" className="text-[#64ffda] hover:underline">Code</a>
            </div>
          </div>
           <div className="bg-[#112240] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <img src="../../src/assets/greenx.jpg" alt="GreenX Website" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2">GreenX Pest Control and Bird Netting Solutions</h3>
            <p className="text-gray-400 mb-4">A full-stack commercial site for a pest control service built with EJS, Express, and MongoDB for backend CMS and user contact integration.</p>
            <div className="flex flex-wrap gap-2 mb-4 text-sm">
              <span className="bg-[#233554] px-3 py-1 rounded-full">EJS</span>
              <span className="bg-[#233554] px-3 py-1 rounded-full">Express</span>
              <span className="bg-[#233554] px-3 py-1 rounded-full">MongoDB</span>
            </div>
            <div className="flex gap-4">
              <a href="https://www.greenxpcs.com" className="text-[#64ffda] hover:underline">Live</a>
              <a href="" className="text-[#64ffda] hover:underline">Code</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 w-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-2xl p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 text-white border border-[#64ffda] animate-fade-in">
        <div className="flex-1">
          <h3 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#64ffda] tracking-wide">Upcoming Milestone: Mendora</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            A Mental Wellness & Self-Care Platform offering AI-powered mood tracking, guided meditation, journaling, anonymous support chat, and more - designed with love using the MERN Stack and OpenAI.
          </p>
          <p className="italic text-sm text-[#9ca3af]">Stay tuned! Development is in progress....</p>
        </div>
        <div className="flex-shrink-0">
          <img src="../../src/assets/mendora.jpg" alt="Mendora" className="w-64 lg:w-80 rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-3xl font-bold mb-6 text-center">Upcoming Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className='bg-[#112240] rounded-2xl p-6 shadow-lg hover:scale-105 transition'>
            <h3 className="text-2xl font-semibold mb-2">WorkForge - AI Job Skills Dashboard</h3>
            <p className='text-gray-400 mb-4'>AI-powered dashboard for developers to map skills, get study roadmaps, save jobs, and receive weekly reviews. OpenAI integration included.</p>
            <div className="flex flex-wrap gap-2 mb-4 text-sm">
              <span className='bg-[#233554] px-3 py-1 rounded-full'>MERN</span>
              <span className='bg-[#233554] px-3 py-1 rounded-full'>OpenAI</span>
              <span className='bg-[#233554] px-3 py-1 rounded-full'>Career</span>
            </div>
            <p className='text-[#64ffda]'>Planning in Progress..</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;