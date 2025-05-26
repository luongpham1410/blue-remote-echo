
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
    <section id="how-it-works" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-blue-50 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider border border-blue-100">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              How It Works
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Complete projects, earn income.<br />
            <span className="text-gray-600">It's that straightforward</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From data entry to content creation, make money finishing various remote assignments.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 h-full min-h-[450px] flex flex-col">
                  <div className="relative mb-8">
                    <div className="w-full h-52 rounded-2xl overflow-hidden relative">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-6 right-6 bg-white text-blue-600 rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg">
                        <step.icon className="w-7 h-7" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-1 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Clean arrows positioned between boxes */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2 z-10">
              <div className="bg-blue-600 rounded-full p-2 shadow-md">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2 z-10">
              <div className="bg-blue-600 rounded-full p-2 shadow-md">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Begin earning today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
