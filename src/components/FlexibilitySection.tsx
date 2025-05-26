
const FlexibilitySection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-green-50 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider border border-green-100">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Flexible Schedule
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Work from anywhere,<br />
            <span className="text-gray-600">anytime.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the freedom & flexibility of remote employment. All you need is a laptop & internet connection.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative max-w-5xl w-full">
            <div className="w-full h-[500px] rounded-3xl shadow-xl overflow-hidden relative border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop"
                alt="Remote work flexibility"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white rounded-3xl p-8 shadow-2xl max-w-sm border border-gray-100">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Remote Freedom</h3>
                    <p className="text-gray-600 text-lg">Work on your own terms</p>
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
