
import { useState, useEffect } from "react";
import { Briefcase, Filter, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
// import { 
//   Pagination, 
//   PaginationContent, 
//   PaginationItem, 
//   PaginationLink, 
//   PaginationNext, 
//   PaginationPrevious,
//   PaginationEllipsis
// } from "@/components/ui/pagination";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";

// Mock data for jobs
const allJobs = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "TechNova Solutions",
    logo: "",
    location: "Lagos",
    type: "Remote" as const,
    category: "Programming",
    jobType: "Freelance" as const,
    salary: "₦500,000 - ₦800,000",
    postedAt: "2 days ago",
    featured: true
  },
  {
    id: "2",
    title: "Content Writer",
    company: "Media Pro",
    logo: "",
    location: "Abuja",
    type: "Remote" as const,
    category: "Writing",
    jobType: "Contract" as const,
    salary: "₦200,000 - ₦350,000",
    postedAt: "1 week ago",
    featured: true
  },
  {
    id: "3",
    title: "UI/UX Design Intern",
    company: "Creative Hub",
    logo: "",
    location: "Lagos",
    type: "Hybrid" as const,
    category: "Design",
    jobType: "Internship" as const,
    salary: "₦100,000 - ₦150,000",
    postedAt: "3 days ago"
  },
  {
    id: "4",
    title: "Digital Marketing Specialist",
    company: "Growth Nigeria",
    logo: "",
    location: "Port Harcourt",
    type: "Remote" as const,
    category: "Marketing",
    jobType: "Contract" as const,
    salary: "₦300,000 - ₦450,000",
    postedAt: "Just now"
  },
  {
    id: "5",
    title: "Full Stack Developer",
    company: "FinTech Innovations",
    logo: "",
    location: "Lagos",
    type: "Onsite" as const,
    category: "Programming",
    jobType: "Full-time" as const,
    salary: "₦700,000 - ₦1,000,000",
    postedAt: "5 days ago"
  },
  {
    id: "6",
    title: "Graphic Designer",
    company: "Creative Solutions",
    logo: "",
    location: "Abuja",
    type: "Remote" as const,
    category: "Design",
    jobType: "Freelance" as const,
    salary: "₦150,000 - ₦300,000",
    postedAt: "2 weeks ago"
  },
  {
    id: "7",
    title: "Social Media Manager",
    company: "Brand Ambassadors",
    logo: "",
    location: "Remote",
    type: "Remote" as const,
    category: "Marketing",
    jobType: "Contract" as const,
    salary: "₦250,000 - ₦400,000",
    postedAt: "3 days ago"
  },
  {
    id: "8",
    title: "Frontend Developer Intern",
    company: "WebTech Nigeria",
    logo: "",
    location: "Lagos",
    type: "Hybrid" as const,
    category: "Programming",
    jobType: "Internship" as const,
    salary: "₦80,000 - ₦120,000",
    postedAt: "1 week ago"
  }
];

// Categories for filter
const categories = [
  "All Categories",
  "Programming",
  "Design",
  "Marketing",
  "Writing",
  "Customer Service",
  "Sales",
  "Finance",
  "Human Resources"
];

// Job types for filter
const jobTypes = [
  "All Types",
  "Freelance",
  "Contract",
  "Internship",
  "Full-time",
  "Part-time"
];

// Location types for filter
const locations = [
  "All Locations",
  "Remote",
  "Onsite",
  "Hybrid"
];

// Job levels for filter
const jobLevels = [
  "All Levels",
  "Entry Level",
  "Junior",
  "Mid-Level",
  "Senior",
  "Executive"
];

const Jobs = () => {
  const [searchParams, setSearchParams] = useState({
    keyword: "",
    location: "",
    jobType: "",
  });
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [_selectedJobLevels, setSelectedJobLevels] = useState<string[]>([]);
  
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isJobLevelOpen, setIsJobLevelOpen] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [sortOrder, setSortOrder] = useState("most_recent");
  
  const itemsPerPage = 4;
//   const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  
  // Handle category toggle
//   const toggleCategory = (category: string) => {
//     setSelectedCategories(prev => {
//       if (prev.includes(category)) {
//         return prev.filter(cat => cat !== category);
//       } else {
//         return [...prev, category];
//       }
//     });
//   };
  
  // Handle job type toggle
//   const toggleJobType = (type: string) => {
//     setSelectedJobTypes(prev => {
//       if (prev.includes(type)) {
//         return prev.filter(t => t !== type);
//       } else {
//         return [...prev, type];
//       }
//     });
//   };
  
  // Handle location toggle
//   const toggleLocation = (location: string) => {
//     setSelectedLocations(prev => {
//       if (prev.includes(location)) {
//         return prev.filter(loc => loc !== location);
//       } else {
//         return [...prev, location];
//       }
//     });
//   };
  
  // Handle job level toggle
