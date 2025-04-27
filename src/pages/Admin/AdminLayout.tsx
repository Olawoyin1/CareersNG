import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsLayoutSidebar } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaCogSolid } from "react-icons/lia";
import { CiLogout } from "react-icons/ci";
import { GoHome } from "react-icons/go";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [user, _setUser] = useState({
    email: "yustee2017@gmail.com",
    password:"Olamilekan@9",
    role:"client",
    username:"Olawoyin",
    image: "",
})

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    alert("You have been successfully logged out.");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = isSidebarCollapsed ? "w-20" : "w-64";

  return (
    <div className="flex cf min-h-screen w-full">
      {/* Overlay for mobile */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 flex flex-col justify-between bg-gray-50 transition-all duration-300
          ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
          ${sidebarWidth}
        `}
      >
        <div>
          <div className="flex items-center gap-2 p-6">
            <Link to="/admin" className="flex flex-col">
              <span className={`text-xl font-bold text-careersng-navy transition-all duration-300 ${isSidebarCollapsed ? "hidden" : "block"}`}>
                Careersmatters<span className="color">NG</span>
              </span>
            <span className={`${isSidebarCollapsed ? "hidden" : "block text-sm font-medium text-gray-400"}`} >Admin</span>
              {isSidebarCollapsed && (
                <img src="../../../Images/logo.png" className="w-8" alt="" />
              )}
            </Link>
          </div>

          <nav className="flex flex-col">
            <Link
              to="/admin"
              className={`flex items-center gap-3 px-6 py-3 hover:bg-gray-100 ${
                isActive("/admin") ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              <RxDashboard className="h-5 w-5" />
              {!isSidebarCollapsed && <span>Dashboard</span>}
            </Link>

            <Link
              to="/admin/jobs"
              className={`flex items-center gap-3 px-6 py-3 hover:bg-gray-100 ${
                isActive("/admin/jobs") ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              <GoBriefcase className="h-5 w-5" />
              {!isSidebarCollapsed && <span>Manage Jobs</span>}
            </Link>

            <Link
              to="/admin/blogs"
              className={`flex items-center gap-3 px-6 py-3 hover:bg-gray-100 ${
                isActive("/admin/blogs") ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              <IoDocumentTextOutline className="h-5 w-5" />
              {!isSidebarCollapsed && <span>Manage Blogs</span>}
            </Link>

            <Link
              to="/admin/settings"
              className={`flex items-center gap-3 px-6 py-3 hover:bg-gray-100 ${
                isActive("/admin/settings") ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              <LiaCogSolid className="h-5 w-5" />
              {!isSidebarCollapsed && <span>Settings</span>}
            </Link>
            
            <Link
              to="/"
              className={`flex items-center gap-3 px-6 py-3 hover:bg-gray-100 ${
                isActive("/admin/settings") ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              <GoHome className="h-5 w-5" />
              {!isSidebarCollapsed && <span>Homepage</span>}
            </Link>
          </nav>
        </div>

        {/* Footer */}
        <div className="p-6">
          <button
            onClick={handleLogout}
            className={`flex items-center justify-center w-full bg-white  gap-3  ${windowWidth >= 768 ? (isSidebarCollapsed ? "py-1" : "px-4 py-2") : "py-1"}     border border-gray-300 rounded-md text-sm hover:bg-gray-100`}
          >
            <CiLogout className="h-5 w-5" />
            {!isSidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300
          ${windowWidth >= 768 ? (isSidebarCollapsed ? "ml-20" : "ml-64") : "ml-0"}
        `}
      >
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-gray-300 bg-white px-6">
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setMobileSidebarOpen(true);
              } else {
                setIsSidebarCollapsed(!isSidebarCollapsed);
              }
            }}
            className=""
          >
            <BsLayoutSidebar className="h-6 w-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>


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
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
