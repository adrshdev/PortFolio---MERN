import {motion} from 'framer-motion';
import {SiReact, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiExpress, SiMongodb, SiSocketdotio, SiNodedotjs, SiPostman, SiGithub, SiLinux, SiFigma, SiVercel} from 'react-icons/si'
import {FaGitAlt} from 'react-icons/fa'

const skills = {
  Frontend: [SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss],
  Backend: [SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio],
  'Dev Tools': [FaGitAlt, SiGithub, SiPostman],
  'Other Tools': [SiLinux, SiFigma, SiVercel],
};

const Skills = () => {
  return(
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack & Tools</h2>
        {Object.entries(skills).map(([category, icons]) => (
          <div key={category} className='mb-10'>
            <h3 className='text-xl font-semibold mb-4'>{category}</h3>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6'>
              {icons.map((Icon, index) => (
                <motion.div key={index} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className='flex justify-center items-center p-4 bg-gray-800 rounded-2xl shadow-md transition'>
                  <Icon className='text-4xl text-blue-400'/>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Skills;