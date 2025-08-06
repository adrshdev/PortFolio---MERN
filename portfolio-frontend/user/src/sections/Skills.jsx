import { motion } from 'framer-motion';
import {
  SiReact, SiTailwindcss, SiHtml5, SiCss3, SiJavascript,
  SiExpress, SiMongodb, SiSocketdotio, SiNodedotjs,
  SiPostman, SiGithub, SiLinux, SiFigma, SiVercel
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

const skills = {
  Frontend: [SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss],
  Backend: [SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio],
  'Dev Tools': [FaGitAlt, SiGithub, SiPostman],
  'Other Tools': [SiLinux, SiFigma, SiVercel],
};

const categoryColors = {
  Frontend: 'text-pink-400',
  Backend: 'text-green-400',
  'Dev Tools': 'text-yellow-400',
  'Other Tools': 'text-purple-400',
};

const Skills = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute -top-10 left-0 w-96 h-96 bg-purple-900 opacity-20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-blue-900 opacity-20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          My Tech Arsenal
        </h2>
        <p className="text-gray-400 mb-16 text-lg">
          Tools and technologies I use to craft full-stack applications.
        </p>

        {Object.entries(skills).map(([category, icons]) => (
          <div key={category} className="mb-14">
            <h3 className={`text-2xl font-bold mb-6 ${categoryColors[category]}`}>
              {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center items-center">
              {icons.map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-white/5 hover:bg-white/10 rounded-3xl shadow-lg transition-all duration-300 backdrop-blur-sm border border-white/10"
                >
                  <Icon className={`text-5xl mx-auto ${categoryColors[category]}`} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
