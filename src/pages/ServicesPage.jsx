const ServicesPage = () => {
  const services = [
    {
      title: "Professional Cricket Training",
      description: "Comprehensive training programs for all skill levels",
      features: [
        "Personalized coaching sessions",
        "Video analysis of technique",
        "Performance tracking",
        "Regular practice matches"
      ]
    },
    {
      title: "Specialized Batting Programs",
      description: "Master the art of batting with our expert coaches",
      features: [
        "Technical skill development",
        "Shot selection training",
        "Power hitting sessions",
        "Mental preparation"
      ]
    },
    {
      title: "Advanced Bowling Training",
      description: "Develop your bowling skills with specialized coaching",
      features: [
        "Pace bowling techniques",
        "Spin bowling mastery",
        "Bowling variations",
        "Action analysis"
      ]
    },
    {
      title: "Fielding Excellence",
      description: "Enhance your fielding and catching abilities",
      features: [
        "Agility training",
        "Catching techniques",
        "Ground fielding",
        "Throwing accuracy"
      ]
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-cricket-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive cricket training programs designed to develop your skills
            and help you reach your full potential
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-cricket-green mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-cricket-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;