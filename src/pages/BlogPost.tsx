
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";

// Import the mock blog data
// import { blogPosts } from "@/data/blogData";

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
      title: "How to Create a Winning Freelance Profile on CareersNG",
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
const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the post with the matching ID
    const foundPost = blogPosts.find(post => post.id === Number(id));
    setPost(foundPost);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* <Navbar /> */}
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl">Loading post...</p>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* <Navbar /> */}
        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="text-lg mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
          <Link to="/blog">
            <button className="flex items-center gap-2 bg-careersng-purple hover:bg-careersng-purple-dark">
              <ArrowLeft size={16} />
              Back to Blog
            </button>
          </Link>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}

      <article className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-sm text-gray-500 hover:text-careersng-purple">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to="/blog" className="text-sm text-gray-500 hover:text-careersng-purple">
                      Blog
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm text-gray-700">
                      {post.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Blog post header */}
          <header className="mb-8">
            <div className="flex items-center mb-4">
              <Tag size={16} className="mr-1 text-careersng-purple" />
              <span className="text-sm text-careersng-purple font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-careersng-navy mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-y-2">
              <User size={16} className="mr-1" />
              <span className="mr-4">{post.author}</span>
              <Calendar size={16} className="mr-1" />
              <span className="mr-4">{post.date}</span>
              <Clock size={16} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          {/* Blog content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">{post.excerpt}</p>
            
            {/* This would normally be actual blog content, but we're using placeholder text */}
            <p className="mb-4">
              The Nigerian job market continues to evolve rapidly, creating new opportunities for skilled professionals across various industries. As global work trends shift, there's an increasing demand for remote talents from Nigeria who can provide quality services to international clients.
            </p>
            
            <p className="mb-4">
              This blog post explores the current landscape and offers insights into how Nigerian professionals can position themselves for success in the changing work environment. From skill development to personal branding, we'll cover essential strategies for thriving in today's competitive market.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Key Insights</h2>
            
            <p className="mb-4">
              The remote work revolution has opened doors for talented Nigerians to work with companies worldwide without geographic limitations. This shift has created unprecedented opportunities but also increased competition as professionals from across the globe vie for the same positions.
            </p>
            
            <p className="mb-4">
              To stand out in this competitive landscape, Nigerian professionals need to focus on developing in-demand skills, building a strong online presence, and consistently delivering high-quality work that exceeds client expectations.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Recommendations</h2>
            
            <p className="mb-4">
              Based on our research and industry insights, here are some recommendations for Nigerian professionals looking to advance their careers:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Invest in continuous learning and skill development</li>
              <li>Build a strong portfolio showcasing your best work</li>
              <li>Leverage professional networking platforms like LinkedIn</li>
              <li>Seek mentorship from experienced professionals in your field</li>
              <li>Consider specialized certification programs to validate your expertise</li>
            </ul>
            
            <p>
              By implementing these strategies, you can enhance your marketability and position yourself for success in Nigeria's evolving job market.
            </p>
          </div>

          {/* Back to blog button */}
          <div className="mt-10">
            <Link to="/blog">
              <button  className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to All Articles
              </button>
            </Link>
          </div>
        </div>
      </article>

      {/* <Footer /> */}
    </div>
  );
};

export default BlogPost;
