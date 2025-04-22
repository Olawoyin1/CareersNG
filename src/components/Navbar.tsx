
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
  
//   const isActive = (path: string) => {
//     return location.pathname === path ? "text-careersng-purple" : "text-gray-600";
//   };

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex gap-3 items-center">
//               {/* Logo */}
//               <Link to="/" className="flex items-end space-x-2">
//                 <div className="text-2xl font-bold flex items-end text-careersng-navy">
//                     <img src="../../Images/logo.png" alt="" className="w-8" />
//                     <h4 className="text-xl -ml-2  font-extrabold text-careersng-navy">areermatters<span className="text-[#F25A29]">NG</span></h4>
              
//                 </div>
//               </Link>
//               {/* Desktop Navigation */}
//               <div className="hidden mt-1 md:flex items-center space-x-4">
//                 <Link to="/jobs" className={`${isActive('/jobs')} hover:text-careersng-purple transition-colors`}>
//                   Find Jobs
//                 </Link>
//                 <Link to="/categories" className={`${isActive('/categories')} hover:text-careersng-purple transition-colors`}>
//                   Categories
//                 </Link>
//                 <Link to="/about" className={`${isActive('/about')} hover:text-careersng-purple transition-colors`}>
//                   How It Works
//                 </Link>
//                 <Link to="/blog" className={`${isActive('/blog')} hover:text-careersng-purple transition-colors`}>
//                   Blog
//                 </Link>
//               </div>
//           </div>

//           {/* Authentication Buttons */}
//           <div className="hidden md:flex items-center space-x-1">
//             <Link to="/login">
//               <button  className="border text-sm border-gray-800 p-2 px-5 items-center gap-2">
                
//                 Log In
//               </button>
//             </Link>
//             <Link to="/register">
//               <button className="bg-[#ee774f] text-white text-sm hover:bg-careersng-purple-dark p-2 px-5  flex items-center">
                
//                 Sign Up
//               </button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               className="text-gray-500 hover:text-careersng-purple"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100">
//           <div className="">
//             <Link
//               to="/jobs"
//               className={`block py-2 ${isActive('/jobs')} hover:text-careersng-purple`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Find Jobs
//             </Link>
//             <Link
//               to="/categories"
//               className={`block py-2 ${isActive('/categories')} hover:text-careersng-purple`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Categories
//             </Link>
//             <Link
//               to="/about"
//               className={`block py-2 ${isActive('/about')} hover:text-careersng-purple`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               How It Works
//             </Link>
//             <Link
//               to="/blog"
//               className={`block py-2 ${isActive('/blog')} hover:text-careersng-purple`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Blog
//             </Link>
//             <div className="flex flex-col space-y-3">
//               <Link to="/login">
//                 <button  className="w-full bg-blue-950 text-white border-0 p-2 justify-center">
//                   Log In
//                 </button>
//               </Link>
//               <Link to="/register">
//                 <button className="w-full p-2 bg-cyan-950 text-white border-0 justify-center bg-careersng-purple hover:bg-careersng-purple-dark">
//                   Sign Up
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-careersng-purple" : "text-gray-600";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-3 items-center">
            <Link to="/" className="flex items-end space-x-2">
              <div className="text-2xl font-bold flex items-end text-careersng-navy">
                <img src="../../Images/logo.png" alt="" className="w-8" />
                <h4 className="text-xl -ml-2 font-extrabold text-careersng-navy">
                  areermatters<span className="text-[#F25A29]">NG</span>
                </h4>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden mt-1 md:flex items-center space-x-4">
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
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-1">
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
        <div className="flex bg-white h-[100vh] flex-col px-6 py-4 space-y-4">
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

          <div className="pt-6 space-y-3">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-blue-950 text-white p-2">
                Log In
              </button>
            </Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full p-2 bg-careersng-purple text-white hover:bg-careersng-purple-dark">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
