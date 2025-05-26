
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
      {/* Gradient decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <span className="text-4xl font-bold">RemoteJobs</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to start your remote work journey?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of remote workers earning money from home. 
            Flexible schedules, competitive pay, and endless opportunities await.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
              Start Earning Today
            </Button>
            <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto">
              Learn More
            </Button>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 RemoteJobs. Empowering remote workers worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
