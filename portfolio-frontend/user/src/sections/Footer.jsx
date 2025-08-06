// components/Footer.jsx
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-100 py-14 px-6 rounded-t-3xl shadow-inner relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 tracking-tight">Adarsh Dev</h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            MERN Stack Developer crafting seamless, modern full-stack applications with care and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Quick Links</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="#about" className="hover:text-white transition duration-300">About Me</a></li>
            <li><a href="#projects" className="hover:text-white transition duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Social & CTA */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Let's Connect</h3>
          <div className="flex space-x-4 text-cyan-400 text-xl">
            <a href="https://github.com/yourusername" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-white transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-white transition duration-300" />
            </a>
            <a href="https://twitter.com/yourusername" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-white transition duration-300" />
            </a>
            <a href="https://instagram.com/yourusername" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition duration-300" />
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">Open to freelance & collaboration opportunities!</p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Adarsh Dev. All Rights Reserved.
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#top"
          className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}
