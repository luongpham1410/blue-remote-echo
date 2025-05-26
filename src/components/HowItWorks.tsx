
import { ArrowRight, BookOpen, CheckCircle, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Start Learning",
      description: "Master new skills through our comprehensive online training programs or free interactive tutorials",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      icon: CheckCircle,
      title: "Finish Projects",
      description: "Work on assignments from opportunities you've successfully qualified for",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      icon: DollarSign,
      title: "Receive Payment Weekly",
      description: "Get compensated quickly through PayPal or AirTM based on your performance & completed assignments",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider border border-blue-100">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Complete projects, <span className="relative">
              <span>earn income</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </span>.<br />
            <span className="text-gray-600">It's that straightforward</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From data entry to content creation, make money finishing various remote assignments.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[350px] flex flex-col">
                  <div className="relative mb-4">
                    <div className="w-full h-32 rounded-xl overflow-hidden relative">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white text-blue-600 rounded-xl w-12 h-12 flex items-center justify-center shadow-lg">
                        <step.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-1">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Arrows positioned between boxes */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2 z-10">
              <div className="bg-blue-600 rounded-full p-2 shadow-lg">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2 z-10">
              <div className="bg-blue-600 rounded-full p-2 shadow-lg">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/jobs" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
            View Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
