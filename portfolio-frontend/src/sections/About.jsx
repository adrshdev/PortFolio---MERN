import about from '../data/about';
import {motion} from 'framer-motion'

const About = () => {
  return(
    <section id="about" className="min-h-screen px-6 py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{x: -50, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.8}} className='flex justify-center'>
          <img src={about.image} alt={about.name} className='w-72 h-72 object-cover rounded-2xl shadow-lg' />
        </motion.div>
        <motion.div initial={{x: 50, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.8}}>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base leading-relaxed mb-4">{about.description}</p>
          <ul className="space-y-2 text-sm">
            {about.highlights.map((point, i) => (
              <li key={i} className="before:content-['🚀'] before:mr-2">{point}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {about.skills.map((skill, i) => (
              <span key={i} className='px-3 py-1 bg-primary text-black text-xs rounded-full shadow-md'>{skill}</span>
            ))}
          </div>
          {about.resumeUrl && (
            <a href={about.resumeUrl} download className='inline-block mt-6 px-6 py-2 bg-primary text-white rounded-md shadow hover:bg-primary/80 transition'>Download Resume</a>
          )}
        </motion.div>
      </div>
    </section>
  )
};

export default About;