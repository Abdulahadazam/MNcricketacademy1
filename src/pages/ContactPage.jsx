const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-16">
      <div className="bg-cricket-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Get in touch with us for any inquiries or to join our academy
          </p>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="w-full h-[400px] relative">
        <img 
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Cricket ground"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-cricket-green">Contact Details</h3>
              <p className="text-gray-600">+91-8888888888</p>
              <p className="text-gray-600">info@mncricket.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-cricket-green">Booking Sessions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Mea Luton</h4>
                  <p className="text-gray-600">Saturday: 7:00 AM - 9:00 AM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">121 Choice Cricket Centre</h4>
                  <p className="text-gray-600">Tuesday: 5:00 PM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 1:00 PM & 3:00 PM - 7:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Simbah Sports Milton Keynes</h4>
                  <p className="text-gray-600">Saturday: 10:00 AM - 1:00 PM & 4:00 PM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: 12:00 PM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cricket-green focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cricket-green focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cricket-green focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cricket-green focus:border-transparent outline-none resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cricket-green text-white py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;