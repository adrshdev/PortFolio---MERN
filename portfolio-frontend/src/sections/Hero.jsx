import {motion} from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  return(
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 relative overflow-hidden'>
      <div className='absolute top-0 -left-16 w-72 h-72 bg-indigo-700 opacity-30 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-0 -right-16 w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse'></div>
      <div className='max-w-4xl w-full text-center z-10'>
        <motion.p className='text-sm uppercase tracking-widest text-indigo-400 mb-2' initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6}}>Full Stack Web Developer</motion.p>
        <motion.h1 className='text-4xl md:text-6xl font-extrabold mb-4'>Hi, I'm{''}
          <span className='bg-gradient-to-r from-indigo-400 via-pink-500 to-red-500 bg-clip-text text-transparent'> Adarsh</span>
        </motion.h1>
        <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3, duration: 0.7}} className='text-lg md:text-xl text-gray-300 mb-8'>I build fast, scalable, and beautiful web applications with modern tech.</motion.p>
        <motion.div className='flex justify-center gap-4 flex-wrap' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}>
          <a href="/resume.pdf" target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-medium py-2 px-5 rounded-xl shadow-lg transition-all'>
            <Download size={18}/> View Resume
          </a>
          <a href="#contact" className='flex items-center gap-2 border border-white text-white hover:bg-white hover:text-black font-medium py-2 px-5 rounded-xl transition-all'>
            <Mail size={18}/> Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
};

export default Hero;