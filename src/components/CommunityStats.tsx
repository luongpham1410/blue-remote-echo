
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
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 uppercase tracking-wider border border-white/20">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Join a worldwide community
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Connect with ambitious<br />
            <span className="text-gray-300">remote workers like yourself.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Become part of a community of 240,000+ remote professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-300 font-semibold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
