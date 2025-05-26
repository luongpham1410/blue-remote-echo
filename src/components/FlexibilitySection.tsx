
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
          <div className="relative max-w-4xl">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-blue-700">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Remote Freedom</h3>
                <p className="text-lg">Work on your own terms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibilitySection;
