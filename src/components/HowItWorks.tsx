
import { ArrowRight, BookOpen, CheckCircle, DollarSign } from "lucide-react";

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
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete projects, earn income. It's that straightforward
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From data entry to content creation, make money finishing various remote assignments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                      <step.icon className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="bg-white rounded-full p-2 shadow-lg">
                        <ArrowRight className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Begin earning today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
