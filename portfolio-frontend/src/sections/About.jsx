import about from '../data/about';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-[#0F172A] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src={about.image}
              alt={about.name}
              className="w-72 h-72 object-cover rounded-3xl border-4 border-white shadow-2xl transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 rounded-3xl bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-lg font-semibold text-white">
              👋 Hello!
            </div>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-300">
            {about.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-3 text-sm md:text-base text-gray-200 list-inside">
            {about.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-xl">🚀</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {about.skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-1 bg-white text-black text-xs rounded-full shadow hover:bg-gray-200 transition duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Resume Button */}
          {about.resumeUrl && (
            <a
              href={about.resumeUrl}
              download
              className="inline-block mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition duration-300"
            >
              📄 Download Resume
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
