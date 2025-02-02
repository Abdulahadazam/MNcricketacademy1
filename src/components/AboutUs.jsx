const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Cricket bat and ball"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our academy, MN Cricket Academy, situated at Malad West, Mumbai, Maharashtra, 
              was started with a aim to impart cricket training which gives results to all cricketers, 
              kids, young and aged who are willing to learn cricket.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We offer a wide range of cricket training programs for all ages and experience levels. 
              Learn the different skills of cricket from our experienced instructors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We make sure to provide you and your kids a friendly and safe environment to learn cricket 
              and focus on the basic skills. Our coaching method includes regular practice matches, 
              net practicing and physical training for overall development of the trainee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;