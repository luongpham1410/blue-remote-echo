
const FlexibilitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Flexible Schedule
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Work from anywhere, anytime.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the freedom & flexibility of remote employment. All you need is a laptop & internet connection.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full">
            <div className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
                alt="Remote work flexibility"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-xl max-w-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Remote Freedom</h3>
                    <p className="text-gray-600">Work on your own terms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibilitySection;
