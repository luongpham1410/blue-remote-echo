
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
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 uppercase tracking-wider border border-white/20">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Join a worldwide community
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Connect with ambitious<br />
            <span className="text-gray-300">remote workers like yourself.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Become part of a community of 240,000+ remote professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300 font-semibold">
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
