
import { Clock, MapPin, Wifi } from "lucide-react";

const FlexibilitySection = () => {
  const features = [
    {
      icon: Clock,
      title: "Choose Your Hours",
      description: "Work when it suits you best"
    },
    {
      icon: MapPin,
      title: "Any Location",
      description: "Beach, café, or home office"
    },
    {
      icon: Wifi,
      title: "Just Need Internet",
      description: "Simple requirements"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-indigo-100 rounded-full opacity-15 blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider border border-blue-100">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Flexible Schedule
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Work from{" "}
              <span className="relative">
                <span className="gradient-text">anywhere</span>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              </span>
              ,<br />
              <span className="text-gray-600">anytime.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the freedom & flexibility of remote employment. All you need is a laptop & internet connection.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content Section - Now on the left */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}

              {/* CTA - Now at the bottom of the left section */}
              <div className="pt-2">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Start working flexibly
                </button>
              </div>
            </div>

            {/* Image Section - Now on the right with adjusted positioning */}
            <div className="order-2 lg:order-2 -mt-4">
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-1 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                    alt="Remote work flexibility"
                    className="w-full h-80 object-cover rounded-3xl"
                  />
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Online Now</h3>
                      <p className="text-gray-600 text-sm">Working remotely</p>
                    </div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibilitySection;
