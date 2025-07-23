import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import mendora from '../assets/mendora.jpg';
import weather from '../assets/weather.jpg';
import chat from '../assets/chat.jpg';
import greenx from '../assets/greenx.jpg';
import { useState } from 'react';

const projects = [
  {
    title: 'SkyCast',
    description: 'A cartoon-styled weather app using OpenWeather API, built with React and TailwindCSS.',
    image: weather,
    stack: ['React', 'Tailwind', 'API'],
    live: '',
    code: '',
  },
  {
    title: 'TalkBit',
    description: 'A real-time chat app built with MERN stack & Socket.io featuring user auth and chat persistence.',
    image: chat,
    stack: ['MERN', 'Socket.io', 'Realtime'],
    live: '',
    code: '',
  },
  {
    title: 'GreenX Pest Control & Bird Netting',
    description: 'A full-stack site built with EJS, Express, and MongoDB for backend CMS and user contact integration.',
    image: greenx,
    stack: ['EJS', 'Express', 'MongoDB'],
    live: 'https://www.greenxpcs.com',
    code: '',
  },
];

const upcoming = [
  {
    title: 'WorkForge - AI Job Skills Dashboard',
    description: 'AI-powered dashboard for developers to map skills, get roadmaps, save jobs, and get OpenAI career insights.',
    stack: ['MERN', 'OpenAI', 'Career'],
    status: 'Planning in progress...',
  },
];

const Projects = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <section id="projects" className="relative py-24 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">

      {/* Blurred background glow effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-700 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-indigo-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Projects
        </h2>

        {/* Live Projects */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-md transition-all duration-300 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-medium text-indigo-400">
                  {project.live ? (
                    <a href={project.live} className="hover:underline flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Live
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">Live Coming Soon</span>
                  )}
                  {project.code ? (
                    <a href={project.code} className="hover:underline flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Code
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">Code Private</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured: Mendora */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 flex flex-col lg:flex-row items-center gap-8 backdrop-blur-md"
        >
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Upcoming Milestone: Mendora</h3>
            <p className="text-gray-400 mb-3 text-base md:text-lg leading-relaxed">
              A Mental Wellness Platform offering AI mood tracking, meditation, journaling,
              anonymous support chat, and more – powered by MERN and OpenAI.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-full transition"
            >
             Learn More
            </button>

          </div>
          <div>
            <img
              src={mendora}
              alt="Mendora"
              className="rounded-xl w-64 lg:w-80 shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Upcoming Projects */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold mb-10 text-center text-white">Upcoming Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcoming.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 text-white rounded-2xl p-6 shadow-md hover:shadow-xl transition backdrop-blur-md"
              >
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  {item.stack.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-indigo-300 italic text-sm">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <motion.div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <motion.div className='bg-gray-900 text-white max-w-2xl w-full rounded-2xl p-8 relative shadow-2xl border border-white/10' initial={{scale: 0.8, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{type: 'spring', stiffness: 200}}>
            <button className='absolute top-4 right-4 text-gray-400 hover:text-white transition' onClick={() => setShowModal(false)} aria-label='close'>
              <X size={24}/>
            </button>
            <h3 className='text-3xl font-bold mb-4 text-cyan-400'>Mendora: Our Vision</h3>
            <p className='text-gray-300 mb-4 leading-relaxed text-sm'>
              Mendora is not just another mental health app - It's a transformative eco-system designed to empower individuals globally with tools for emotional intelligence, healing, and growth.
            </p>
            <ul className='list-disc pl-5 space-y-2 text-sm text-gray-400 mb-6'>
              <li>Anonymous Support Chat for people in emotional distress</li>
              <li>AI-driven Mood Tracking with personalized wellness reports</li>
              <li>Guided Meditation & Mindfulness sessions curated with experts</li>
              <li>Private Journaling with GPT-assisted emotional reflection</li>
              <li>Global community for peer support, stories & inspiration</li>
              <li>Built with end-to-end privacy and data security by design</li>
            </ul>
            <p className='text-sm text-indigo-300 italic'>Our mission: Democratize mental wellness with tech and empathy. Mendora is for everyone.</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
