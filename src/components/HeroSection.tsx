
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%225%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Make Money Working{" "}
              <span className="gradient-text">Remote Jobs</span>{" "}
              From Home
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join our community of 240,000+ remote workers!
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Begin earning today
            </Button>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-lg animate-slide-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop&crop=faces"
                alt="Woman working remotely on laptop"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Start Your Journey</h3>
                  <p className="text-sm opacity-90">Remote work made simple</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
