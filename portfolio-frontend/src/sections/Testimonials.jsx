const Testimonials = () => {
  return(
    <section id="testimonials" className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">What People Say</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <p className="text-gray-700 italic">"Adarsh delivered beyond our expectations. The website he built was clean, professional, and helped us reach more customers. The admin panel was a game changer!"</p>
          <div className="mt-4 text-right">
            <span className="text-sm font-semibold text-indigo-600"> - Greenx Pest Control and Bird Netting Services</span>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Testimonials;