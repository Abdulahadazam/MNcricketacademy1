import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/mn.cricket?igsh=MWs4ejBrcDVlY3RyeQ%3D%3D&utm_source=qr', label: 'Instagram' },
    { icon: FaYoutube, url: 'https://www.youtube.com/@mncric-academy', label: 'YouTube' },
    { icon: FaWhatsapp, url: 'https://whatsapp.com', label: 'WhatsApp' }
  ];

  const quickLinks = [
    'About Us', 'Services', 'Gallery', 'Videos', 'Contact Us'
  ];

  return (
    <footer className="bg-gradient-to-r from-cricket-green to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Academy Info */}
          <div>
            <img src="/logo.png" alt="MN Cricket Academy" className="h-24 mb-6" />
            <p className="text-gray-300 mb-4">
              Join MN Cricket Academy to learn from the best coaches and develop your cricket skills 
              in a professional environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-cricket-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-cricket-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-cricket-gold">Connect With Us</h3>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-cricket-green p-3 rounded-full hover:bg-cricket-gold hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="text-gray-300">
              <p className="mb-2">📍 Malad West, Mumbai, Maharashtra 400064</p>
              <p className="mb-2">📞 +91-8888888888</p>
              <p>✉️ info@mncricket.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-12 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} MN Cricket Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;