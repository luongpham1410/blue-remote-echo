
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
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      description: "Specialized projects with higher compensation"
    }
  ];

  const renderColoredDots = (count: number, active: number, type: 'difficulty' | 'pay') => {
    const colors = type === 'difficulty' 
      ? ['bg-green-500', 'bg-yellow-500', 'bg-red-500']
      : ['bg-green-500', 'bg-green-500', 'bg-green-500'];
    
    return (
      <div className="flex space-x-1 justify-center">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full ${
              dot <= active ? colors[dot - 1] : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-purple-50 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider border border-purple-100">
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Advance Your Skills
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Progress further,<br />
            <span className="text-gray-600">increase earnings.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Gain expertise in more challenging assignments that offer higher compensation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {levels.map((level, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 h-full border border-gray-100">
                <div className="w-full h-52 rounded-2xl mb-8 overflow-hidden relative">
                  <img 
                    src={level.image}
                    alt={level.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-blue-600">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{level.title}</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{level.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-3 text-center">Difficulty</div>
                    {renderColoredDots(3, level.difficulty, 'difficulty')}
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-3 text-center">Pay</div>
                    {renderColoredDots(3, level.pay, 'pay')}
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
