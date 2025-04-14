
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Briefcase } from "lucide-react";
// import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-careersng-purple" : "text-gray-600";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-careersng-navy">
              Careers<span className="text-careersng-purple">NG</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className={`${isActive('/jobs')} hover:text-careersng-purple transition-colors`}>
              Find Jobs
            </Link>
            <Link to="/categories" className={`${isActive('/categories')} hover:text-careersng-purple transition-colors`}>
              Categories
            </Link>
            <Link to="/about" className={`${isActive('/about')} hover:text-careersng-purple transition-colors`}>
              How It Works
            </Link>
            <Link to="/blog" className={`${isActive('/blog')} hover:text-careersng-purple transition-colors`}>
              Blog
            </Link>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button  className="flex items-center gap-2">
                <User size={16} />
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-careersng-purple hover:bg-careersng-purple-dark flex items-center gap-2">
                <Briefcase size={16} />
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-careersng-purple"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <Link
              to="/jobs"
              className={`block py-2 ${isActive('/jobs')} hover:text-careersng-purple`}
              onClick={() => setIsMenuOpen(false)}
            >
              Find Jobs
            </Link>
            <Link
              to="/categories"
              className={`block py-2 ${isActive('/categories')} hover:text-careersng-purple`}
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className={`block py-2 ${isActive('/about')} hover:text-careersng-purple`}
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/blog"
              className={`block py-2 ${isActive('/blog')} hover:text-careersng-purple`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/login">
                <button variant="outline" className="w-full justify-center">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="w-full justify-center bg-careersng-purple hover:bg-careersng-purple-dark">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
