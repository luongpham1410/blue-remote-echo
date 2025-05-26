
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
            className={`w-2 h-2 rounded-full ${
              dot <= active ? '' : 'bg-gray-300'
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
            className={`text-lg font-bold ${
              sign <= active ? 'text-green-500' : 'text-gray-300'
            }`}
          >
            $
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider border border-blue-100">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              ADVANCE YOUR EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Progress through levels, increase earnings.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Gain expertise in more complex projects that offer higher compensation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {levels.map((level, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full border border-gray-200">
                <div className="w-full h-40 rounded-xl mb-6 overflow-hidden">
                  <img 
                    src={level.image} 
                    alt={level.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{level.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Complexity</div>
                    {renderDots(3, level.difficulty, 'difficulty')}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Compensation</div>
                    {renderDollarSigns(level.pay)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressionSection;
