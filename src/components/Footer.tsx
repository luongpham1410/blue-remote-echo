
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">RemoteJobs</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider">Legals</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Remote Work Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Data Protection</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-600 mb-4 md:mb-0">
            <span>© RemoteJobs. Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
            <span>remotejobs.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
