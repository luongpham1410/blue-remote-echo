
const ProgressionSection = () => {
  const levels = [
    {
      title: "Beginner Tasks",
      difficulty: 1,
      pay: 1,
      description: "Simple data entry and basic online tasks",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Intermediate Projects", 
      difficulty: 2,
      pay: 2,
      description: "Content creation and moderate complexity assignments",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Advanced Assignments",
      difficulty: 3,
      pay: 3,
      description: "Specialized projects with higher compensation",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const renderDots = (count: number, active: number, type: 'difficulty' | 'pay') => {
    const colors = type === 'difficulty' 
      ? ['#3b82f6', '#eab308', '#ef4444'] // blue, yellow, red
      : ['#22c55e', '#22c55e', '#22c55e']; // green for all pay levels
    
    return (
      <div className="flex space-x-1">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              dot <= active ? '' : 'bg-gray-200'
            }`}
            style={dot <= active ? { backgroundColor: colors[dot - 1] } : {}}
          />
        ))}
      </div>
    );
  };

  const renderDollarSigns = (active: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3].map((sign) => (
          <span
            key={sign}
            className={`text-xl font-bold transition-colors duration-300 ${
              sign <= active ? 'text-green-500' : 'text-gray-200'
            }`}
          >
            $
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-100 rounded-full opacity-15 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider border border-blue-100 shadow-sm">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ADVANCE YOUR EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Progress through{" "}
            <span className="relative">
              <span className="gradient-text">levels</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
            </span>
            ,<br />
            <span className="text-gray-600">increase earnings.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gain expertise in more complex projects that offer higher compensation as you advance through our skill progression system.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {levels.map((level, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-gray-100 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                
                <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden relative">
                  <img 
                    src={level.image} 
                    alt={level.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{level.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{level.description}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Complexity</div>
                    {renderDots(3, level.difficulty, 'difficulty')}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Compensation</div>
                    {renderDollarSigns(level.pay)}
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Level {index + 1}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000"
                          style={{ width: `${((index + 1) / 3) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgressionSection;
