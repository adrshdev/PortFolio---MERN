import { Mail, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState({name: "", email: "", message: ""});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully");
    setForm({name: "", email: "", message: ""});
  }

  return(
    <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-white" />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-white" />
          <textarea name="message" rows={5} placeholder="Your Message" value={form.message} onChange={handleChange} required className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-white"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Send Message</button>
        </form>
        <div className="mt-10 text-center space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Or reach me directly:</p>
          <div className="flex justify-center gap-6 text-blue-600 dark:text-blue-400">
            <a href="mailto:adarshjayasankerdev@gmail.com" className="flex items-center gap-1 hover:underline">
              <Mail size={18}/> adarshjayasankerdev@gmail.com
            </a>
            <a href="tel:+918714593851" className="flex items-center gap-1 hover:underline">
              <Phone size={18}/> +91 8714593851
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://wa.me/918714593851" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">WhatsApp</a>
            <a href="/resume.pdf" download className="text-gray-700 dark:text-gray-200 hover:underline">Download Resume</a>
            <a href="https://github.com/adrsh" target="_blank" className="text-gray-700 dark:text-gray-200 hover:underline">GitHub</a>
            <a href="https://linkedIn.com/in/adrsh" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;