
import { Calendar, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Remote Jobs for Nigerian Professionals in 2025",
    excerpt: "Discover the most sought-after remote positions for Nigerian talents in the global marketplace.",
    author: "Chioma Eze",
    date: "April 10, 2025",
    readTime: "8 min read",
    category: "Remote Work",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
  },
  {
    id: 2,
    title: "How to Create a Winning Freelance Profile on CareematterrsNG",
    excerpt: "Learn the essential tips and tricks to make your freelance profile stand out to potential clients.",
    author: "Oluwaseun Adeyemi",
    date: "April 5, 2025",
    readTime: "6 min read",
    category: "Freelancing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Nigerian Tech Industry: Emerging Opportunities in 2025",
    excerpt: "An overview of the growing tech scene in Nigeria and the opportunities it presents for professionals.",
    author: "Tunde Johnson",
    date: "March 28, 2025",
    readTime: "10 min read",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Navigating Contract Negotiations as a Nigerian Freelancer",
    excerpt: "Essential legal tips for freelancers to ensure fair contracts and timely payments from clients.",
    author: "Amina Ibrahim",
    date: "March 20, 2025",
    readTime: "7 min read",
    category: "Legal Advice",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 5,
    title: "From Full-time to Freelance: A Transition Guide",
    excerpt: "A step-by-step guide to help Nigerian professionals transition from traditional employment to freelancing.",
    author: "David Okonkwo",
    date: "March 15, 2025",
    readTime: "9 min read",
    category: "Career Advice",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Building Your Personal Brand as a Nigerian Professional",
    excerpt: "Strategies for creating a strong personal brand that attracts clients and opportunities.",
    author: "Grace Adebayo",
    date: "March 8, 2025",
    readTime: "6 min read",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <section className="bg-gray-900 py-10 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">CareersmattersNG Blog</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Tips, strategies, and insights to thrive in Nigeria's remote and freelance job market
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto ">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="h-64 w-full object-cover md:h-full"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <span className="inline-block bg-careersng-purple-light text-careersng-purple px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured
                  </span>
                  <h2 className="text-2xl font-bold text-careersng-navy mb-3">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <User size={16} className="mr-1" />
                    <span className="mr-4">{blogPosts[0].author}</span>
                    <Calendar size={16} className="mr-1" />
                    <span className="mr-4">{blogPosts[0].date}</span>
                    <Clock size={16} className="mr-1" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link to={`/blog/${blogPosts[0].id}`} className="bg-careersng-purple hover:bg-careersng-purple-dark">
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="h-full overflow-hidden p-2 border border-gray-200 bg-white rounded-xl flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full rounded-md h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="card-content p-1 py-4 flex flex-col gap-3">

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center">
                            <Tag size={14} className="mr-1 text-[#ee774f]" />
                            <span className="text-xs text-[#ee774f] font-medium">
                            {post.category}
                            </span>
                        </div>
                        <h6 className="text-lg font-bold">{post.title}</h6>
                        <p className="line-clamp-2">{post.excerpt}</p>
                    </div>

                    <pattern className="flex-grow">
                        <div className="flex items-center text-xs text-gray-500">
                            <User size={14} className="mr-1" />
                            <span className="mr-3">{post.author}</span>
                            <Calendar size={14} className="mr-1" />
                            <span className="mr-3">{post.date}</span>
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime}</span>
                        </div>
                    </pattern>
                    <div className="">
                        <Link to={`/blog/${post.id}`} className=" text-[#ee774f] text-sm hover:text-careersng-purple-dark p-0 h-auto">
                            Read More →
                        </Link>
                    </div>

                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-10 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button  className="text-gray-500 border-gray-300">
                Previous
              </button>
              
              <button className="bg-careersng-purple">1</button>
              <button >2</button>
              <button  >3</button>
              
              <button   className="text-gray-500 border-gray-300">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-10 bg-white text-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-careersng-navy to-careersng-purple-dark rounded-xl p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Subscribe to our newsletter
              </h2>
              <p className="text-gray-400 mb-6">
                Get the latest insights on remote work, freelancing, and job opportunities in Nigeria directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 border border-gray-200 placeholder:text-sm flex-grow "
                />
                <button  className=" border border-gray-400 p-4 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
