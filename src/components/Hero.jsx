import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </motion.div>
      
      <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-20">
        <motion.h2 
          className="text-2xl md:text-3xl text-cricket-gold font-light mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unleash Your Potential
        </motion.h2>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Transform Your Game
          <br />
          <span className="text-cricket-gold">Master Cricket</span>
        </motion.h1>
        <motion.button 
          onClick={() => navigate('/contact')}
          className="bg-cricket-gold text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;