//   const toggleJobLevel = (level: string) => {
//     setSelectedJobLevels(prev => {
//       if (prev.includes(level)) {
//         return prev.filter(lvl => lvl !== level);
//       } else {
//         return [...prev, level];
//       }
//     });
//   };
  
  // Handle search
  const handleSearch = (query: typeof searchParams) => {
    setSearchParams(query);
  };
  
  // Handle sorting
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };
  
  // Apply all filters
  const applyFilters = () => {
    let results = [...allJobs];
    
    // Filter by search keyword
    if (searchParams.keyword) {
      const keyword = searchParams.keyword.toLowerCase();
      results = results.filter(job => 
        job.title.toLowerCase().includes(keyword) || 
        job.company.toLowerCase().includes(keyword) ||
        job.category.toLowerCase().includes(keyword)
      );
    }
    
    // Filter by search location
    if (searchParams.location) {
      const location = searchParams.location.toLowerCase();
      results = results.filter(job => 
        job.location.toLowerCase().includes(location)
      );
    }
    
    // Filter by categories
    if (selectedCategories.length > 0 && !selectedCategories.includes("All Categories")) {
      results = results.filter(job => 
        selectedCategories.includes(job.category)
      );
    }
    
    // Filter by job types
    if (selectedJobTypes.length > 0 && !selectedJobTypes.includes("All Types")) {
      results = results.filter(job => 
        selectedJobTypes.includes(job.jobType)
      );
    }
    
    // Filter by locations
    if (selectedLocations.length > 0 && !selectedLocations.includes("All Locations")) {
      results = results.filter(job => 
        selectedLocations.includes(job.type)
      );
    }
    
    // Sort the results
    switch (sortOrder) {
      case "most_recent":
        // Already sorted by most recent in the mock data
        break;
      case "salary_high_low":
        results.sort((a, b) => {
          const aAvg = parseInt(a.salary.replace(/[^\d]/g, "")) / 2;
          const bAvg = parseInt(b.salary.replace(/[^\d]/g, "")) / 2;
          return bAvg - aAvg;
        });
        break;
      case "salary_low_high":
        results.sort((a, b) => {
          const aAvg = parseInt(a.salary.replace(/[^\d]/g, "")) / 2;
          const bAvg = parseInt(b.salary.replace(/[^\d]/g, "")) / 2;
          return aAvg - bAvg;
        });
        break;
      case "featured":
        results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }
    
    setFilteredJobs(results);
    setCurrentPage(1); // Reset to first page when filters change
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedJobTypes([]);
    setSelectedLocations([]);
    setSelectedJobLevels([]);
    setSearchParams({ keyword: "", location: "", jobType: "" });
    setSortOrder("most_recent");
  };
  
  // Get current jobs for pagination
  const getCurrentJobs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredJobs.slice(startIndex, endIndex);
  };
  
  // Effect to apply filters when any filter changes
  useEffect(() => {
    applyFilters();
  }, [searchParams, sortOrder]);
  
  // Generate pagination items
//   const renderPaginationItems = () => {
//     const items = [];
    
//     for (let i = 1; i <= totalPages; i++) {
//       // Only show first, last, and pages around current page
//       if (
//         i === 1 || 
//         i === totalPages || 
//         (i >= currentPage - 1 && i <= currentPage + 1)
//       ) {
//         items.push(
//           <PaginationItem key={i}>
//             <PaginationLink 
//               isActive={currentPage === i}
//               onClick={() => setCurrentPage(i)}
//             >
//               {i}
//             </PaginationLink>
//           </PaginationItem>
//         );
//       } else if (
//         (i === currentPage - 2 && currentPage > 3) || 
//         (i === currentPage + 2 && currentPage < totalPages - 2)
//       ) {
//         items.push(
//           <PaginationItem key={`ellipsis-${i}`}>
//             <PaginationEllipsis />
//           </PaginationItem>
//         );
//       }
//     }
    
    // return items;
