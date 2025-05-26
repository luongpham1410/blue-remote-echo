
const FlexibilitySection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider border border-blue-100">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Flexible Schedule
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Work from anywhere,<br />
            <span className="text-gray-600">anytime.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the freedom & flexibility of remote employment. All you need is a laptop & internet connection.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full">
            <div className="w-full h-[400px] rounded-2xl shadow-xl overflow-hidden relative border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop"
                alt="Remote work flexibility"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-xl max-w-sm border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-md"></div>
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
