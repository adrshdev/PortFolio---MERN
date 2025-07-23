import {motion} from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  return(
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6">
      <div className="max-w-4xl w-full text-center">
        <motion.h1 initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className='text-4xl md:text-6xl font-bold mb-4'>Hi, I'm <span>Adarsh</span></motion.h1>
        <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3, duration: 0.7}} className='text-lg md:text-xl text-gray-300 mb-8'>Full Stack Developer | I build scalable & modern web applications.</motion.p>
        <motion.div className='flex justify-center gap-4 flex-wrap' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}>
          <a href="" target='blank' rel='noopener noreferrer' className='flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-xl transition'><Download size={18}/>View Resume</a>
          <a href="#contact" className='flex items-center gap-2 border border-white text-white hover:bg-white hover:text-black font-medium py-2 px-4 rounded-xl transition'><Mail size={18}/>Let's Connect</a>
        </motion.div>
      </div>
    </section>
  )
};

export default Hero;