const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-cricket-green">Contact Details</h3>
              <p className="text-gray-600">+91-8888888888</p>
              <p className="text-gray-600">websupport@jusdial.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-cricket-green">Address</h3>
              <p className="text-gray-600">Palm Court Bldg M, 501/B, 5th Floor, New Link Road,</p>
              <p className="text-gray-600">Beside Goregaon Sports Complex, Malad West, Mumbai,</p>
              <p className="text-gray-600">Maharashtra 400064</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-cricket-green">Business Hours</h3>
              <p className="text-gray-600">Mon - Sun : 10:00 AM - 07:00 PM</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cricket-green focus:border-transparent outline-none transition-all"
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email ID" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cricket-green focus:border-transparent outline-none transition-all"
                  required 
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cricket-green focus:border-transparent outline-none transition-all"
                  required 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cricket-green focus:border-transparent outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-cricket-green text-white py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;