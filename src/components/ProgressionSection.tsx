
const ProgressionSection = () => {
  const levels = [
    {
      title: "Beginner Tasks",
      difficulty: 1,
      pay: 1,
      description: "Simple data entry and basic online tasks"
    },
    {
      title: "Intermediate Projects", 
      difficulty: 2,
      pay: 2,
      description: "Content creation and moderate complexity assignments"
    },
    {
      title: "Advanced Assignments",
      difficulty: 3,
      pay: 3,
      description: "Specialized projects with higher compensation"
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
                <div className="w-full h-40 rounded-xl mb-6 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-400 rounded opacity-50">
                      <svg className="w-full h-full text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
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
