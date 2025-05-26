
const ProgressionSection = () => {
  const levels = [
    {
      title: "Beginner Tasks",
      difficulty: 1,
      pay: 1,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      description: "Simple data entry and basic online tasks"
    },
    {
      title: "Intermediate Projects", 
      difficulty: 2,
      pay: 2,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
      description: "Content creation and moderate complexity assignments"
    },
    {
      title: "Advanced Assignments",
      difficulty: 3,
      pay: 3,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop&crop=entropy",
      description: "Specialized projects with higher compensation"
    }
  ];

  const renderDots = (count: number, active: number) => {
    return (
      <div className="flex space-x-1 justify-center">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full ${
              dot <= active ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Advance Your Skills
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Progress further, increase earnings.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gain expertise in more challenging assignments that offer higher compensation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative">
                  <img 
                    src={level.image}
                    alt={level.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{level.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{level.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-2 text-center">Difficulty</div>
                    {renderDots(3, level.difficulty)}
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-2 text-center">Pay</div>
                    {renderDots(3, level.pay)}
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
