
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-18 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold flex items-center text-careersng-navy">
                <img src="../../Images/logo.png" alt="" className="w-10" />
                <h1 className="text-2xl font-bold text-careersng-navy">Careers<span className="text-[#F25A29]">NG</span></h1>
              
            </div>
          </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              CareersNG connects Nigerian freelancers, remote workers, and internship 
              seekers with potential employers and clients. Find your next opportunity today.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-careersng-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-careersng-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-careersng-purple">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-careersng-purple">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-careersng-purple">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-careersng-purple">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-careersng-purple">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-careersng-purple">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-careersng-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-careersng-purple">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-careersng-purple">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-careersng-purple">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-gray-300">
              Subscribe to our newsletter for updates.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-lg px-4 py-2 focus:outline-none text-careersng-navy"
                />
                <button
                  type="submit"
                  className="rounded-r-lg bg-careersng-purple px-3 py-2 text-white hover:bg-careersng-purple-dark"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} CareersNG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
