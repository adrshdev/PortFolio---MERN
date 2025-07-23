const Certifications = () => {
  const certifications = [
    {
      title: "Web Development Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "April 23, 2025",
      description: "Completed an IBM-certified training covering HTML, CSS, JavaScript, responsive design, and industry best practices.",
      badge: '../../src/assets/ibm.png',
      link: 'https://skills.yourlearning.ibm.com/credential/CREDLY-ce744ad1-ca21-498e-a9ea-8c01f792977d'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-blue-400 mb-10 border-b-4 border-blue-600 w-fit">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-1 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-blue-900/50 backdrop-blur-md rounded-3xl p-8 border border-blue-700 shadow-2xl hover:shadow-blue-500/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                  <img
                    src={cert.badge}
                    alt={`${cert.title} Badge`}
                    className="w-28 h-28 object-contain rounded-full border-4 border-blue-500 shadow-md hover:scale-105 transition-transform duration-200"
                  />
                </a>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-blue-200">
                    <span className="font-semibold text-white">Issued by:</span> {cert.issuer}
                  </p>
                  <p className="text-sm text-blue-200">
                    <span className="font-semibold text-white">Date:</span> {cert.date}
                  </p>
                  <p className="mt-4 text-blue-100 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
