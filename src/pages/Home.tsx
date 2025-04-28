
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Code, 
  ArrowRight 
} from "lucide-react";

import { IoDocumentTextOutline } from "react-icons/io5";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import CategoryCard from "../components/CategoryCard";
import TestimonialCard from "../components/TestimonialCard";
import HowItWorks from "../components/HowItWorks";
import { BsVectorPen } from "react-icons/bs";
import { GrLineChart } from "react-icons/gr";
import { SlCamera } from "react-icons/sl";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { PiUsersLight } from "react-icons/pi";



// Mock data for featured jobs
const featuredJobs = [
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
  }
];

// Mock data for categories
const categories = [
  {
    title: "Programming",
    icon: <Code size={24} />,
    jobCount: 156,
    slug: "programming",
    color: "bg-blue-100"
  },
  {
    title: "Design",
    icon: <BsVectorPen size={24} />,
    jobCount: 93,
    slug: "design",
    color: "bg-pink-100"
  },
  {
    title: "Marketing",
    icon: <GrLineChart size={24} />,
    jobCount: 78,
    slug: "marketing",
    color: "bg-orange-100"
  },
  {
    title: "Writing",
    icon: <IoDocumentTextOutline size={24} />,
    jobCount: 105,
    slug: "writing",
    color: "bg-green-100"
  },
  {
    title: "Photography",
    icon: <SlCamera size={24} />,
    jobCount: 42,
    slug: "photography",
    color: "bg-purple-100"
  },
  {
    title: "IT Support",
    icon: <AiOutlineLaptop size={24} />,
    jobCount: 67,
    slug: "it-support",
    color: "bg-yellow-100"
  },
  {
    title: "Teaching",
    icon: <BsBook size={24} />,
    jobCount: 51,
    slug: "teaching",
    color: "bg-red-100"
  },
  {
    title: "Customer Service",
    icon: <PiUsersLight size={24} />,
    jobCount: 88,
    slug: "customer-service",
    color: "bg-teal-100"
  }
];

// Mock testimonials
const testimonials = [
  {
    quote: "CareersNG helped me land my first remote development job while still in university. The platform is intuitive and has amazing opportunities.",
    name: "David Okonkwo",
    role: "Full-stack Developer",
    company: "Tech Solutions Ltd",
  },
  {
    quote: "As a freelance content writer, I've doubled my client base through CareersNG. The verification process ensures I only work with serious clients.",
    name: "Amina Ibrahim",
    role: "Content Writer",
    company: "Self-employed",
  },
  {
    quote: "Finding quality graphic designers was always a challenge until we started recruiting through CareersNG. Now we have access to Nigeria's best talent.",
    name: "Chidi Nwosu",
    role: "Creative Director",
    company: "PixelPerfect Media",
  }
];

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    keyword: "",
    location: "",
    jobType: "",
  });

  const handleSearch = (query: typeof searchParams) => {
    setSearchParams(query);
    // In a real app, this would trigger a search with these parameters
    console.log("Searching with:", query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-[#242935] from-careersng-navy to-careersng-navy/90 text-white py-16 md:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl lg:text-6xl font-extrabold leading-tight mb-6">
              Find Remote, Freelance & Internship <br className="" />
              <span className="text-[#ed9172]">Jobs in Nigeria</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              CareersmattersNG connects talented Nigerians with the best remote and flexible 
              work opportunities across the country and beyond.
            </p>
            <Link to='/jobs' type="submit" className="bg-[#ee774f] sm:hidden text-white w-[140px] py-2 font-medium"
            >
              Find Jobs
            </Link>
            
            <div className="w-full hidden sm:block max-w-4xl">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <div className="hidden mt-12 text-sm text-gray-300">
              <p>Popular searches: Web Development, Content Writing, Digital Marketing, UI/UX Design</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-careersng-navy">Featured Jobs</h2>
            <Link to="/jobs" className="font-medium flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-careersng-navy mb-4">Popular Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore job opportunities across various industries and specializations
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/categories">
              <button  className="text-white p-2 px-4 text-sm bg-[#ee774f]">
                Browse All Categories
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <HowItWorks />
          
          <div className="mt-12 text-center">
            <Link to="/register">
              <button className="text-white p-2 px-4 text-sm bg-[#ee774f]">
                Sign Up to Start Earning
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-careersng-navy mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from freelancers and employers who have found success through CareersNG
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto  text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians finding rewarding opportunities and achieving career growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <button className="bg-[#F25A29] w-full text-white p-3 text-sm hover:bg-[#c26961dd] hover:text-careersng-purple-dark">
                Create an Account
              </button>
            </Link>
            <Link to="/">
              <button className="text-white w-full p-3 border text-sm border-white hover:bg-white/10">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
