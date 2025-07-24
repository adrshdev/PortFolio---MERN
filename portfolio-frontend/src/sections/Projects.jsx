import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import mendora from '/assets/mendora.jpg';
import weather from '/assets/weather.jpg';
import chat from '/assets/chat.jpg';
import greenx from '/assets/greenx.jpg';
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
    <section id="projects" className="relative py-24 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden will-change-transform">

      {/* Blurred background glow effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-700 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-indigo-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Projects
        </h2>

        {/* Live Projects */}
       <div className="overflow-hidden">
        <motion.div className='flex gap-6 snap-x snap-mandatory overflow-x-scroll scrollbar-hide px-2' drag='x' dragConstraints={{left: -1000, right: 0}} whileTap={{cursor: 'grabbing'}}>
          {projects.map((project, i) => (
            <motion.div key={i} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: i * 0.1}} viewport={{once: true}} className='snap-start w-[300px] flex-shrink-0 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-transform duration-300 transform-gpu hover:scale-[1.03] cursor-pointer group'>
              <img src={project.image} alt={project.title} loading='lazy' className='w-full h-44 object-cover group-hover:scale-[1.02] transition-transform duration-200' />
              <div className='p-5'>
                <h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
                <p className='text-sm text-gray-400 mb-3'>{project.description}</p>
                <div className='flex flex-wrap gap-2 text-xs mb-4'>
                  {project.stack.map((tech, j) => (
                    <span key={j} className='bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full'>{tech}</span>
                  ))}
                </div>
                <div className='flex gap-4 text-sm font-medium text-cyan-300'>
                  {project.live ? (
                    <a href={project.live} className='hover:underline flex items-center gap-1' target='_blank' rel='noopener noreferrer'>Live <ExternalLink size={16}/></a>
                  ) : (
                    <span className='text-gray-500 italic'>Live Coming Soon</span>
                  )}
                  {project.code ? (
                    <a href={project.code} className='hover:underline flex items-center gap-1' target='_blank' rel='noopener noreferrer'>Code <ExternalLink size={16}/></a>
                  ) : (
                    <span className='text-gray-500 italic'>Code Private</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
       </div>
        {/* Featured: Mendora */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 flex flex-col lg:flex-row items-center gap-8 tranform-gpu">
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
              loading='lazy'
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
                className="bg-white/5 border border-white/10 text-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform-gpu"
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
  <motion.div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div className='bg-gray-900 text-white max-w-2xl w-full rounded-2xl p-8 relative shadow-2xl border border-white/10 overflow-y-auto max-h-[90vh]' initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
      <button className='absolute top-4 right-4 text-gray-400 hover:text-white transition' onClick={() => setShowModal(false)} aria-label='close'>
        <X size={24} />
      </button>

      <h3 className='text-3xl font-bold mb-4 text-cyan-400'>Mendora: Vision That Heals</h3>

      <p className='text-sm text-gray-300 leading-relaxed mb-4'>
        In a world accelerating toward noise, pressure, and endless comparison, <span className='text-white font-semibold'>Mendora</span> emerges with a revolutionary mission:
      </p>

      <p className='italic text-indigo-300 mb-4 text-sm'>
        To bring every human being back to their original, untainted self — the state of clarity, peace, and conscious creation.
      </p>

      <p className='text-sm text-gray-400 leading-relaxed mb-4'>
        Every human is born as a blank slate — a fresh consciousness. But as we grow, we’re shaped by society, trauma, family systems, and expectations. We become prisoners of subconscious programming.
      </p>

      <p className='text-sm text-gray-300 leading-relaxed mb-4'>
        <strong className='text-cyan-300'>But what if we could return to our essence?</strong><br />
        What if we could consciously reprogram our minds to create a reality aligned with peace, purpose, and self-realization?
      </p>

      <p className='text-sm text-gray-300 mb-6'>
        <span className='font-semibold text-white'>That’s the soul of Mendora.</span><br />
        Mendora is not just an app. It’s a Self-Exploration and Mental Transformation platform — a tech-powered ecosystem for anyone seeking to heal, understand themselves, and reshape their inner world.
      </p>

      <h4 className='text-lg font-semibold text-white mb-2'>🌱 What Mendora Offers</h4>
      <ul className='list-disc pl-5 space-y-2 text-sm text-gray-400 mb-6'>
        <li>Subconscious pattern recognition through AI & reflection tools</li>
        <li>Deep healing of mental/emotional wounds using guided modalities</li>
        <li>Mind reprogramming techniques grounded in neuroscience & psychology</li>
        <li>Spiritual self-discovery paths to uncover the self beyond identity</li>
        <li>A life creation model aligned with clarity, confidence, and peace</li>
      </ul>

      <h4 className='text-lg font-semibold text-white mb-2'>🚨 Why Now?</h4>
      <p className='text-sm text-gray-400 mb-4'>
        We’re in a global mental health emergency. Stress, anxiety, burnout — especially among youth — are at all-time highs. Yet current solutions are surface-level: quick motivation, shallow therapy, or passive meditation.
      </p>
      <p className='text-sm text-gray-300 mb-6'>
        Mendora goes deeper. We target the <span className='text-white font-medium'>root of suffering: the subconscious identity.</span> We don’t just treat anxiety — we guide people to evolve beyond it.
      </p>

      <h4 className='text-lg font-semibold text-white mb-2'>🧠 Problem We're Solving</h4>
      <ul className='list-disc pl-5 space-y-2 text-sm text-gray-400 mb-6'>
        <li>Unresolved traumas buried in the subconscious</li>
        <li>Cultural and generational programming limiting self-worth</li>
        <li>False identity constructs shaped by external validation</li>
        <li>Lack of true inner exploration in modern mental health tools</li>
      </ul>

      <p className='text-sm text-indigo-300 italic mb-4'>
        Most apps offer calm. Mendora offers conscious transformation.
      </p>

      <h4 className='text-lg font-semibold text-white mb-2'>👤 Founder’s Perspective</h4>
      <p className='text-sm text-gray-400 mb-4'>
        In the natural world, nothing is rushed. No tree hurries to grow, no river panics, no animal stresses about tomorrow. Only humans suffer under a mind disconnected from its essence — molded by noise, trauma, and unchecked input.
      </p>
      <p className='text-sm text-gray-300 mb-6'>
        Mendora is not here to relieve temporary pain. It’s here to guide people back to their true self — through science-backed, spiritually-aligned self-reprogramming.
      </p>

      <blockquote className='border-l-4 border-cyan-500 pl-4 text-cyan-300 italic text-sm mb-6'>
        “Who are you, when you're not what the world told you to be?”
      </blockquote>

      <p className='text-sm text-teal-300 font-medium'>
        Our mission is nothing short of a consciousness revolution.
      </p>
    </motion.div>
  </motion.div>
)}

    </section>
  );
};

export default Projects;
