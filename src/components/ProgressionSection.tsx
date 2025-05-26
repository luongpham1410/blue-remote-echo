
const ProgressionSection = () => {
  const levels = [
    {
      title: "Beginner Tasks",
      difficulty: 1,
      pay: 1,
      image: "bg-gradient-to-br from-green-100 to-green-200"
    },
    {
      title: "Intermediate Projects", 
      difficulty: 2,
      pay: 2,
      image: "bg-gradient-to-br from-yellow-100 to-orange-200"
    },
    {
      title: "Advanced Assignments",
      difficulty: 3,
      pay: 3,
      image: "bg-gradient-to-br from-purple-100 to-blue-200"
    }
  ];

  const renderDots = (count: number, active: number) => {
    return (
      <div className="flex space-x-1">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-full h-48 ${level.image} rounded-xl mb-6 flex items-center justify-center`}>
                  <div className="text-4xl font-bold text-gray-700">{index + 1}</div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Difficulty</div>
                    {renderDots(3, level.difficulty)}
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Pay</div>
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
