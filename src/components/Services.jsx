const ServiceCard = ({ image, title }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 hover:-translate-y-2">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-end p-6">
      <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Professional training and guidance for aspiring cricketers.
        </p>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Batting Training",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Bowling Training",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fielding Practice",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mental Conditioning",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive cricket training programs designed to develop skills, technique, and mental strength.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;