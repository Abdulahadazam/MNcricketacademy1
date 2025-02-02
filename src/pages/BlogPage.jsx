import { motion } from 'framer-motion';

const BlogPage = () => {
  const blogs = [
    {
      title: "Why Club Cricket is Essential for Your Development",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Discover how club cricket can enhance your skills and provide valuable match experience",
      content: "Club cricket serves as the foundation for developing cricketers...",
      date: "February 16, 2024"
    },
    {
      title: "The Journey from Club Cricket to Professional",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Learn about the path from amateur to professional cricket",
      content: "The transition from club cricket to professional level requires...",
      date: "February 15, 2024"
    },
    {
      title: "Building Mental Strength Through Cricket",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Understanding the mental aspects of cricket and how to develop them",
      content: "Cricket is as much a mental game as it is physical...",
      date: "February 14, 2024"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-cricket-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cricket Insights
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our collection of articles about cricket development and training
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article 
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm">{blog.date}</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-cricket-green mb-3">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <button className="text-cricket-gold hover:text-cricket-green transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;