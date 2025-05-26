
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, DollarSign, Star, Filter, Search, Briefcase, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const jobCategories = [
    { id: "all", name: "All Jobs", count: 45 },
    { id: "data-entry", name: "Data Entry", count: 12 },
    { id: "content-writing", name: "Content Writing", count: 8 },
    { id: "virtual-assistant", name: "Virtual Assistant", count: 10 },
    { id: "customer-service", name: "Customer Service", count: 7 },
    { id: "social-media", name: "Social Media", count: 8 }
  ];

  const jobs = [
    {
      id: 1,
      title: "Data Entry Specialist",
      company: "TechCorp Solutions",
      location: "Remote",
      type: "Part-time",
      salary: "$15-20/hour",
      rating: 4.8,
      reviews: 124,
      description: "Enter product information into our database system. No experience required, training provided.",
      requirements: ["Basic computer skills", "Attention to detail", "10+ hours/week availability"],
      category: "data-entry",
      urgent: false,
      featured: true
    },
    {
      id: 2,
      title: "Content Writer",
      company: "Digital Marketing Pro",
      location: "Remote",
      type: "Freelance",
      salary: "$25-35/hour",
      rating: 4.9,
      reviews: 89,
      description: "Create engaging blog posts and articles for various industries. SEO knowledge preferred.",
      requirements: ["Strong writing skills", "Research abilities", "Portfolio required"],
      category: "content-writing",
      urgent: true,
      featured: false
    },
    {
      id: 3,
      title: "Virtual Assistant",
      company: "StartUp Hub",
      location: "Remote",
      type: "Full-time",
      salary: "$18-25/hour",
      rating: 4.7,
      reviews: 156,
      description: "Provide administrative support including email management, scheduling, and customer communication.",
      requirements: ["Excellent communication", "Organizational skills", "Previous VA experience preferred"],
      category: "virtual-assistant",
      urgent: false,
      featured: true
    },
    {
      id: 4,
      title: "Customer Support Representative",
      company: "CloudTech Inc",
      location: "Remote",
      type: "Part-time",
      salary: "$16-22/hour",
      rating: 4.6,
      reviews: 203,
      description: "Handle customer inquiries via chat and email. Flexible schedule available.",
      requirements: ["Customer service experience", "Problem-solving skills", "Positive attitude"],
      category: "customer-service",
      urgent: false,
      featured: false
    },
    {
      id: 5,
      title: "Social Media Manager",
      company: "Brand Boost Agency",
      location: "Remote",
      type: "Contract",
      salary: "$20-30/hour",
      rating: 4.8,
      reviews: 67,
      description: "Manage social media accounts, create content, and engage with followers across platforms.",
      requirements: ["Social media expertise", "Creative thinking", "Analytics knowledge"],
      category: "social-media",
      urgent: true,
      featured: true
    },
    {
      id: 6,
      title: "Online Tutor",
      company: "EduConnect",
      location: "Remote",
      type: "Freelance",
      salary: "$22-40/hour",
      rating: 4.9,
      reviews: 91,
      description: "Teach students online in various subjects. Flexible scheduling and competitive pay.",
      requirements: ["Subject expertise", "Teaching experience", "Bachelor's degree preferred"],
      category: "education",
      urgent: false,
      featured: false
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Find Your Perfect <span className="text-blue-200">Remote Job</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Browse through hundreds of verified remote opportunities and start earning today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search jobs, companies, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-3 text-lg rounded-full border-0 shadow-lg"
                />
              </div>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full">
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">45</div>
              <div className="text-gray-600 text-sm">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">240k+</div>
              <div className="text-gray-600 text-sm">Active Workers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">$2.5M+</div>
              <div className="text-gray-600 text-sm">Total Paid</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Filter Jobs</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {jobCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="text-sm">{category.count}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Available
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4" />
                <span>Updated daily</span>
              </div>
            </div>

            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {job.featured && (
                          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                        {job.urgent && (
                          <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">
                            Urgent
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-gray-600 font-medium mb-2">{job.company}</p>
                      <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{job.rating} ({job.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>12 applicants</span>
                      </div>
                      <span>Posted 2 days ago</span>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or browse all categories.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
