
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%225%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Make Money Working{" "}
              <span className="gradient-text">Remote Jobs</span>{" "}
              From Home
            </h1>
            <p className="text-2xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join our community of 240,000+ remote workers!
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Begin earning today
            </Button>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-lg animate-slide-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop&crop=faces"
                alt="Woman working remotely on laptop"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700 border border-gray-200"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-8 py-6 rounded-3xl shadow-xl">
                <div className="text-center">
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
