import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      {/* Background blur decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-700 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 text-white"
            aria-label="Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 text-white"
            aria-label="Email"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400 text-white"
            aria-label="Message"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white py-3 rounded-xl font-semibold shadow-md transition-all"
          >
            Send Message
          </button>
        </motion.form>

        {/* Direct Links */}
        <motion.div
          className="mt-12 text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-300">Or reach me directly:</p>
          <div className="flex justify-center flex-wrap gap-6 text-blue-400 text-sm">
            <a
              href="mailto:adarshjayasankerdev@gmail.com"
              className="flex items-center gap-2 hover:underline"
              aria-label="Email"
            >
              <Mail size={18} /> adarshjayasankerdev@gmail.com
            </a>
            <a
              href="tel:+918714593851"
              className="flex items-center gap-2 hover:underline"
              aria-label="Phone"
            >
              <Phone size={18} /> +91 8714593851
            </a>
          </div>

          {/* Social/Resources */}
          <div className="flex justify-center flex-wrap gap-6 mt-6 text-sm">
            <a
              href="https://wa.me/918714593851"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:underline"
            >
              WhatsApp
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-gray-300 hover:underline"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/adrsh"
              target="_blank"
              className="text-gray-300 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/adrsh"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
