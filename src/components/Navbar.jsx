import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/src/assets/logo.jpg"; // ✅ Correct Import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Coaches", path: "/coaches" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-cricket-green"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-4">
            {/* ✅ Logo Fix */}
            <div className="w-16 h-16">
              <img
                src={logo}
                alt="MN Cricket Academy Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span
                className={`text-2xl font-bold ${
                  scrolled ? "text-cricket-green" : "text-white"
                } tracking-wider`}
              >
                MN CRICKET ACADEMY
              </span>
              <span
                className={`text-lg italic font-medium ${
                  scrolled ? "text-cricket-gold" : "text-cricket-gold"
                }`}
              >
                Where Champions Are Made
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`${
                    scrolled ? "text-cricket-green" : "text-white"
                  } hover:text-cricket-gold transition-colors duration-300 ${
                    location.pathname === item.path ? "font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes
                className={scrolled ? "text-cricket-green" : "text-white"}
                size={24}
              />
            ) : (
              <FaBars
                className={scrolled ? "text-cricket-green" : "text-white"}
                size={24}
              />
            )}
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md ${
                    location.pathname === item.path
                      ? "bg-cricket-gold text-white"
                      : "text-gray-800 hover:bg-cricket-green hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