//   };
  
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-gray-900 py-10 md:py-16">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Find Your Dream Job</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Browse through hundreds of opportunities perfect for Nigerian freelancers and remote workers
            </p>
            
            <div className="w-full max-w-4xl">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Jobs Listing Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="font-medium text-careersng-navy flex items-center mb-4">
                    <Filter size={16} className="mr-2" />
                    Filters
                  </h3>
                  <button 
                    className="text-sm border border-gray-600 w-full rounded-xl p-3"
                    onClick={clearAllFilters}
                  >
                    Clear All Filters
                  </button>
                </div>
                
                {/* Category Filter */}
                <div className="mb-5">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  >
                    <h4 className="font-medium text-careersng-navy">Category</h4>
                    {isCategoryOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  
                  {isCategoryOpen && (
                    <div className="mt-3 space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <input 
                          type="checkbox"
                            // id={`category-${category}`} 
                            // checked={selectedCategories.includes(category)}
                            // onCheckedChange={() => toggleCategory(category)}
                          />
                          <label 
                            htmlFor={`category-${category}`} 
                            className="text-sm cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Job Type Filter */}
                <div className="mb-5">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
                  >
                    <h4 className="font-medium text-careersng-navy">Employment Type</h4>
                    {isJobTypeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  
                  {isJobTypeOpen && (
                    <div className="mt-3 space-y-2">
                      {jobTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          {/* <Checkbox 
                            id={`type-${type}`} 
                            checked={selectedJobTypes.includes(type)}
                            onCheckedChange={() => toggleJobType(type)}
                          /> */}
                          <input type="checkbox" name="" id="" />
                          <label 
                            htmlFor={`type-${type}`} 
                            className="text-sm cursor-pointer"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Location Filter */}
                <div className="mb-5">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsLocationOpen(!isLocationOpen)}
                  >
                    <h4 className="font-medium text-careersng-navy">Location</h4>
                    {isLocationOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  
                  {isLocationOpen && (
                    <div className="mt-3 space-y-2">
                      {locations.map((loc) => (
                        <div key={loc} className="flex items-center space-x-2">
                          {/* <Checkbox 
                            id={`location-${loc}`} 
                            checked={selectedLocations.includes(loc)}
                            onCheckedChange={() => toggleLocation(loc)}
                          /> */}
                          <input type="checkbox" name="" id="" />
                          <label 
                            htmlFor={`location-${loc}`} 
                            className="text-sm cursor-pointer"
                          >
                            {loc}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Job Level Filter */}
                <div className="mb-5">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsJobLevelOpen(!isJobLevelOpen)}
                  >
                    <h4 className="font-medium text-careersng-navy flex items-center">
                      <GraduationCap size={16} className="mr-2" />
                      Job Level
                    </h4>
                    {isJobLevelOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  
                  {isJobLevelOpen && (
                    <div className="mt-3 space-y-2">
                      {jobLevels.map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          {/* <Checkbox 
                            id={`level-${level}`} 
                            checked={selectedJobLevels.includes(level)}
                            onCheckedChange={() => toggleJobLevel(level)}
                          /> */}
                          <input type="checkbox" name="" id="" />
                          <label 
                            htmlFor={`level-${level}`} 
                            className="text-sm cursor-pointer"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <button 
                  className="text-sm  text-white border-0 bg-[#ee774f]  w-full rounded-xl p-3"
                  onClick={applyFilters}
                >
                  Apply Filters
                </button>
              </div>
            </div>
            
            {/* Jobs List */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <Briefcase size={20} className="mr-2 text-careersng-purple" />
                  <h2 className="text-xl font-semibold text-careersng-navy">
                    {filteredJobs.length} Jobs Available
                  </h2>
                </div>
                
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2 hidden sm:inline">Sort By:</span>
                  <select 
                    className="text-sm border border-gray-200 rounded-lg p-2 pr-8 focus:ring-careersng-purple focus:border-careersng-purple"
                    value={sortOrder}
                    onChange={handleSortChange}
                  >
                    <option value="most_recent">Most Recent</option>
                    <option value="salary_high_low">Salary: High to Low</option>
                    <option value="salary_low_high">Salary: Low to High</option>
                    <option value="featured">Featured</option>
                  </select>
                </div>
              </div>

              {/* Mobile toggle filters */}
              <div className="md:hidden mb-4">
                {/* <ToggleGroup type="multiple" className="justify-start mb-4 flex flex-wrap gap-2">
                  <ToggleGroupItem value="all" aria-label="Toggle all" className="text-xs">
                    All
                  </ToggleGroupItem>
                  <ToggleGroupItem value="remote" aria-label="Toggle remote" className="text-xs">
                    Remote
                  </ToggleGroupItem>
                  <ToggleGroupItem value="freelance" aria-label="Toggle freelance" className="text-xs">
                    Freelance
                  </ToggleGroupItem>
                  <ToggleGroupItem value="full-time" aria-label="Toggle full-time" className="text-xs">
                    Full-time
                  </ToggleGroupItem>
                  <ToggleGroupItem value="contract" aria-label="Toggle contract" className="text-xs">
                    Contract
                  </ToggleGroupItem>
                </ToggleGroup> */}
              </div>
              
              {/* Job cards */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {getCurrentJobs().map((job) => (
                    <JobCard key={job.id} {...job} />
                  ))}
                </div>
                
                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No jobs found</h3>
                    <p className="text-gray-500">
                      Try adjusting your search or filter criteria to find more jobs.
                    </p>
                    <button 
                      className="mt-4"
                      onClick={clearAllFilters}
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {/* {filteredJobs.length > 0 && (
                <div className="mt-8">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                      
                      {renderPaginationItems()}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Jobs;
