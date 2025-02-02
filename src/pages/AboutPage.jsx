const AboutPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-cricket-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about our journey in creating champions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To enrich lives of cricket lovers
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide professional performance training and fulfill dreams of individuals who want to play professional cricket
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-gray-600">
              Train, train harder and even harder
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Cricket Academy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our History</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Maryam and Nauman started this academy in 2020 from Glasgow. Both husband and wife saw a big gap in the market when they moved to Luton in 2022.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Professional Coaching",
              description: "Learn from experienced coaches who have played at various levels"
            },
            {
              title: "Modern Facilities",
              description: "State-of-the-art training facilities with latest equipment"
            },
            {
              title: "Personalized Attention",
              description: "Individual attention to help you improve your game"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-cricket-green mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;