import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, _setLoggedIn] = useState(true)
  const [user, _setUser] = useState({
      email: "yustee2017@gmail.com",
      password:"Olamilekan@9",
      role:"client",
      username:"Olawoyin",
      image: "",
  })
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);


   // Close dropdown when clicking outside
   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-900 underline font-semibold" : "text-gray-600";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-3 items-center">
          <Link to="/" className={`${isActive('/jobs') ? 'flex items-end space-x-2' : ''}`}>

              <div className="text-2xl font-bold flex items-end text-careersng-navy">
                <img src="../../Images/logo.png" alt="" className="w-8" />
                <h4 className="text-xl -ml-2 font-extrabold text-careersng-navy">
                  areermatters<span className="text-[#F25A29]">NG</span>
                </h4>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden mt-1 md:flex items-center text-sm space-x-4">
              <Link to="/jobs" className={`${isActive('/jobs')} hover:text-red-700 transition-colors`}>
                Find Jobs
              </Link>
              <Link to="/categories" className={`${isActive('/categories')} hover:text-red-700  transition-colors`}>
                Categories
              </Link>
              <Link to="/about" className={`${isActive('/about')} hover:text-red-700  transition-colors`}>
                How It Works
              </Link>
              <Link to="/blog" className={`${isActive('/blog')} hover:text-red-700 transition-colors`}>
                Blog
              </Link>
            </div>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-2">

          {
            loggedIn ? ( 
            
            
            <>
              


    
<div className="relative flex items-center gap-4" ref={dropdownRef}>
      

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
            {user.image ? (
              <img
                src={user.image}
                alt={user.username}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-careersng-purple text-white font-semibold text-xs">
                {user.username.charAt(0)}
              </div>
            )}
          </div>

          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-xs">{user.username}</h4>
            <span className="text-[10px] text-gray-500">{user.email}</span>
          </div>

          <ChevronDown className="h-4 w-4 text-gray-600" />
        </button>

        {/* Slide Animation */}
        <div
          className={`
            absolute flex flex-col gap-3 p-4 right-0 mt-2 w-48 bg-white shadow rounded-md z-50 border border-gray-300
            transform transition-all duration-300 ease-in-out
            ${open ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}
          `}
        >
          {user.role === 'client' && (
            <Link
              to="/post_job"
              className={`${isActive('/post_job')} hover:text-red-700 transition-colors text-sm font-medium`}
            >
              Post Job
            </Link>
          )}
          <Link
            to="/dashboard"
            className={`${isActive('/dashboard')} hover:text-red-700 transition-colors text-sm font-medium`}
          >
            Dashboard
          </Link>
          <button
            onClick={() => {
              // handle logout here
              setOpen(false);
            }}
            className="w-full text-left hover:text-red-700 transition-colors text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>














            </>
            ) : 
            (
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
            )
          }
          


          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-careersng-purple"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="flex justify-between items-center px-6 py-4 border-b">
          {/* Logo */}
          <Link to="/" className="flex items-end space-x-2" onClick={() => setIsMenuOpen(false)}>
            <img src="../../Images/logo.png" alt="" className="w-8" />
            <h4 className="text-xl font-extrabold -ml-3 text-careersng-navy">areermatters<span className="text-[#F25A29]">NG</span>
            </h4>
          </Link>

          {/* Close button */}
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={28} className="text-gray-800" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex bg-white h-[100vh] text-xl flex-col px-6 py-4 space-y-4">
          {
            loggedIn && (
              <>
              
            
          <div className="flex items-center">
            <div className="h-10 min-w-10 rounded-full overflow-hidden bg-gray-200 mr-2">
              {user.image ? (
                <img src={user.image} alt={user.username} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-careersng-purple text-white font-medium">
                  {user.username.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <h4 className="font-extrabold ">{user.username}</h4>
              <span className="text-sm text-gray-500">
                {user.email}
              </span>
            </div>
          </div>

          <Link to="/dashboard" className={`${isActive('/dashboard')} hover:text-red-700 transition-colors`}>
                Dashboard
              </Link>
              </>
            )
          }

          <Link to="/jobs" onClick={() => setIsMenuOpen(false)} className={`text-lg ${isActive('/jobs')} hover:text-careersng-purple`}>
            Find Jobs
          </Link>
          <Link to="/categories" onClick={() => setIsMenuOpen(false)} className={`text-lg ${isActive('/categories')} hover:text-careersng-purple`}>
            Categories
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-lg ${isActive('/about')} hover:text-careersng-purple`}>
            How It Works
          </Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className={`text-lg ${isActive('/blog')} hover:text-careersng-purple`}>
            Blog
          </Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className={`text-lg ${isActive('/contact')} hover:text-careersng-purple`}>
            Contat Us
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-lg ${isActive('/faq')} hover:text-careersng-purple`}>
            FAQ
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-lg ${isActive('/resume')} hover:text-careersng-purple`}>
            Resume Revamp
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-lg ${isActive('/cv')} hover:text-careersng-purple`}>
            Build CV
          </Link>

          <div className="flex flex-col gap-3">


          {
            loggedIn ? ( <>
              <Link to='/'>Logout</Link>
                  </>
            ) : 
            (
            <>
              <Link to="/login">
                  Log In
              </Link>
              <Link to="/register">
                  Sign Up
              </Link>
            </>  
            )
          }


          

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-7 min-w-7 rounded-full overflow-hidden bg-gray-200 mr-1">
                    {user.image ? (
                      <img src={user.image} alt={user.username} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-careersng-purple text-white font-medium">
                        {user.username.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-extrabold text-xs">{user.username}</h4>
                    <span className="text-[10px] text-gray-500">
                      {user.email}
                    </span>
                  </div>
                </div>

                <Link to='/'>Logout</Link>
              </div> */}


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
