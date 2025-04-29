import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  X } from "lucide-react";
import { VscMenu } from "react-icons/vsc";
import { ChevronDown } from "lucide-react";
import { UserContext } from "./UserContext";
import axios from "axios";
import Loading from "./Loading";
import { toast } from "sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  

  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useContext must be used within a UserProvider");
  }
  const {user, setUser} = context

  // console.log(user)
  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-red-700 underline font-extrabold"
      : "text-gray-600";
  };




  const handleLogout = async () => {
    setLoading(true)
    try {
      const refresh_token = localStorage.getItem("refresh_token");
      const access_token = localStorage.getItem("access_token");
  
      if (!refresh_token || !access_token) {
        console.error("No tokens found. Cannot logout.");
        return;
      }
  
      console.log("Logging user out...");
  
      const response = await axios.post(
        'https://careermattersng.onrender.com/logout/', 
        { refresh_token: refresh_token }, // <-- send an object, not just a string
        {
          headers: {
            "Content-Type": "application/json", // <-- fix the Content-Type
            "Authorization": `Bearer ${access_token}`
          }
        }
      );
  
      console.log(response.data);
  
      // Optional: clear local storage and redirect to login
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
      setUser(null)
  
      // redirect to login or home
      navigate('/'); // if you are using react-router
      toast("You have been logged out successfully!")
    } catch (error: any) {
      console.error("Logout error:", error);
    }finally{
      setLoading(false)
    }
  }
  

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      {
        loading && <Loading fullPage text="Signing you out, please wait..."/>
      }
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-3 items-center">
            <Link
              to="/"
              className={`${
                isActive("/jobs") ? "flex items-end space-x-2" : ""
              }`}
            >
              <div className="text-2xl font-bold flex items-end text-careersng-navy">
                <img src="../../Images/logo.png" alt="" className="w-8" />
                <h4 className="text-xl -ml-2 font-extrabold text-careersng-navy">
                  areermatters<span className="text-[#F25A29]">NG</span>
                </h4>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden mt-1 md:flex items-center font-semibold text-sm space-x-4">
              <Link
                to="/jobs"
                className={`${isActive(
                  "/jobs"
                )} hover:text-blue-900 transition-colors`}
              >
                Find Jobs
              </Link>
              <Link
                to="/post_job"
                className={`${isActive(
                  "/post_job"
                )} hover:text-blue-900 transition-colors`}
              >
                Post Job
              </Link>
              <Link
                to="/categories"
                className={`${isActive(
                  "/categories"
                )} hover:text-blue-900   transition-colors`}
              >
                Categories
              </Link>
              <Link
                to="/how_it_works"
                className={`${isActive(
                  "/how_it_works"
                )} hover:text-blue-900   transition-colors`}
              >
                How It Works
              </Link>
              <Link
                to="/blog"
                className={`${isActive(
                  "/blog"
                )} hover:text-blue-900  transition-colors`}
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <>
                <div
                  className="relative flex items-center gap-4"
                  ref={dropdownRef}
                >
                  <div className="relative">
                    <button
                      onClick={() => setOpen(!open)}
                      className="flex items-center gap-2 focus:outline-none"
                    >
                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                        
                          <div className="h-full w-full flex items-center justify-center bg-careersng-purple text-white font-semibold text-xs">
                            {user?.username.charAt(0)}
                          </div>
                        
                      </div>

                      <div className="flex flex-col items-start">
                        <h4 className="font-semibold text-xs">
                          {user?.username}
                        </h4>
                        <span className="text-[10px] text-gray-500">
                          {user?.email}
                        </span>
                      </div>

                      <ChevronDown className="h-4 w-4 text-gray-600" />
                    </button>

                    {/* Slide Animation */}
                    <div
                      className={`absolute flex flex-col gap-3 p-4 right-0 mt-2 w-48 bg-white shadow rounded-md z-50 border border-gray-300 transform transition-all duration-300 ease-in-out ${open ? "translate-x-0 opacity-100"    : "translate-x-10 opacity-0 pointer-events-none" }`}
                    >
                      {user?.is_staff  && (
                        <Link
                          to="/admin"
                          className={`${isActive(
                            "/admin"
                          )} hover:text-blue-900 transition-colors text-sm font-medium`}
                        >
                          Admin
                        </Link>
                      )}

                      {user?.role === "client" && (
                        <Link
                          to="/post_job"
                          className={`${isActive(
                            "/post_job"
                          )} hover:text-blue-900 transition-colors text-sm font-medium`}
                        >
                          Post Job
                        </Link>
                      )}
                      
                      <Link
                        to="/dashboard"
                        className={`${isActive(
                          "/dashboard"
                        )} hover:text-blue-900 transition-colors text-sm font-medium`}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          // handle logout here
                          setOpen(false);
                          handleLogout()
                        }}
                        className="w-full text-left hover:text-blue-900 transition-colors text-sm font-medium"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="border text-sm border-gray-800 p-2 px-5 items-center gap-2">
                    Log In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-[#ee774f] text-white text-sm hover:bg-careersng-purple-dark p-2 px-5 flex items-center">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-careersng-purple"
              onClick={() => setIsMenuOpen(true)}
            >
              <VscMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-end space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="../../Images/logo.png" alt="" className="w-8" />
            <h4 className="text-xl font-extrabold -ml-3 text-careersng-navy">
              areermatters<span className="text-[#F25A29]">NG</span>
            </h4>
          </Link>

          {/* Close button */}
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={28} className="text-gray-800" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex bg-white h-[100vh]  font-semibold flex-col px-6 py-6 space-y-5">
          {user && (
            <>
              <div className="flex items-center">
                <div className="h-12 min-w-12 rounded-full overflow-hidden bg-gray-200 mr-2">
                 
                    <div className="h-full w-full flex items-center justify-center bg-careersng-purple text-white ">
                      {user?.username.charAt(0)}
                    </div>
                  
                </div>
                <div className="flex flex-col">
                  <h4 className="font-extrabold ">{user?.username}</h4>
                  <span className="text-sm text-gray-500">{user?.email}</span>
                </div>
              </div>

              {user?.is_staff  && (
                <Link
                onClick={() => setIsMenuOpen(false)}
                  to="/admin"
                  className={`text-[17.7px] ${isActive(
                    "/admin"
                  )} hover:text-red-700 transition-colors  `}
                >
                  Admin
                </Link>
              )}

              <Link 
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className={`text-[17.7px] ${isActive(
                  "/dashboard"
                )} hover:text-red-700 transition-colors`}
              >
                Dashboard
              </Link>
              
              {user?.role === "client" && (
                <Link
                onClick={() => setIsMenuOpen(false)}
                  to="/post_job"
                  className={`text-[17.7px] ${isActive(
                    "/post_job"
                  )} hover:text-red-700 transition-colors `}
                >
                  Post Job
                </Link>
              )}

              
            </>
          )}

          <Link
            to="/jobs"
            onClick={() => setIsMenuOpen(false)}
            className={`text-[17.7px] ${isActive(
              "/jobs"
            )} hover:text-careersng-purple`}
          >
            Find Jobs
          </Link>
          <Link
            to="/categories"
            onClick={() => setIsMenuOpen(false)}
            className={`text-[17.7px] ${isActive(
              "/categories"
            )} hover:text-careersng-purple`}
          >
            Categories
          </Link>
          <Link
            to="/how_it_works"
            onClick={() => setIsMenuOpen(false)}
            className={`text-[17.7px] ${isActive(
              "/how_it_works"
            )} hover:text-careersng-purple`}
          >
            How It Works
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsMenuOpen(false)}
            className={`text-[17.7px] ${isActive(
              "/blog"
            )} hover:text-careersng-purple`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`text-[17.7px] ${isActive(
              "/contact"
            )} hover:text-careersng-purple`}
          >
            Contat Us
          </Link>
          <Link
            to="/faq"
            onClick={() => setIsMenuOpen(false)}
            className={`text-[17.7px] ${isActive(
              "/faq"
            )} hover:text-careersng-purple`}
          >
            FAQ
          </Link>
          <Link
            to="/resume"
            onClick={() => setIsMenuOpen(false)}
            className={`text-[17.7px] ${isActive(
              "/resume"
            )} hover:text-careersng-purple`}
          >
            Resume Revamp
          </Link>
          <Link
            to="/cv"
            onClick={() => setIsMenuOpen(false)}
            className={`text-[17.7px] ${isActive("/cv")} hover:text-careersng-purple`}
          >
            Build CV
          </Link>

          <div className="flex flex-col gap-3">
            {user ? (
              <>
                <button onClick={handleLogout} className="border-0 bg-gray-100 font-semibold p-3">Logout</button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-5">
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-gray-700 text-sm p-3 text-center border border-gray-300">Log In</Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)} className="text-white p-3 text-sm bg-[#ee774f] text-center">Sign Up</Link>
              </div>
            )}

           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
