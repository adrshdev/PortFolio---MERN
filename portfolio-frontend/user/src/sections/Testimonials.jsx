import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Adarsh delivered beyond our expectations. The website he built was clean, professional, and helped us reach more customers. The admin panel was a game changer!",
    name: "Greenx Pest Control and Bird Netting Services",
  },
  // You can add more testimonials like this
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-16 px-6 md:px-12 lg:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-14"
      >
        What People Say
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-[1.02] hover:shadow-indigo-500/20 transition duration-300 ease-in-out"
          >
            <Quote className="text-indigo-500 mb-4" size={32} />
            <p className="text-gray-200 italic leading-relaxed">"{testimonial.quote}"</p>
            <div className="mt-6 text-right">
              <span className="text-sm font-semibold text-indigo-400">
                — {testimonial.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
