
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="text-3xl font-bold">RemoteJobs</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to start your<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">remote career?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already earning money from home. Start your journey today.
          </p>
          
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-12">
            Get Started Now
          </button>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 RemoteJobs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
