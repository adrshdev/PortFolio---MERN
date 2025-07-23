// components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20 rounded-t-3xl shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Adarsh Dev</h2>
          <p className="mt-2 text-sm text-gray-400">
            MERN Stack Developer. Passionate about building impactful full-stack apps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-white transition">About Me</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social & CTA */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
          <div className="flex space-x-4 text-cyan-400 text-lg">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
          <p className="mt-4 text-sm text-gray-400">Open for collaboration and freelance projects!</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Adarsh Dev. All Rights Reserved.
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-5 right-5">
        <a href="#top" className="bg-cyan-500 text-white p-2 rounded-full shadow hover:bg-cyan-600 transition">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}
