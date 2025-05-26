
const CommunityStats = () => {
  const stats = [
    {
      number: "240,000+",
      label: "Active Workers"
    },
    {
      number: "$15M",
      label: "Total Earnings"
    },
    {
      number: "90+",
      label: "Countries"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Join a worldwide community
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Connect with ambitious remote workers like yourself.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Become part of a community of 240,000+ remote professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-4">
                {stat.number}
              </div>
              <div className="text-xl text-gray-300 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
