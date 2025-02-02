import { useState } from 'react';
import { FaInstagram, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CoachesPage = () => {
  const [activeCoach, setActiveCoach] = useState(null);

  const coaches = [
    {
      name: "Nauman Javaid",
      role: "Head Coach",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Cricket is not just a game, it's a way of life. My goal is to help every player reach their full potential.",
      coachingProfile: [
        "ECB advanced level 3",
        "Head coach beds U15 & MCC",
        "Head coach LTICC women & girls",
        "Coach cricket Serbia tour to England 2023",
        "Coach western warriors boys/girls cricket Scotland 2021 – 2022",
        "Head of Juniors Redbourn CC"
      ],
      playingProfile: [
        "Captain Pepsi U19 (1998)",
        "Played Pakistan Emerging 11 tour to Holland & Denmark 1999",
        "Played for NDFC (National Development Finance Corporation) 1997 to 2001",
        "Captain Essex University 2002 - 2003",
        "Player Coach Lahore Gymkhana 2004 - 2009",
        "Captain Punjab Board 1996 to 1997",
        "Captain Pepsi U16 1996"
      ],
      instagram: "#"
    },
    {
      name: "Maryam Nauman",
      role: "Coach",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Empowering players through cricket is my passion. Together, we can break barriers and achieve greatness.",
      coachingProfile: [
        "Coach Cricket East",
        "Speaker & advocate for diverse communities in luton",
        "Safe guarding officer"
      ],
      instagram: "#"
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
            Meet Our Expert Coaches
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn from professionals who have mastered the game
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {coaches.map((coach, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className={`bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
                  activeCoach === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveCoach(activeCoach === index ? null : index)}
              >
                <div className="relative h-96">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">{coach.name}</h2>
                    <p className="text-xl text-cricket-gold">{coach.role}</p>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={coach.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full text-cricket-green hover:text-cricket-gold transition-colors"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-8 relative">
                    <FaQuoteLeft className="text-cricket-gold/20 text-6xl absolute -top-4 -left-4" />
                    <p className="text-gray-600 italic text-lg relative z-10 pl-8">
                      {coach.quote}
                    </p>
                  </div>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeCoach === index ? 'auto' : 0,
                      opacity: activeCoach === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {coach.coachingProfile && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-cricket-green mb-4">Coaching Profile</h3>
                        <ul className="space-y-2">
                          {coach.coachingProfile.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-cricket-gold">•</span>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {coach.playingProfile && (
                      <div>
                        <h3 className="text-xl font-semibold text-cricket-green mb-4">Playing Profile</h3>
                        <ul className="space-y-2">
                          {coach.playingProfile.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-cricket-gold">•</span>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                  
                  <button 
                    className="mt-6 text-cricket-gold hover:text-cricket-green transition-colors"
                    onClick={() => setActiveCoach(activeCoach === index ? null : index)}
                  >
                    {activeCoach === index ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachesPage;