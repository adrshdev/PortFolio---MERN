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

  return(
    <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 border-b-2 border-blue-500 inline-block">Certifications</h2>
        <div className="grid md:grid-cols-1 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 transition transform hover:scale-[1.01] hover:shadow-blue-200 dark:hover:shadow-blue-900">
              <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                  <img src={cert.badge} alt={`${cert.title} Badge`} className="w-24 h-24 object-contain hover:scale-105 transition-transform" />
                </a>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    <span className="font-medium">Issued by:</span> {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    <span className="font-medium">Date:</span> {cert.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 mt-4">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Certifications;