
import { Button } from "@/components/ui/button";
import { Play, Star, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-10 blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">4.8/5</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>240,000+ members</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Make Money Working{" "}
              <span className="relative">
                <span className="gradient-text">Remote Jobs</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              </span>{" "}
              From Home
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join our thriving community of remote workers and start earning with flexible, skill-based assignments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Begin earning today
              </Button>
              <Button variant="outline" className="flex items-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">$2.5M+</div>
                <div className="text-sm text-gray-600">Paid to workers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">50k+</div>
                <div className="text-sm text-gray-600">Projects completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success rate</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-lg animate-slide-in">
            <div className="relative">
              {/* Main image */}
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-1 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop&crop=faces"
                  alt="Woman working remotely on laptop"
                  className="w-full h-96 object-cover rounded-3xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-blue-100">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">+$1,250</div>
                    <div className="text-xs text-gray-600">This week</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-1">Start Your Journey</h3>
                  <p className="text-sm opacity-90">Remote work made simple</p>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
